var step = function(board, x, y, ball) {
    let res = false
    if (board[x][y] === ball) {
        return { res, ball }
    }

    board[x][y] = ball
    drawBoard(board)

    var pos= {x, y}
    res = checkBoard(board, pos, ball)
    log(res)

    return res
}

var checkBoard = function(board,pos,ball) {
    const winCount = 5
    let done = false
    var res1 = getLeft2Right(board, pos, ball)
    var res2 = getDown2Up(board, pos, ball)
    var res3 = getLeftup2Rightdown(board, pos, ball)
    var res4 = getLeftdown2Rightup(board, pos, ball)

    var a = [res1, res2, res3, res4]
    for(let i=0; i<a.length; i++) {
        if (a[i] === winCount) {
            done = true
            break
        }
    }
    return { done, ball }
}

var getLeft2Right = function(board, pos, ball) {
    var x = pos.x
    var y = pos.y
    var width = board[0].length
    var left = 0
    var right = 0

    for(let j=y+1; j<width; j++) {
        if(board[x][j] === ball){
            right += 1
        } else {
            break
        }
    }

    for(let i=y-1; i>=0; i--) {
        if(board[x][i] === ball){
            left += 1
        }else{
            break
        }
    }

    return left + right + 1
}

var getDown2Up = function(board, pos, ball) {
    var x = pos.x
    var y = pos.y
    var height = board.length
    var up = 0
    var down = 0

    for(let i=x+1; i<height; i++){
        if(board[i][y] === ball){
            down += 1
        }else{
            break
        }
    }

    for(let j=x-1; j>=0; j--){
        if(board[j][y] === ball){
            up += 1
        }else{
            break
        }
    }

    return up + down + 1
}

var getLeftup2Rightdown = function(board, pos, ball) {
    var x = pos.x
    var y = pos.y
    var width = board[0].length
    var height = board.length
    var leftUp = 0
    var rightDown = 0

    for(let i=x-1, j=y-1; ((i>=0) && (j>=0)); i--, j--){
        if(board[i][j] === ball) {
            leftUp += 1
        } else {
            break
        }
    }

    for(let i=x+1, j=y+1; ((i<width) && (j<height)); i++, j++){
        if(board[i][j] === ball) {
            rightDown += 1
        } else {
            break
        }
    }

    return leftUp + rightDown + 1
}

var getLeftdown2Rightup = function(board, pos ,ball) {
    var x = pos.x
    var y = pos.y
    var width = board[0].length
    var height = board.length
    var leftDown = 0
    var rightUp = 0

    for(let i=x+1, j=y-1; ((i<height) && (j>=0)); i++, j--){
        if (board[i][j] === ball) {
            leftDown += 1
        } else {
            break
        }
    }

    for(let i=x-1, j=y+1; ((i>=0) && (j<width)); i--,j++){
        if (board[i][j] === ball) {
            rightUp += 1
        } else {
            break
        }
    }

    return leftDown + rightUp + 1
}
