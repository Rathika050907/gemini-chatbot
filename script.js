const API_KEY = "AIzaSyDwXbtoEcCU5M3-iBG4iCfHGHGOW1IuAGs";

document.addEventListener("DOMContentLoaded", loadChatHistory);

async function sendMessage() {
    let userInput = document.getElementById("user-input").value.trim();
    if (!userInput) return;

    appendMessage("user-message", userInput);

    // Show typing indicator
    let typingIndicator = document.createElement("div");
    typingIndicator.classList.add("message", "bot-message");
    typingIndicator.innerText = "Bot is typing...";
    document.getElementById("chat-box").appendChild(typingIndicator);
    document.getElementById("chat-box").scrollTop = document.getElementById("chat-box").scrollHeight;

    try {
        let response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=${API_KEY}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: [{ role: "user", parts: [{ text: userInput }] }] })
        });

        let data = await response.json();
        let botReply = "Sorry, I couldn't understand that.";

        if (data.candidates && data.candidates.length > 0 &&
            data.candidates[0].content && data.candidates[0].content.parts.length > 0) {
            botReply = data.candidates[0].content.parts[0].text;
        }

        // Remove typing indicator & show bot response
        typingIndicator.remove();
        appendMessage("bot-message", botReply);
        speakText(botReply); // Read out the response
    } catch (error) {
        console.error("Error:", error);
        typingIndicator.remove();
        appendMessage("bot-message", "Error connecting to the server.");
    }

    document.getElementById("user-input").value = "";
}

// Function to add message to chat UI and save in localStorage
function appendMessage(className, text) {
    let chatBox = document.getElementById("chat-box");
    let messageDiv = document.createElement("div");
    messageDiv.classList.add("message", className);
    messageDiv.innerText = text;
    chatBox.appendChild(messageDiv);

    saveMessage(className, text);

    // Auto-scroll to the latest message
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Save chat history in localStorage
function saveMessage(className, text) {
    let chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
    chatHistory.push({ className, text });
    localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
}

// Load chat history from localStorage when the page loads
function loadChatHistory() {
    let chatBox = document.getElementById("chat-box");
    let chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];

    chatHistory.forEach(({ className, text }) => {
        let messageDiv = document.createElement("div");
        messageDiv.classList.add("message", className);
        messageDiv.innerText = text;
        chatBox.appendChild(messageDiv);
    });

    // Auto-scroll to latest message
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Clear chat history
function clearChatHistory() {
    localStorage.removeItem("chatHistory");
    document.getElementById("chat-box").innerHTML = "";
}

// Speech-to-text (voice input)
function startVoiceRecognition() {
    let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.start();

    recognition.onresult = function(event) {
        document.getElementById("user-input").value = event.results[0][0].transcript;
    };
}

// Text-to-speech (bot response)
function speakText(text) {
    let speech = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(speech);
}

// Dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
