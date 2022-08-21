const canvas = document.getElementById('canvas-resize')

canvas.width = window.innerWidth - 2
canvas.height = window.innerHeight - 10

const c = canvas.getContext('2d')

// Get random Color
const getrandomColor = () =>  {
    const letters = '0123456789abcdef'
    let color = '#'

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

// Creating a Circle Class
function Circle(x, y, dx, dy, r) {
    this.x = x
    this.y = y
    this.r = r
    this.dx = dx
    this.dy = dy

    this.draw = function () {
        c.beginPath()
        c.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        c.strokeStyle = getrandomColor()
        c.stroke()
    }

    this.update = function () {
        if ((this.x + this.r) > innerWidth || (this.x - this.r) < 0) {
            this.dx = -this.dx
        }
        if ((this.y + this.r) > innerHeight || (this.y - this.r) < 0) {
            this.dy = -this.dy
        }
        this.x += this.dx
        this.y += this.dy

        this.draw()
    }
}


let circleArray = []

for (let i = 0; i < 100; i++) {
    let r = 40
    let x = Math.random() * (innerWidth-2*r)+r
    let dx = Math.random() * 3
    let y = Math.random() * (innerHeight-2*r)+r
    let dy = Math.random() * 3

    circleArray.push(new Circle(x, y, dx, dy, r))
}

// Animating the colored circle
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, innerWidth, innerHeight)

    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update()
    }
}

animate()