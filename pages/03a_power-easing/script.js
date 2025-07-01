import gsap from "gsap";

// Toast sahifa yuklanganda chiqsin
window.addEventListener("DOMContentLoaded", () => {
  const toast = document.querySelector(".toast");
  if (toast) {
    gsap.from(toast, {
      x: -300,
      duration: 1.2,
      ease: "power2.out"
    });
  }

  // Card sahifa yuklanganda paydo bo‘lsin
  const card = document.querySelector(".card");
  if (card) {
    gsap.from(card, {
      scale: 0.5,
      opacity: 0,
      duration: 1,
      ease: "power3.inOut"
    });
  }
});

// Button faqat bosilganda animatsiya qilsin
const btn = document.querySelector(".btn");
btn?.addEventListener("click", () => {
  gsap.to(btn, {
    y: -20,
    duration: 0.4,
    ease: "power4.out",
    yoyo: true,
    repeat: 1 // yoyo bilan orqaga qaytadi, sakrashga o‘xshatadi
  });
});
