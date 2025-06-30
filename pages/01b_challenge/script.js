import {  gsap} from "gsap";

gsap.to('.card', {
	boxShadow: '0px 10px 50px rgba(0, 255,255,0.7)',
	duration: 2,
	repeat: -1,
	scale: 1,
	yoyo: true,
  opacity:0,
	ease: 'power1.inOut',
});
