function solution(arr, k) {
    const result = [];
    const visited = new Set(); // 이미 등장한 수를 기록하는 Set

    for (const num of arr) {
        if (!visited.has(num)) {
            visited.add(num);
            result.push(num);
        }

        if (result.length === k) {
            break; // 배열 길이가 k에 도달하면 종료
        }
    }

    // 배열 길이가 k보다 작을 경우 나머지 값들을 -1로 채움
    while (result.length < k) {
        result.push(-1);
    }

    return result;
}