function solution(s) {
    const isCorrect = (str) => {
        const stack = [];
        const pairs = { ')': '(', ']': '[', '}': '{' };

        for (let i = 0; i < str.length; i++) {
            const bracket = str[i];

            if (bracket === '(' || bracket === '[' || bracket === '{') {
                stack.push(bracket);
            } else {
                const top = stack.pop();
                if (top !== pairs[bracket]) {
                    return false;
                }
            }
        }

        return stack.length === 0;
    };

    let answer = 0;

    for (let i = 0; i < s.length; i++) {
        const rotatedStr = s.slice(i) + s.slice(0, i);
        if (isCorrect(rotatedStr)) {
            answer++;
        }
    }

    return answer;
}
