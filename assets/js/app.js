import { modebtn, shareBtn } from "./constant.js"

modebtn.addEventListener("click", () => {
    const h = document.querySelector("html")
    // h.hasAttribute("data-bs-theme")
    // ? h.removeAttribute("data-bs-theme")
    // : h.setAttribute("data-bs-theme", "dark")
    if (h.hasAttribute("data-bs-theme")) {
        h.removeAttribute("data-bs-theme")
        modebtn.innerHTML = `<i class="bi bi-brightness-high-fill"></i>`
        modebtn.classList.remove("btn-dark")
        modebtn.classList.add("btn-light")
    } else {
        h.setAttribute("data-bs-theme", "dark")
        modebtn.innerHTML = `<i class="bi bi-moon-stars-fill"></i>`
        modebtn.classList.remove("btn-light")
        modebtn.classList.add("btn-dark")
    }
})
shareBtn.addEventListener("click", () => {
    if (navigator.share) {
        navigator.share({
            title: "Awesome PWA Camera App",
            text: "Swtich, Capture, Share Moments ",
            url: " https://gouravbanswal.github.io/PWA-Camera/"
        })
    }
})