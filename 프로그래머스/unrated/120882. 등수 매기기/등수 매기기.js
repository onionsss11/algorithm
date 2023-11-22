function solution(score) {
const scores = score.map((s,index)=>{
  const ave = (s[0]+s[1])/2
  return { index : index+1, ave:ave}
})


scores.sort((a,b)=> b.ave - a.ave)

const answer = Array(score.length).fill(0)

let init = 1
let initAve = scores[0].ave

for (let i = 0; i<scores.length;i++){
  if(scores[i].ave<initAve){
    init = i+1
    initAve = scores[i].ave
  }
  
 answer[scores[i].index -1] = init
}
return answer
}