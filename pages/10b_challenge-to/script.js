import gsap from 'gsap';

const showToastOne = () => {
	gsap.to('.toast.one ', {
		y: -180,
		opacity: 1,
		scale: 1,
		duration: 0.8,
		ease: 'power4.out',
		onComplete: () => {
			gsap.to('.toast.one', {
				y: 0,
        delay:2.2,
				opacity: 0,
				scale: 0.95,
				duration: 0.7,
				ease: 'power.in',
        onComplete:showToastTwo
			});
		},

	});
};
const showToastTwo = () => {
  gsap.to('.toast.two', {
    y: -180,
    opacity: 1,
    scale: 1,
    duration: 0.8,
    ease: 'power4.out',
    onComplete: () => {
      gsap.to('.toast.two', {
        y: 0,
        delay: 2.5,
        opacity: 0,
        scale: 0.95,
        duration: 0.7,
        ease: 'power.in',
        onComplete:showToastOne
      });
    }
  });
};

// Ishga tushiramiz
showToastOne();