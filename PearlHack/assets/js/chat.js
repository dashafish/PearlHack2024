document.addEventListener('DOMContentLoaded', () => {
    const chatInterface = document.getElementById('chat-interface');
    const inputField = document.querySelector('.chat-input input[type="text"]');
    const sendButton = document.querySelector('.chat-input button');
  
    function addUserMessage(message) {
      const messageDiv = document.createElement('div');
      messageDiv.classList.add('chat-message', 'user');
  
      const messageText = document.createElement('p');
      messageText.textContent = message;
  
      messageDiv.appendChild(messageText);
      chatInterface.appendChild(messageDiv);
    }
  
    function addBotMessage(message) {
      const messageDiv = document.createElement('div');
      messageDiv.classList.add('chat-message', 'bot');
  
      const botIcon = document.createElement('img');
      botIcon.src = '../assets/images/bot.png'; 
      botIcon.alt = 'Bot';
      botIcon.classList.add('chat-icon');
  
      const messageText = document.createElement('p');
      messageText.textContent = message;
  
      messageDiv.appendChild(botIcon);
      messageDiv.appendChild(messageText);
      chatInterface.appendChild(messageDiv);
    }
    function addUserMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chat-message', 'user');
      
        const userIcon = document.createElement('img');
        userIcon.src = '../assets/images/user.png';
        userIcon.alt = 'User';
        userIcon.classList.add('chat-icon');
      
        const messageText = document.createElement('p');
        messageText.textContent = message;
      
        messageDiv.appendChild(userIcon);
        messageDiv.appendChild(messageText);
        chatInterface.appendChild(messageDiv);
    }

  function getBotResponse(userMessage) {
    userMessage = userMessage.toLowerCase();
    if (userMessage.includes("help me pick a gift")) {
      return "Of course, can you tell me the age of the person?";
    } else if (userMessage.includes("age is")) {
      return "Great, what are their interests?";
    } else if (userMessage.includes("likes")) {
      return "Perfect, are you looking for something practical or fun?";
    } else if (userMessage.includes("practical")) {
      return "Understood, how about a nice watch or a book?";
    } else if (userMessage.includes("fun")) {
      return "Got it, perhaps a board game or something for a hobby?";
    } else if (userMessage.includes("thank you")) {
      return "You're welcome! Is there anything else I can assist with?";
    } else {
      return "I'm not quite sure how to help with that. Could you provide more details?";
    }
  }

  sendButton.addEventListener('click', () => {
    const userMessage = inputField.value.trim();
    if (userMessage) {
      addUserMessage(userMessage);
      inputField.value = '';

      // Use getBotResponse to generate a bot response
      setTimeout(() => {
        const botResponse = getBotResponse(userMessage);
        addBotMessage(botResponse);
      }, 1000);
    }
  });
  
    function scrollToBottom() {
      chatInterface.scrollTop = chatInterface.scrollHeight;
    }
  
    // Call scrollToBottom whenever a new message is added
    const observer = new MutationObserver(scrollToBottom);
    observer.observe(chatInterface, { childList: true });
  });
  