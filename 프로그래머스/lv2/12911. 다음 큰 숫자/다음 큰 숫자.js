function solution(n) {
    function countOnes(num) {
        let count = 0;
        while (num > 0) {
            if (num % 2 === 1) {
                count++;
            }
            num = Math.floor(num / 2);
        }
        return count;
    }

    const targetOnes = countOnes(n);
    let answer = n + 1;

    while (true) {
        if (countOnes(answer) === targetOnes) {
            return answer;
        }
        answer++;
    }
}