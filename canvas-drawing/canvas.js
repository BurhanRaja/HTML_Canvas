const canvas = document.getElementById('canvas-resize')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const c = canvas.getContext('2d')

// Rectangle or Square
c.fillStyle = 'rgba(255, 0, 0, 0.7)'
c.fillRect(100, 100, 100, 100)
c.fillStyle = 'rgba(0, 0, 255, 0.7)'
c.fillRect(500, 400, 100, 100)
c.fillStyle = 'rgba(0, 255, 0, 0.7)'
c.fillRect(300, 100, 100, 100)

// Line
c.beginPath()
c.moveTo(200, 300)
c.lineTo(500, 300)
c.lineTo(300, 100)
c.lineTo(300, 400)
c.strokeStyle = 'purple'
c.stroke()

// Arc or Circle
// c.beginPath()
// c.arc(100, 400, 80, 0, Math.PI * 2)
// c.strokeStyle = 'green'
// c.stroke()

// To create more than one circle at a time
let r = 20

const getrandomColor = () =>  {
    const letters = '0123456789abcdef'
    let color = '#'

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

console.log(getrandomColor())

for (let i = 0; i < 900; i++) {
    let x = Math.random() * window.innerWidth
    let y = Math.random() * window.innerHeight
    let colorScheme = getrandomColor()
    c.beginPath()
    c.arc(x, y, r, 0, Math.PI * 2)
    c.strokeStyle = colorScheme
    c.stroke()
}