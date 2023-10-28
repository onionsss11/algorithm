function solution(s) {
    const result = Array(s.length).fill(-1); // 결과 배열을 -1로 초기화
    const lastIndex = new Map(); // 각 문자의 마지막 인덱스를 저장하기 위한 맵

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (lastIndex.has(char)) {
            const lastIdx = lastIndex.get(char);
            result[i] = i - lastIdx; // 현재 인덱스와 마지막으로 나온 인덱스의 차이를 저장
        }

        lastIndex.set(char, i); // 현재 문자의 인덱스를 업데이트
    }

    return result;
}