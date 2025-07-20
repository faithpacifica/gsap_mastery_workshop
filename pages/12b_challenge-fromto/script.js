import gsap from 'gsap';

const reactions = document.querySelector('.reactions');

reactions.addEventListener('click', (e) => {
	const el = e.target;
	const emoji = el.dataset.emoji;
	if (!emoji) return;

	gsap.fromTo(
		el,
		{
			scale: 0.6,
			rotationY: 0,
			y: "0px",
			opacity: 1,
		},
		{
			duration: 1.5,
			scale: 1.3,
			rotationY: 180,
			delay: 0.3,
      stagger: 0.5,
			y: "-120px",

			ease: 'power2.out',
			onComplete: () => {
				// Restart the element's style so chiqib ketgach yana tiklanadi
				gsap.set(el, { opacity: 0, stagger: 0.5, delay: 0.1 });
				
			},
		}
	);
});
