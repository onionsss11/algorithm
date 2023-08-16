function solution(arr, queries) {
    const result = [];

    for (const query of queries) {
        const [s, e, k] = query;
        const subArr = arr.slice(s, e + 1);
        const filteredArr = subArr.filter(x => x > k);
        
        if (filteredArr.length > 0) {
            result.push(Math.min(...filteredArr));
        } else {
            result.push(-1);
        }
    }

    return result;
}
