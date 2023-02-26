function solution(a, b, k) {
const arr = []
for(let i = a; i<=b;i++) {
  arr.push(i)
}


const str = arr.join("")
str
let count = 0;
for (let i =0;i<str.length;i++){
  if(str[i].includes(k)){
    count++
  }
}
    return count
}