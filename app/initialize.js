document.addEventListener('DOMContentLoaded', function() {

//Anime.js
var lineDrawing = animejs({
	targets: '#lineDrawing .lines path',
	strokeDashoffset: [animejs.setDashoffset, 0],
	easing: 'easeInOutSine',
	duration: 1500,
	delay: function(el, i) { return i * 250 },
	direction: 'alternate',
	loop: true
});

console.log('Initialized app');
});

