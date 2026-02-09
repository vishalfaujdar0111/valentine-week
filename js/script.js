document.addEventListener("DOMContentLoaded", () => {

  /* 🔊 CLICK SOUND */
  const clickSound = document.getElementById("clickSound");

  function playClickSound() {
    if (clickSound) {
      clickSound.currentTime = 0;
      clickSound.play().catch(() => {});
    }
  }

  /* 💖 ENTER BUTTON */
  const enterBtn = document.getElementById("enterBtn");

  if (enterBtn) {
    enterBtn.addEventListener("click", () => {
      playClickSound();
      document.body.classList.add("fade-out");

      const pages = [
        "rose.html",
        "propose.html",
        "chocolate.html",
        "teddy.html",
        "promise.html",
        "hug.html",
        "kiss.html",
        "valentine.html"
      ];

      const startDate = new Date("2026-02-07");
      const today = new Date();
      const diffDays = Math.floor(
        (today - startDate) / (1000 * 60 * 60 * 24)
      );

      const todayPage =
        diffDays >= 0 && diffDays < pages.length ? pages[diffDays] : null;

      setTimeout(() => {
        if (todayPage) {
          window.location.href = todayPage;
        } else {
          alert("💖 Valentine Week is coming soon!");
        }
      }, 800);
    });
  }

  /* ⬅ BACK BUTTON */
  document.querySelectorAll(".back-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      playClickSound();
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1000);
    });
  });

  /* 💖 FLOATING HEARTS (ALL PAGES) */
  function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = Math.random() > 0.5 ? "💖" : "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = 18 + Math.random() * 20 + "px";
    heart.style.animationDuration = 4 + Math.random() * 2 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }

  setInterval(createHeart, 600);

  /* 💖 Random emojis on index page */
const emojiBox = document.getElementById("randomEmojis");

if (emojiBox) {
  const emojis = ["🌹", "💍", "🍫", "🧸", "🤝", "🤗", "😘", "❤️"];
  let result = "";

  for (let i = 0; i < 5; i++) {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    result += randomEmoji + " ";
  }

  emojiBox.textContent = result;
}

/* 💖 Background random emojis (index page only) */
const bg = document.getElementById("emojiBackground");

if (bg) {
  const emojis = ["🌹", "💍", "🍫", "🧸", "🤝", "🤗", "😘", "❤️"];
  const count = 18; // kitne emojis background me

  for (let i = 0; i < count; i++) {
    const span = document.createElement("span");
    span.className = "bg-emoji";
    span.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    span.style.top = Math.random() * 100 + "vh";
    span.style.left = Math.random() * 100 + "vw";
    span.style.fontSize = 20 + Math.random() * 20 + "px";

    bg.appendChild(span);
  }
}

});
