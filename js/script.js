document.addEventListener("DOMContentLoaded", () => {
  const clickSound = document.getElementById("clickSound");

  function playClickSound() {
    if (clickSound) {
      clickSound.currentTime = 0;
      clickSound.play().catch(() => {});
    }
  }

  /* ENTER BUTTON (index.html) */
  const enterBtn = document.getElementById("enterBtn");

  if (enterBtn) {
    enterBtn.addEventListener("click", () => {
      playClickSound();

      document.body.classList.add("fade-out");

      const valentineWeek = [
        { page: "rose.html" },
        { page: "propose.html" },
        { page: "chocolate.html" },
        { page: "teddy.html" },
        { page: "promise.html" },
        { page: "hug.html" },
        { page: "kiss.html" },
        { page: "valentine.html" }
      ];

      const startDate = new Date("2026-02-07");
      const today = new Date();
      const diffDays = Math.floor(
        (today - startDate) / (1000 * 60 * 60 * 24)
      );

      const todayPage =
        diffDays >= 0 && diffDays < valentineWeek.length
          ? valentineWeek[diffDays].page
          : null;

      setTimeout(() => {
        if (todayPage) {
          window.location.href = todayPage;
        } else {
          alert("💖 Valentine Week is coming soon!");
        }
      }, 800);
    });
  }

  /* BACK BUTTON (ALL DAY PAGES) */
  document.querySelectorAll(".back-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      playClickSound();

      setTimeout(() => {
        window.location.href = "index.html";
      }, 1000);
    });
  });
});
