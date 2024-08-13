const responsiveMenuButton = document.getElementById('burgermenu');
const internalHolder = document.getElementById('inholder');
const navBarLinks = document.querySelector(".navbar-links");

responsiveMenuButton.addEventListener("click", function() {
	navBarLinks.classList.toggle('open');
	responsiveMenuButton.classList.toggle('open');
	if (internalHolder.classList.contains('open')) {
		internalHolder.classList.toggle('open');
	} else {
		setTimeout(function() {
    	internalHolder.classList.toggle('open');
	}, 600)
	}
});

window.onclick = function() {
	if (internalHolder.classList.contains('open')) {
		navBarLinks.classList.remove('open');
		responsiveMenuButton.classList.remove('open');
		internalHolder.classList.remove('open');
	};
};