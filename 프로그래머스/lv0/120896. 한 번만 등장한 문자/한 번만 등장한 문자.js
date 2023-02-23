function solution(s) {
   const obj = {}
   
  s.split("").forEach((el)=>{
      obj[el] !== undefined? obj[el]+=1:obj[el]=1
  })

    
                
    return Object.entries(obj).map((el)=>{
        return el[1] ===1 ? el[0]:null
    }).filter((el)=>{
        return el !== null
    }).sort().join("")
}