function solution(strings, n) {
    return strings.sort((a, b) => {
        const charA = a.charAt(n);
        const charB = b.charAt(n);
        
        if (charA === charB) {
            return a.localeCompare(b); // 인덱스 n의 문자가 같다면 사전순으로 정렬
        } else {
            return charA.localeCompare(charB); // 인덱스 n의 문자를 기준으로 정렬
        }
    });
}
