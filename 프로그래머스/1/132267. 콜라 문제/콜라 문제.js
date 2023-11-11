function solution(a, b, n) {
    let result = 0;
    
    // 초기에 가지고 있는 빈 병의 수
    let emptyBottles = n;

    while (emptyBottles >= a) {
        // 마트에 가져가서 콜라를 받고, 빈 병을 반환
        const newColas = Math.floor(emptyBottles / a) * b;
        emptyBottles = newColas + (emptyBottles % a);

        // 받은 콜라 수를 결과에 더함
        result += newColas;
    }

    return result;
}

