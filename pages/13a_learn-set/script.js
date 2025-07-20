import gsap from 'gsap';

// First to get off the screen
gsap.set('.gsap-box', {
	opacity: 0,
	scale: 0.5,
	y: 500, x:-300
});

gsap.to('.gsap-box',{
  delay:0.5,
  opacity:1,
  scale:1,
  y:0, x:0,
  duration:0.9,
  ease:'expo.out'
}

)