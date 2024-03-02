function solution(triangle) {
    const n = triangle.length;
    // 다이나믹 프로그래밍을 위한 배열 dp 초기화
    const dp = Array(n).fill(0);
    
    // 맨 위의 값은 그대로 대입
    dp[0] = triangle[0][0];
    
    // 다이나믹 프로그래밍을 통해 각 위치까지의 최대값 계산
    for (let i = 1; i < n; i++) {
        // 역순으로 진행하여 메모리를 최적화
        for (let j = i; j >= 0; j--) {
            // 현재 위치까지의 최대값은 이전 위치의 값 중에서 더 큰 값을 현재 위치에 더한 것
            // 단, 양쪽 끝인 경우에는 선택할 수 있는 값이 하나뿐이므로 그대로 더한다.
            if (j === 0) {
                dp[j] = dp[j] + triangle[i][j];
            } else if (j === i) {
                dp[j] = dp[j - 1] + triangle[i][j];
            } else {
                dp[j] = Math.max(dp[j - 1], dp[j]) + triangle[i][j];
            }
        }
    }
    
    // dp 배열 중 가장 큰 값이 최종 결과
    return Math.max(...dp);
}
