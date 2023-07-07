function solution(my_string) {
    var answer = [];
    let result = ''
    for (let i = 0; i<my_string.length;i++) {
        if (result.length === 0) {
            result += my_string.slice(-i)
            answer.push(result)
            result = ''
        }
    }
    return answer.sort()
    
    
}