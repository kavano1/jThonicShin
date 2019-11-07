var drawCheckerboard = function() {
    var myCanvas = document.querySelector('#id-canvas')
    var ctx = myCanvas.getContext('2d')

    for (let i = 50;i <= 650;i += 100){
        ctx.beginPath()
        ctx.moveTo(50, i)
        ctx.lineTo(650, i)
        ctx.strokeStyle = 'black'
        ctx.stroke()
    }

    for (let j = 50;j <= 650;j += 100){
        ctx.beginPath()
        ctx.moveTo(j, 50)
        ctx.lineTo(j, 650)
        ctx.strokeStyle = 'black'
        ctx.stroke()
    }

}

var fallingPiece = function() {
    let myCanvas = document.querySelector('#id-canvas')
    let ctx = myCanvas.getContext('2d')
    let black = document.querySelector('#id-black')


    myCanvas.addEventListener('click',function(event) {
        ctx.globalCompositeOperation="source-over"
        let rect = myCanvas.getBoundingClientRect()
        let x1 = event.clientX - rect.left*(myCanvas.width/rect.width)
        let y1 = event.clientY - rect.top*(myCanvas.height/rect.height)
        x1 = Math.round(x1/50)*50
        y1 = Math.round(y1/50)*50
        
        if(x1%100 !== 50){
            x1 = x1 + 50
        }

        if(y1%100 !== 50){
            y1 = y1 + 50
        }

        let x = x1 - 40
        let y = y1 - 40
        console.log(x, y)

        ctx.drawImage(black,x,y)

    })

}
