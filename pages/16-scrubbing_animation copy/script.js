import "./style.css";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);


gsap.to(".box", {
  y: 200, //tepadan 200 QADAM TUSHADI
  opacity: 0, //0 ga tushadi yani yuqolib ketadi
  rotate: 360,
  stagger: 0.1, //har bir elementga 0.1 sekund kechikish bilan animatsiya qo'llanadi
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".container",
    start: "top center",
    end: "bottom 10%",
    scrub: 3, //3 sekund ichida animatsiya tugaydi
    markers: true,
  },
}); 

gsap.to(".box1", {
  x: 700, //700 QADAM GORIZONTAL YUQ
  rotate: 360, //aylanib yur
  duration: 3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".box1",
    start: "top center",
    end: "bottom 20%", //20% ga kelganda tugaydi  bu albatta scrollTrigger ichida bo'lishi kerak bulmasa animatsiya ishlamaydi!!!!!!!
    markers: true,
    scrub: true, // bu yerda animatsiya scroll bilan bog'liq, ya'ni foydalanuvchi pastga siljiganda animatsiya ham siljiydi
  },
});

// trigger: ".container"	We’re telling ScrollTrigger to watch the .container element to decide when to start the animation.
// start: "top center"	This means the animation will begin when the top of the container hits the center of the viewport.
// end: "bottom 20%"	It will finish when the bottom of the container hits 20% from the top of the viewport — giving us a nice, long scroll area to play with.