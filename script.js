let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let circles = document.querySelectorAll(".circle");
let progress = document.querySelector("#progress");

let activated = 1
next.addEventListener('click', () => {
    activated++

    if (activated > circles.length) {
        activated = circles.length
    }

    highlight()
})

prev.addEventListener('click', () => {
    activated--

    if (activated < 1) {
        activated = 1
    }
    
    highlight()
})
function highlight() {
    circles.forEach ((circles, index) => {
        if (index < activated) {
            circles.classList.add('active')
        }
        else {
            circles.classList.remove('active')
        }
    })
    let active = document.querySelectorAll('.active')

    progress.style.width = (active.length - 1) / (circles.length - 1) * 100 + '%'

    if (activated == 1) {
        prev.disabled = true
    } else if (activated == circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}

