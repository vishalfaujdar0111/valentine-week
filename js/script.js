// Valentine Week project – FINAL WORKING VERSION 💖

document.addEventListener("DOMContentLoaded", () => {
  console.log("JS loaded safely ✅");

  const valentineWeek = [
    { day: "Rose Day 🌹", page: "rose.html" },
    { day: "Propose Day 💍", page: "propose.html" },
    { day: "Chocolate Day 🍫", page: "chocolate.html" },
    { day: "Teddy Day 🧸", page: "teddy.html" },
    { day: "Promise Day 🤝", page: "promise.html" },
    { day: "Hug Day 🤗", page: "hug.html" },
    { day: "Kiss Day 😘", page: "kiss.html" },
    { day: "Valentine’s Day ❤️", page: "valentine.html" }
  ];

  const startDate = new Date("2026-02-07");
  const today = new Date();

  const diffDays = Math.floor(
    (today - startDate) / (1000 * 60 * 60 * 24)
  );

  let todayValentine = null;

  if (diffDays >= 0 && diffDays < valentineWeek.length) {
    todayValentine = valentineWeek[diffDays];
  }

  const enterBtn = document.getElementById("enterBtn");
  console.log("Button found:", enterBtn);

  if (!enterBtn) return;

  enterBtn.addEventListener("click", () => {
    document.body.classList.add("fade-out");

    setTimeout(() => {
      if (todayValentine) {
        alert(`💖 Today is ${todayValentine.day}`);
      } else {
        alert("💖 Valentine Week is coming soon!");
      }
    }, 800);
  });
});
