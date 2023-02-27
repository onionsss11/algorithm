function solution(s) {
  s = s.split(" ")

let sum = 0;                
            
for (let i = 0 ; i <s.length; i++) {
  if(s[i]==="Z"){
    sum -= s[i-1]
  } else {
    sum += s[i]*1
  }
  }
    return sum
}