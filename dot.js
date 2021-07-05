// Manages Canvas and dots

const dot = {
    //used to construct all dots
    position: [0,0],
    radius: 5,
    color: 61,
    opacity: 1,
    state: "base"
};

var dots = []

function drawCircle(dot, ctx){
    ctx.moveTo(dot.position[0], dot.position[1])
    ctx.arc(dot.position[0], dot.position[1], dot.radius, 0, 2 * Math.PI, false)
    ctx.fillStyle = `rgba(${dot.color}, ${dot.color}, ${dot.color}, ${dot.opacity}`
    ctx.fill()
}

function draw(){
    var ctx = document.getElementById('canvas').getContext('2d')
    
    ctx.globalCompositeOperation = 'source-over'
    
    //sets default stroke to grey
    ctx.fillStyle = 'rgba(63, 63, 63, 1)'
    
    for(let i = 0; i < dots.length; i++){
        drawCircle(dots[i], ctx)
    }
    
    // ctx.filter = "blur(14px)";
    setTimeout(draw, 20)
}

function createDots(numOfWeeks){
    let dotsMade = 0
    for (let y = 1; y <= numOfWeeks/52 + 1; y++){
        for(let i = 0; i < 52; i++){
            newDot = Object.create(dot)
            newDot.position = [i*35/2 + 50, y * 17.5]
            dots.push(newDot)
            dotsMade += 1
            if(dotsMade > numOfWeeks){break}
            console.log(dotsMade)
        }
        if(dotsMade > numOfWeeks){break}
    }
    
    var ctx = document.getElementById('canvas').getContext('2d')
    ctx.fillStyle = 'rgba(0, 0, 0, 1)'
    ctx.fillRect(0,0,1920,1080)
}

createDots(1000)
draw()