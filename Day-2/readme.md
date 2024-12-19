# Chatbot Project GDG Web Dev Workshop Day 2

This project implements a simple chatbot using the Gemini API. The chatbot is built using **HTML**, **CSS**, and **JavaScript** and provides a seamless interface for users to interact and receive responses powered by the Gemini API.

## Project Structure

The project consists of the following files:

- `index.html`: The main HTML file that contains the structure and layout of the chatbot.
- `style.css`: The stylesheet used to style the chatbot interface.
- `script.js`: The JavaScript file that handles the logic of interacting with the Gemini API and user inputs.

## Features

- **Chat Interface**: A user-friendly  chat-container includes (header,chat-body,chat-footer) with send and receive messages.
- **Gemini API Integration**: Powered by Gemini API to provide intelligent responses to user queries.
- **Responsive Design**: Built with responsive design to ensure a seamless experience across devices.

## Demo

You can view the live version of the chatbot by opening the `index.html` file in your browser.

## How to Use

1. Clone the repository to your local machine:
    ```bash
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```bash
    cd Project
    ```
3. Open the `index.html` file in your browser to start using the chatbot.

## Setup and Installation

1. Ensure you have access to the **Gemini API** for chatbot responses. You’ll need an API key or credentials (depending on how Gemini API works).
2. Update the `script.js` file to include your Gemini API key and endpoint if necessary.
3. Customize the styling and add any features as per your needs.

## File Breakdown

- `index.html`: Contains the markup for the chatbot interface, including the text input field, message display area, and send button.
- `style.css`: Handles the visual appearance of the chatbot, including colors, spacing, and layout.
- `script.js`: Manages user interactions, handles the API calls to Gemini, and updates the chat interface dynamically based on the user input and API response.

## API Integration (Gemini API)

In `script.js`, the user input is sent to the Gemini API, which processes the query and sends a response back. The response is displayed in the chat window for the user to see.

Example:
```javascript
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
    // push response in messages array
    messages.push({ sender: "bot", message: apiResponse });
    // and render again all messages 
    renderMessages();
```

---

# 🎉 Task for Day-2 Project: Complete the tasks below and win exciting prizes! 🎉
```
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
```

## Technologies Used

- **HTML**: For structuring the chatbot interface.
- **CSS**: For styling the chatbot.
- **JavaScript**: For adding dynamic functionality and API interaction.
- **Gemini API**: For processing user input and generating responses.


## Contact

For any inquiries, feel free to reach out to me at irashettg@gmail.com