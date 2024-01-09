function solution(common) {
    // 등차수열인지 등비수열인지 판별
    const isArithmetic = common[1] - common[0] === common[common.length - 1] - common[common.length - 2];
    
    // 등차수열이면
    if (isArithmetic) {
        const commonDifference = common[1] - common[0];
        return common[common.length - 1] + commonDifference;
    } else { // 등비수열이면
        const commonRatio = common[1] / common[0];
        return common[common.length - 1] * commonRatio;
    }
}
