function solution(my_string) {
    let result = '';
    
    for (let i = 0; i < my_string.length; i++) {
        const char = my_string[i];
        
        if (char >= 'a' && char <= 'z') {
            // 소문자인 경우 대문자로 변환
            result += char.toUpperCase();
        } else if (char >= 'A' && char <= 'Z') {
            // 대문자인 경우 소문자로 변환
            result += char.toLowerCase();
        } else {
            // 알파벳이 아닌 경우 그대로 추가
            result += char;
        }
    }
    
    return result;
}