function solution(s) {
    const stack = [];
    
    for (const char of s) {
        if (stack.length === 0 || stack[stack.length - 1] !== char) {
            stack.push(char); // 스택에 문자 추가
        } else {
            stack.pop(); // 짝이 맞는 경우 스택에서 제거
        }
    }
    
    return stack.length === 0 ? 1 : 0; // 스택이 비어있으면 1, 아니면 0 반환
}
