function solution(t, p) {
    const tLength = t.length;
    const pLength = p.length;
    let count = 0;
    
    for (let i = 0; i <= tLength - pLength; i++) {
        const subStr = t.substring(i, i + pLength);
        const subStrNum = parseInt(subStr);
        const pNum = parseInt(p);
        
        if (subStrNum <= pNum) {
            count++;
        }
    }
    
    return count;
}
