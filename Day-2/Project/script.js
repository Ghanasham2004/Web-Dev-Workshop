var messages = [
  {
    sender: "bot",
    message: "Hi there! How can I help you today?",
  },
];

// step access elements
const chatBody = document.querySelector(".chat-body");
const input = document.querySelector("#input-message");
const sendButton = document.querySelector("#send-btn");

// function for creating html for message
function getMessageHtml(sender, message) {
  return `
        <div class="message ${sender}">
            ${message}
          </div>
    `;
}

// function for rendering messages
function renderMessages() {
  chatBody.innerHTML = "";
  messages.forEach((message) => {
    chatBody.innerHTML += getMessageHtml(message.sender, message.message);
  });
}

renderMessages();

// send message to ai

// SEND MESSAGE THROUGH BUTTON
function sendMessage() {
  if (input.value != "") {
    sendMessageToAI();
  }
}

function handleKeyPress(event) {
  if (input.value != "" && event.key === "Enter") {
    sendMessageToAI();
  }
}

// api key - ADD YOUR API KEY HERE : https://aistudio.google.com/apikey
const API_KEY = "ADD_YOUR_API_KEY";

// ai function
const sendMessageToAI = async () => {
  const message = input.value;
  // alert(message)

  messages.push({ sender: "user", message });

  renderMessages();

  input.value = "";

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=" +
        API_KEY,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: message }],
              role: "user",
            },
          ],
        }),
      }
    );

    const data = await response.json();
    console.log(data);

    // extract and clean the response
    const apiResponse = data.candidates[0].content.parts[0].text.replace(
      /\*\*(.*?)\*\*/g,
      "$1"
    );

    messages.push({ sender: "bot", message: apiResponse });

    renderMessages();
  } catch (error) {
    console.log(error);
  }
};

/*
🎉 Task for Day-2 Project: Complete the tasks below and win exciting prizes! 🎉

1. Add a feature of typing indicator when the bot is responding to the user. 💬
2. Enable sending messages through the send button and by pressing the Enter key. 📩
3. Add any new features you want to enhance this chatbot. 🚀

🏆 Steps to claim your prize:
1. Create the project.
2. Post about it on LinkedIn with the hashtags #gdg and #gdgnkocet + tag to our GDG NKOCET and Me in the post. 
   - My Profile Link : https://www.linkedin.com/in/ghansham-irshetti/
   - GDG NKOCET Profile Link : https://www.linkedin.com/company/gdg-nkocet/
3. Tag me in your post to get an exciting prize! 🏅

What is the prize for this project?
1. A shout-out on my LinkedIn profile from GDG NKOCET
2. A detail notes of web development + DSA.

Happy Coding! 😇
*/
