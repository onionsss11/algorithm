function solution(n) {
  
   let a =  String(n).split("").sort((a,b)=>{
        return b-a
    })
   
  a= a.join("")
    return Number(a)
}