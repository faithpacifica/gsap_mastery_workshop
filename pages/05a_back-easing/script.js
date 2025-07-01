import gsap from 'gsap'

const tabs = document.querySelectorAll('.tab')
const tabRow = document.querySelector('.tab-row')
const indicator = document.querySelector('.indicator')

const updateIndicator = (target) =>{
  const tabBounds = target.getBoundingClientRect() // Get the bounding rectangle of the target tab
  const rowBounds = tabRow.getBoundingClientRect() // Get the bounding rectangle of the tab row
  const width = tabBounds.width // Get the width of the target tab
  const offset = tabBounds.left - rowBounds.left // Calculate the offset of the target tab relative to the tab row
  gsap.to(indicator, {
    x: offset, // Move the indicator to the left position of the target tab
    width: width, // Set the width of the indicator to match the target tab
    duration: 0.4, // Duration of the animation
    ease: 'back.out(1.7)' // Easing function for a smooth effect
  })
} 

tabs.forEach(tab =>{
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active')) // Remove active class from all tabs
   tab.classList.add('active') // Add active class to the clicked tab
    updateIndicator(tab) // Update the indicator position and size
  }) 
})

updateIndicator('.tab.active')