const canvas = document.getElementById('canvas-resize')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const c = canvas.getContext('2d')

c.fillRect(100, 100, 100, 100)
c.fillRect(500, 400, 100, 100)
c.fillRect(300, 100, 100, 100)