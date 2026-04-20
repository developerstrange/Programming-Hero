document.addEventListener("DOMContentLoaded", () => {

  //-------------------------
  // Typing Effect
  //-------------------------
  const finalTextElement = document.getElementById("finalText");

  const fullText = "Hey,\nYou know… there’s something about you.\nThe way you smile, the way you talk, the way you exist…\nIt just makes everything around you feel warm.";

  let index = 0;

  function startTyping() {
    const interval = setInterval(() => {
      finalTextElement.style.opacity = "1";
      finalTextElement.textContent += fullText[index];
      index++;

      if (index >= fullText.length) {
        clearInterval(interval);
        finalTextElement.style.animation = "glowIn 1.5s forwards";
      }
    }, 40);
  }


  //-------------------------
  // Show screen helper
  //-------------------------
  function showScreen(screenId) {
    const screens = document.querySelectorAll(".screen");
    screens.forEach(s => s.style.display = "none");
    document.getElementById(screenId).style.display = "flex";
  }


  //-------------------------
  // Intro → screen2
  //-------------------------
  const intro = document.querySelector(".intro-screen");

  intro.addEventListener("animationend", () => {
    showScreen("screen2");
  });


  //-------------------------
  // Screen2 wrong/correct
  //-------------------------
  const wrongImgs = document.querySelectorAll(".wrong");
  const correctImg = document.querySelector(".correct");

  wrongImgs.forEach(img => {
    img.addEventListener("click", () => {
      img.style.animation = "shake 0.4s";
      setTimeout(() => img.style.animation = "", 400);
    });
  });

  correctImg.addEventListener("click", () => {
    showScreen("screen3");
  });


  //-------------------------
  // Inject shake animation
  //-------------------------
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes shake {
      0% { transform: translateX(0); }
      25% { transform: translateX(-8px); }
      50% { transform: translateX(8px); }
      75% { transform: translateX(-8px); }
      100% { transform: translateX(0); }
    }`;
  document.head.appendChild(style);


  //-------------------------
  // screen3 → screen4
  //-------------------------
  const tapButton = document.querySelector(".tap-button");

  tapButton.addEventListener("click", () => {
    showScreen("screen4");
  });


  //-------------------------
  // screen4 → screen5
  //-------------------------
  const card = document.querySelector(".image-container");

  card.addEventListener("click", () => {
    card.style.transform = "scale(1.1)";
    card.style.transition = "0.5s";

    setTimeout(() => {
      showScreen("screen5");
      finalTextElement.innerText = "";
      index = 0;
      startTyping();
    }, 600);
  });

});
