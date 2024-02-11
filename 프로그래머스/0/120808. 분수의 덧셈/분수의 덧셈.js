function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function solution(numer1, denom1, numer2, denom2) {
    let numerator = numer1 * denom2 + numer2 * denom1;
    let denominator = denom1 * denom2;
    let divisor = gcd(numerator, denominator);
    
    return [numerator / divisor, denominator / divisor];
}

// 테스트
console.log(solution(1, 2, 3, 4)); // [5, 4]
console.log(solution(9, 2, 1, 3)); // [29, 6]