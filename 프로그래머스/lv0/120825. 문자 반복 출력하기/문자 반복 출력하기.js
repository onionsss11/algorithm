function solution(my_string, n) {
    
   return my_string.split("").map((el)=>{
       return el.repeat(n)
    }).join("")
}