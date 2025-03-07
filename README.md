# gemini-chatbot.
🔹 Overview
This is a frontend-based AI chatbot that interacts with users in real-time using the Gemini API. The chatbot is designed to take user input, send it to the Gemini language model, and display AI-generated responses in a chat interface.

✨ Features Included
✅ Core Chatbot Functionalities
✔ AI-Powered Responses – Uses Gemini API to generate intelligent replies.
✔ Seamless User Experience – Supports real-time, engaging conversations.

💾 Local Storage & History
✔ Chat History Saved – Stores conversations in localStorage to persist after page reload.
✔ Clear Chat Button 🗑 – Allows users to delete chat history anytime.

🎤 Voice & Speech Features
✔ Speech-to-Text (Voice Input 🎤) – Allows users to speak instead of typing.
✔ Text-to-Speech (Bot Reads Aloud 🔊) – The chatbot can read responses aloud.

🎨 User Interface & Design
✔ Responsive UI – Works smoothly across all devices.
✔ Typing Indicator ("Bot is typing...") – Enhances user experience with a loading effect.
✔ Dark Mode Toggle 🌙 – Users can switch between light and dark themes.
✔ Auto-Scroll Feature – Automatically scrolls to the latest messages.
✔ Styled Messages – Different colors for user and bot messages for easy distinction.

🔧 Performance & Error Handling
✔ Error Handling – Displays a message if the API request fails or there's a network issue.
✔ Optimized Code – Ensures smooth performance without lags.

🔹 Tech Stack
📌 Frontend: HTML, CSS, JavaScript
📌 API Integration: Google Gemini API
📌 Storage: Browser localStorage

🔹 How It Works
1️⃣ User types a message in the input box and clicks "Send".
2️⃣ The chatbot sends the input to Gemini API using a fetch request.
3️⃣ The API processes the request and returns a response.
4️⃣ The chatbot displays the response in the chat window.
5️⃣ The conversation is saved in localStorage, so users can see previous chats.
