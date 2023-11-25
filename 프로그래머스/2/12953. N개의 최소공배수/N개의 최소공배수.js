function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// 최소공배수를 계산하는 함수
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

// 배열의 최소공배수를 계산하는 함수
function solution(arr) {
    let answer = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        answer = lcm(answer, arr[i]);
    }
    
    return answer;
}
