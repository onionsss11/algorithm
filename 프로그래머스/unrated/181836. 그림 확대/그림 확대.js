function solution(picture, k) {
    const answer = [];
    const numCols = picture[0].length;

    for (let i = 0; i < picture.length* k; i++) {
        let newRow = '';
        for (let j = 0; j < numCols * k; j++) {
            const originalRow = Math.floor(i / k);
            const originalCol = Math.floor(j / k);
            newRow += picture[originalRow][originalCol];
        }
        answer.push(newRow);
    }

    return answer;
}
