const toTop = document.querySelector(".to-top")
// adding functionality
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        // show only on the down
        toTop.classList.add("active")
    } else {
        // remove if go up
        toTop.classList.remove("active")
    }
})