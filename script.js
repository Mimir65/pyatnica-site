
document.addEventListener("DOMContentLoaded", () => {
  const phrases = [
    "Ты не просто поднимаешь вес — ты поднимаешь себя.",
    "Каждый день — шанс стать сильнее.",
    "Пот — это жир, который плачет.",
    "Сила приходит с упорством."
  ];
  const motive = document.querySelector(".motive");
  setInterval(() => {
    const random = Math.floor(Math.random() * phrases.length);
    motive.textContent = phrases[random];
  }, 5000);
});
