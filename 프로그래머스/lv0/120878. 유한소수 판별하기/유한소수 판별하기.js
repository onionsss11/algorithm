function solution(a, b) {
    // 최대 공약수를 구하는 함수
    function gcd(x, y) {
        while (y !== 0) {
            let temp = y;
            y = x % y;
            x = temp;
        }
        return x;
    }
    
    // 분모와 분자의 최대 공약수를 구합니다.
    let greatestCommonDivisor = gcd(a, b);
    
    // 분모를 최대 공약수로 나누어 기약분수로 만듭니다.
    let simplifiedA = a / greatestCommonDivisor;
    let simplifiedB = b / greatestCommonDivisor;
    
    // 분모의 소인수 중 2와 5를 제외한 다른 소인수가 있는지 검사합니다.
    while (simplifiedB > 1 && simplifiedB % 2 === 0) {
        simplifiedB /= 2;
    }
    while (simplifiedB > 1 && simplifiedB % 5 === 0) {
        simplifiedB /= 5;
    }
    
    // simplifiedB가 1이면 유한소수, 아니면 무한소수입니다.
    if (simplifiedB === 1) {
        return 1;
    } else {
        return 2;
    }
}
