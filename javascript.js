const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

let noClicks = 0;
let pleaseText = "حباب🥹";

noBtn.addEventListener("click", () => {
  noClicks++;

  yesBtn.style.fontSize = `${18 + noClicks * 6}px`;
  yesBtn.style.padding = `${12 + noClicks * 4}px ${25 + noClicks * 8}px`;

  pleaseText += "حباب";
  message.textContent = `${pleaseText} 🥹`;

  if (noClicks >= 5) {
    noBtn.textContent = "فكر مرة تانية 😭";
  }

  if (noClicks >= 8) {
    noBtn.style.display = "none";
    message.textContent =  "خلص ما في غير نعم انجب 🖕🏻❤️";
  }
}); 

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div class="game-card">
      <div class="sticker"> <img src="img/love.jpg" alt="Bunny"></div>
      <h1>ياااي سامحتني!</h1>
      <p>بحبك كثييير 💕</p>
    </div>
  `;
});