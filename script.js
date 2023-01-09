function toggleTheme() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector(".profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/dark-avatar.jpg")
  } else {
    img.setAttribute("src", "https://github.com/wesleypontes.png")
  }
}
