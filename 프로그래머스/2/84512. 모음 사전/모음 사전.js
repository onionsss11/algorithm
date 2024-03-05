function solution(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    const dict = [];
    
    // 가능한 모든 경우의 수를 생성하여 사전에 추가
    function generateWords(currWord, depth) {
        if (depth > 5) return;
        dict.push(currWord);
        for (let vowel of vowels) {
            generateWords(currWord + vowel, depth + 1);
        }
    }
    
    generateWords('', 0);
    
    // 주어진 단어가 나올 때까지 사전의 크기(인덱스) 반환
    return dict.indexOf(word) ;
}