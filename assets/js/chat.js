   // JavaScript code for handling messages
   document.addEventListener("DOMContentLoaded", function () {
    const messageInput = document.getElementById("message");
    const sendButton = document.getElementById("send-button");
    const messageDisplay = document.getElementById("message-display");

    // Event listener for sending a message
    sendButton.addEventListener("click", function () {
      const messageText = messageInput.value.trim();
      if (messageText === "") return; // Don't send empty messages

      const sentMessageDiv = document.createElement("div");
      sentMessageDiv.className = "sent-message";
      sentMessageDiv.innerHTML = `<div class="message-bubble"> ${messageText} </div>`;

      messageDisplay.appendChild(sentMessageDiv);

      // Clear the input field after sending
      messageInput.value = "";
    });

    // Simulate receiving a message (for demonstration purposes)
    function receiveMessage(messageText) {
      const receivedMessageDiv = document.createElement("div");
      receivedMessageDiv.className = "received-message";
      receivedMessageDiv.innerHTML = `<div class="message-bubble"> ${messageText} </div>`;

      messageDisplay.appendChild(receivedMessageDiv);
    }

    // Simulate receiving a message after a delay (for demonstration purposes)
    setTimeout(() => {
      receiveMessage("This is a received message");
    }, 2000);
  });
  document.addEventListener("DOMContentLoaded", function () {
    // Function to set the secondary user's profile
    function setSecondaryUserProfile(profileImage, userName) {
      const secondaryUserProfile = document.getElementById("secondary-user-profile");
      const secondaryUserImage = secondaryUserProfile.querySelector("img");
      const secondaryUserName = secondaryUserProfile.querySelector("span");

      secondaryUserImage.src = profileImage;
      secondaryUserName.textContent = userName;
      secondaryUserProfile.style.display = "flex";
    }

    // Function to clear the secondary user's profile
    function clearSecondaryUserProfile() {
      const secondaryUserProfile = document.getElementById("secondary-user-profile");
      secondaryUserProfile.style.display = "none";
    }

    // Add a click event listener to user profiles for setting the secondary user's profile
    const userProfiles = document.querySelectorAll(".user-profile");
    userProfiles.forEach((profile) => {
      profile.addEventListener("click", function () {
        const profileImage = profile.querySelector("img").src;
        const userName = profile.querySelector("span").textContent;
        setSecondaryUserProfile(profileImage, userName);
      });
    });

    // Clear the secondary user's profile when no user is selected (for demonstration)
    clearSecondaryUserProfile();
  });
