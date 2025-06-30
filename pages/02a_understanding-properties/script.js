import gsap from 'gsap';

gsap.to('.box', {
  // x:-200,
  // y:100,
  opacity:1,
  rotation: 360,
  background:'#6195921',
  // borderRadius: '50%',
  scale:'1.3',
  duration:2,
// delay:2,
ease:'power1.inOut',
repeat:-1,
yoyo:true,
// repeatDelay: 2,
// pause:true,
stagger:1,
})