function solution(my_string) {

    const obj= {}
    my_string.split("").forEach((el)=>{
        obj[el] !==undefined ? obj[el]+=1:obj[el]=1
    })
   return  Object.entries(obj).map((el)=>{
        return el[0]
    }).join("")
    
}