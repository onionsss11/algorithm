function solution(n) {
    // 에라토스테네스의 체를 사용하여 소수를 찾음
    const sieve = new Array(n+1).fill(true);
    sieve[0] = sieve[1] = false; // 0과 1은 소수가 아니므로 false로 처리
    
    // 에라토스테네스의 체 알고리즘 적용
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (sieve[i]) {
            for (let j = i*i; j <= n; j += i) {
                sieve[j] = false;
            }
        }
    }
    
    // 소수의 개수 세기
    const count = sieve.filter(x => x).length;
    return count;
}

// 예시 입력에 대한 출력 테스트
console.log(solution(10)); // 4
console.log(solution(5));  // 3
