function solution(myString, pat) {
    var answer = 0;
    const arr = [];
    for (let i = 0; i<myString.length;i++) {
        arr.push(myString.slice(i,myString.length))
    }
    for (let i =0; i<arr.length;i++) {
       if(pat ===arr[i].slice(0,pat.length)) {
           answer++
       }
    }
    
    return answer
}