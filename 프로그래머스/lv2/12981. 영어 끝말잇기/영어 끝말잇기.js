function solution(n, words) {
    for ( let i = 1; i<words.length;i++) {
        const player = (i%n)+1;
        const turn = Math.floor(i/n) +1
        const preWord = words[i - 1][ words[i - 1].length - 1 ] // 이전 사람이 말한 단어의 가자뒷부분 (마지막 글자)
        const nowWord = words[i][0] // 현재 사람이 말한 단어의 가장 앞부분(첫 글자)
        
        if(nowWord !== preWord || words.indexOf(words[i]) !== i) {
            return [player, turn]
        }
    }
    return [0,0]
}