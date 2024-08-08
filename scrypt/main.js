const nightThemeBtn = document.getElementById("night-theme-btn")
const checkbox = document.getElementById("night-theme-btn")

let hero = document.getElementById("hero-img")
let arrow = document.getElementById("arrow-scroll")
let gmail = document.getElementById("gmail")
let linkedin = document.getElementById("linkedin")
let github = document.getElementById("github")

if (localStorage.getItem("theme") == "night-theme") {
	checkbox.checked = true
}

if (localStorage.getItem("hero") == "true") {
	hero.setAttribute('src', './img/dark-hero.png')
}

if (localStorage.getItem("arrow") == "true") {
	arrow.setAttribute('src', './img/dark-arrow-scroll.svg')
}

if (localStorage.getItem("gmail") == "true") {
	gmail.setAttribute('src', './img/dark-gmail-icon.svg')
}

if (localStorage.getItem("linkedin") == "true") {
	linkedin.setAttribute('src', './img/dark-linkedin-icon.svg')
}

if (localStorage.getItem("github") == "true") {
	github.setAttribute('src', './img/dark-github-icon.svg')
}

nightThemeBtn.addEventListener("click", function () {
	document.body.classList.toggle("night-theme")

	const theme = localStorage.getItem("theme")

	if (theme === "night-theme") {
		localStorage.setItem("theme", "")
	} else {
		localStorage.setItem("theme", "night-theme")
	}
	
	if (theme === "night-theme") {
		localStorage.setItem("hero", false)
		localStorage.setItem("arrow", false)
		localStorage.setItem("gmail", false)
		localStorage.setItem("linkedin", false)
		localStorage.setItem("github", false)
		hero.setAttribute('src', './img/hero.png')
		arrow.setAttribute('src', './img/arrow-scroll.svg')
		gmail.setAttribute('src', './img/gmail-icon.svg')
		linkedin.setAttribute('src', './img/linkedin-icon.svg')
		github.setAttribute('src', './img/github-icon.svg')
	} else {
		localStorage.setItem("hero", true)
		localStorage.setItem("arrow", true)
		localStorage.setItem("gmail", true)
		localStorage.setItem("linkedin", true)
		localStorage.setItem("github", true)
		hero.setAttribute('src', './img/dark-hero.png')
		arrow.setAttribute('src', './img/dark-arrow-scroll.svg')
		gmail.setAttribute('src', './img/dark-gmail-icon.svg')
		linkedin.setAttribute('src', './img/dark-linkedin-icon.svg')
		github.setAttribute('src', './img/dark-github-icon.svg')
	}
})