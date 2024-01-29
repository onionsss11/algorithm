function solution(clothes) {
    const clothesDict = {};

    // 의상의 종류별로 경우의 수 계산
    clothes.forEach(cloth => {
        const type = cloth[1];
        clothesDict[type] = (clothesDict[type] || 0) + 1;
    });

    // 경우의 수 계산을 위한 초기값 설정
    let answer = 1;

    // 각 의상의 종류별로 경우의 수를 모두 곱함
    for (const count of Object.values(clothesDict)) {
        answer *= count + 1; // 각 의상의 종류에서 아무것도 입지 않은 경우도 포함하기 위해 +1
    }

    // 모두 입지 않은 경우를 빼고 반환
    return answer - 1;
}