function solution(array) {
        
  return  array.join("").split("").filter((el)=>{
         if(el ==="7") return el 
        }).length
}


//    let str =  array.toString().split(",").join("")
    
//    let count = 0
// for(let i = 0 ; i < str.length; i++){
//   if(str[i].includes("7"))
//     count++
// }
//     return count