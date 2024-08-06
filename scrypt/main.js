const nightThemeBtn = document.getElementById("night-theme-btn")

nightThemeBtn.addEventListener("click", function () {
	document.body.classList.toggle("night-theme")

	const theme = localStorage.getItem("theme")

	if (theme === "night-theme") {
		localStorage.setItem("theme", "")
	} else {
		localStorage.setItem("theme", "night-theme")
	}

	let image = document.getElementById("hero-img")

	if (image.src.match('./img/hero.png')) {
		image.src = './img/dark-hero.png'
	} else {
		image.src = './img/hero.png'
	}

	let arrow = document.getElementById("arrow-scroll")

	if (arrow.src.match('./img/arrow-scroll.svg')) {
		arrow.src = './img/dark-arrow-scroll.svg'
	} else {
		arrow.src = './img/arrow-scroll.svg'
	}

	let gmail = document.getElementById("gmail")

	if (gmail.src.match('./img/gmail-icon.svg')) {
		gmail.src = './img/dark-gmail-icon.svg'
	} else {
		gmail.src = './img/gmail-icon.svg'
	}

	let linkedin = document.getElementById("linkedin")

	if (linkedin.src.match('./img/linkedin-icon.svg')) {
		linkedin.src = './img/dark-linkedin-icon.svg'
	} else {
		linkedin.src = './img/linkedin-icon.svg'
	}

	let github = document.getElementById("github")

	if (github.src.match('./img/github-icon.svg')) {
		github.src = './img/dark-github-icon.svg'
	} else {
		github.src = './img/github-icon.svg'
	}

})


