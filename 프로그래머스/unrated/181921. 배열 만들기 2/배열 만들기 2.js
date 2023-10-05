function solution(l, r) {
    const result = [];

    for (let num = l; num <= r; num++) {
        if (containsOnly05(num)) {
            result.push(num);
        }
    }

    return result.length > 0 ? result : [-1];
}

function containsOnly05(num) {
    const strNum = String(num);

    for (let i = 0; i < strNum.length; i++) {
        if (strNum[i] !== '0' && strNum[i] !== '5') {
            return false;
        }
    }

    return true;
}
