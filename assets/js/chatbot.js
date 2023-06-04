var chatLog = document.getElementById("chatbot-messages");
var userInput = document.getElementById("chatbot-input");
var sendBtn = document.getElementById("send-btn");


function toggleChatbox() {
    var chatbox = document.getElementById('chatbot-container');
    chatbox.style.display = chatbox.style.display === 'none' ? 'block' : 'none';
}

function sendMessage() {
    var input = document.getElementById('chatbot-input');
    var message = input.value;
    input.value = '';

    displayMessage(message, 'user');
    
    response = "Assalam-O-Alaikum! Welcome to the Muallim Website. We have our app under development phase right now! Stay Tuned :)";

    // Send the user's message to the chatbot
    if (message.trim() !== '') {
        displayMessage(response, 'bot');
    }
}

function displayMessage(message, sender) {
    var chatMessages = document.getElementById('chatbot-messages');
    var messageElement = document.createElement('div');
    messageElement.classList.add(sender);
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
}

// // Function to fetch response from Flask API
// function fetchResponse(message) {
//     fetch("/get_response", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ "message": message })
//     })
//     .then(response => response.json())
//     .then(data => {
//         displayMessage(data.response, "bot");
//     })
//     .catch(error => console.error(error));
// }

var inputField = document.getElementById('chatbot-input');
inputField.addEventListener('keydown', function (e) {
    if (e.code === 'Enter') {
        sendMessage();
    }
});


// Add event listener to send button
sendBtn.addEventListener('click', sendMessage);
