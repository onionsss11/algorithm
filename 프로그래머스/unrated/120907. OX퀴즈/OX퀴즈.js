function solution(quiz) {
    const result = [];

    for (const equation of quiz) {
        const [x, operator, y, equal, z] = equation.split(' ');

        const numX = parseInt(x);
        const numY = parseInt(y);
        const numZ = parseInt(z);

        let answer;
        if (operator === '+') {
            answer = numX + numY;
        } else if (operator === '-') {
            answer = numX - numY;
        }

        if (answer === numZ) {
            result.push("O");
        } else {
            result.push("X");
        }
    }

    return result;
}
