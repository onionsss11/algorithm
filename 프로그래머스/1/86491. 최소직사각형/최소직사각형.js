function solution(sizes) {
    
   for (let arr of sizes){
 arr.sort((a,b)=> b-a)
}

const wid = [] 
const leng =[]

sizes.forEach(s=>{
  wid.push(s[0])
  leng.push(s[1])
  }
)

wid.sort((a,b)=>b-a)
leng.sort((a,b)=>b-a)

 return wid[0] * leng[0]

}