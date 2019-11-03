const log = console.log.bind(console)

const getRandomInt = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
}

var drawBoard = function(board) {
    for(let i=0; i<board.length; i++) {
        let row = board[i]
        log(row.join(' '))
    }
}

var debugMode = function(enable) {
    if (!enable) {
        return
    } else {
        let count = 40
        for (let i=0, j=0; count > 0; count--) {
            let res = step(board, i, j, '*')

            i = getRandomInt(0, 6)
            j = getRandomInt(0, 6)
            if ((i>=6) || (j>=6)) {
                continue
            }

            if (res.done) {
                break
            }
        }
    }
}
