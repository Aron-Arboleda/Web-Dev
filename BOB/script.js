document.addEventListener("DOMContentLoaded", function () {
  // DOM elements
  const toggleBtn = document.getElementById("chatbot-toggle");
  const closeBtn = document.getElementById("chatbot-close");
  const popup = document.getElementById("chatbot-popup");
  const inputField = document.getElementById("chatbot-input");
  const sendBtn = document.getElementById("chatbot-send");
  const messagesContainer = document.getElementById("chatbot-messages");
  const quickBtns = document.querySelectorAll(".quick-btn");

  // Toggle chatbot visibility
  toggleBtn.addEventListener("click", function () {
    popup.classList.toggle("hidden");
    if (!popup.classList.contains("hidden")) {
      inputField.focus();
    }
  });

  closeBtn.addEventListener("click", function () {
    popup.classList.add("hidden");
  });

  // Send message function
  function sendMessage() {
    const message = inputField.value.trim();
    if (message) {
      addMessage(message, "user");
      inputField.value = "";
      setTimeout(() => {
        respondToMessage(message);
      }, 800);
    }
  }

  // Quick button handlers
  quickBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const issue = this.textContent;
      addMessage(issue, "user");
      setTimeout(() => {
        respondToMessage(issue);
      }, 800);
    });
  });

  // Send message on Enter key or button click
  inputField.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

  sendBtn.addEventListener("click", sendMessage);

  // Add message to chat
  function addMessage(text, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add(
      "chat-message",
      `${sender}-message`,
      "p-3",
      "mb-2"
    );
    messageDiv.textContent = text;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Bot responses
  function respondToMessage(message) {
    let response = "";
    const lowerMsg = message.toLowerCase();

    // Knowledge-base rules (priority checks)
    if (
      lowerMsg.includes("no power") ||
      lowerMsg.includes("won't turn on") ||
      (lowerMsg.includes("power button") && lowerMsg.includes("press"))
    ) {
      response = "Try this: make sure power cable is securely plugged in.";
    } else if (
      (lowerMsg.includes("screen") && lowerMsg.includes("black")) ||
      lowerMsg.includes("black screen")
    ) {
      response = "Try this: make sure monitor cable is plugged in correctly.";
    } else if (
      lowerMsg.includes("shut down") ||
      lowerMsg.includes("shutdown") ||
      (lowerMsg.includes("random") &&
        (lowerMsg.includes("shut") || lowerMsg.includes("shutdown"))) ||
      lowerMsg.includes("feels hot") ||
      lowerMsg.includes("overheat") ||
      lowerMsg.includes("hot")
    ) {
      response =
        "Try this: check if fans are in good condition and clean system unit.";
    } else if (lowerMsg.includes("slow") || lowerMsg.includes("performance")) {
      response = "Try this: try deleting unnecessary files or update drivers.";
    } else if (
      lowerMsg.includes("internet") ||
      lowerMsg.includes("wifi") ||
      lowerMsg.includes("connection")
    ) {
      response =
        "For internet issues:\n1. Restart your router and modem\n2. Check if other devices are connected\n3. Try a wired connection if possible\n4. Update your network drivers";
    } else if (lowerMsg.includes("blue screen") || lowerMsg.includes("bsod")) {
      response =
        "Blue screens are often caused by hardware or driver issues:\n1. Note the error code\n2. Update your drivers\n3. Check for overheating\n4. Run Windows Memory Diagnostic";
    } else if (lowerMsg.includes("virus") || lowerMsg.includes("malware")) {
      response =
        "For virus concerns:\n1. Run a full system scan with your antivirus\n2. Try Windows Defender if you don't have one\n3. Boot in Safe Mode and scan\n4. Consider a dedicated malware removal tool";
    } else {
      response =
        "I can help with common PC issues like:\n- No power\n- Black screen\n- Random shutdown or overheating\n- Slow performance\n\nTry describing your issue in more detail or click one of the quick buttons above.";
    }

    addMessage(response, "bot");
  }

  // Initialize with a welcome message if empty
  if (messagesContainer.children.length === 0) {
    addMessage(
      "Hi there! I'm ByteBuddy, your PC troubleshooting assistant. What seems to be the problem?",
      "bot"
    );
  }
});
