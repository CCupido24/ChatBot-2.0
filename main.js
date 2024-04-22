document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const chatButton = document.getElementById('chatButton');
    const chatContainer = document.getElementById('chatContainer');

    // Toggle chat container visibility
    chatButton.addEventListener('click', () => {
        chatContainer.style.display = chatContainer.style.display === 'block' ? 'none' : 'block';
    });

    // Handle sending messages (optional)
    const userInput = document.getElementById('userInput');
    const sendMessageButton = document.getElementById('sendMessage');
    const chatMessages = document.getElementById('chatMessages');

    function sendMessage() {
        const message = userInput.value.trim();
        if (message !== '') {
            const newMessageElement = document.createElement('div');
            newMessageElement.textContent = `You: ${message}`;
            chatMessages.appendChild(newMessageElement);
            userInput.value = '';
        }
    }

    sendMessageButton.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
});