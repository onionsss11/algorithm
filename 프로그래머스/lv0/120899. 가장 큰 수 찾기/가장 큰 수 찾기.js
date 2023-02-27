function solution(array) {
    const result =[];
    let max =0;
    max = Math.max(...array)
   result.push(max,array.indexOf(max))
    
    return result
}
 
