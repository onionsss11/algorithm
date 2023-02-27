function solution(num_list, n) {
   
    const arr= []
    for(let i = 0 ; i < num_list.length/n; i++) { 
    arr.push(num_list.slice(n*i,n*i+n))
    }
             return arr
}