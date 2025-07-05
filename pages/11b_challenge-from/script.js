import gsap from 'gsap';

const card = document.getElementById('card');
let flipped = false;

// card.addEventListener('click', () => {
//   gsap.to(card, {
//     duration: 0.6,
//     rotationY: flipped ? 0 : 180,
//     ease: "power2.inOut"
//   });
//   flipped = !flipped;
// });

card.addEventListener('mouseenter', () => {
	if (!flipped) {
		gsap.to(card, {
			duration: 0.6,
			rotationY: 180,
			ease: 'power2.inOut',
		});
		flipped = true;
	}
});

card.addEventListener('mouseleave', () => {
	if (flipped) {
		gsap.to(card, {
			duration: 0.6,
			rotationY: 0,
			ease: 'power2.inOut',
		});
		flipped = false;
	}
});
