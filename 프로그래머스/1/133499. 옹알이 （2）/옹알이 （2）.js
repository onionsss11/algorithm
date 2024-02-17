function solution(babbling) {
    let answer = 0;
    let pronunciation = ["aya", "ye", "woo", "ma"]

    // 1)
    for(let i=0; i<babbling.length; i++) {
        for(let j=0; j<pronunciation.length; j++) {
            // 2)
            if(babbling[i].includes(pronunciation[j].repeat(2))) {
                break;
            }
            // 3)
            babbling[i] = babbling[i].split(pronunciation[j]).join('!');
        }
    }

    // 4)
    answer = babbling.filter(e => {
        // ^ 문자열의 시작
        // $ 문자열의 끝
        // !가 최소 한 번이상 연속으로 나오는지 확인
        return /(^!+$)/.test(e)
    }).length;

    return answer;
}