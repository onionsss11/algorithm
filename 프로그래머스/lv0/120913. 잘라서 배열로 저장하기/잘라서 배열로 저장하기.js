function solution(my_str, n) {
    const answer = [];
    let idx=  0;
    for(let i = 0 ; i < Math.ceil(my_str.length/n);i++) {
        answer.push(my_str.substr(idx,n))
        idx += n
    }
    return answer
}