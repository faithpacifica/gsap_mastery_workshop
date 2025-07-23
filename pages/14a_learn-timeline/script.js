import gsap from "gsap";

const tl = gsap.timeline();

tl.to(".box", { x: 200, duration: 1 });
tl.to(".circle", { y: 100, duration: 1 });