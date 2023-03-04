function solution(keyinput, board) {

    let a = 0
let b = 0
let leftMax = parseInt(board[0]/2)
let rightMax = parseInt(board[1]/2)
let result = []

for(let i = 0 ; i < keyinput.length; i ++) {
 
  
  if(keyinput[i]=== "left") {
    a -= 1
  } else if( keyinput[i]==="right") {
    a += 1
  } else if( keyinput[i]==="down") {
    b -= 1
  } else if( keyinput[i]==="up") {
    b += 1
  }
    
    if(leftMax<Math.abs(a) && a<0) {
  a = -leftMax
}else if (leftMax<Math.abs(a) && a>0) {
  a = leftMax
}else if (rightMax<Math.abs(b) && b<0) {
  b = -rightMax
}else if (rightMax<Math.abs(b) && b>0) {
  b = rightMax
}
}

if(leftMax<Math.abs(a)) {
  a = leftMax
}else if (rightMax<Math.abs(b)){
  b = -rightMax
}

result.push(a)
result.push(b)
    return result
}