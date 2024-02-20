function solution(phone_book) {
    // 전화번호를 정렬합니다.
    phone_book.sort();

    // 전화번호 배열을 순회하면서 현재 전화번호가 다음 전화번호의 접두어인지 확인합니다.
    for (let i = 0; i < phone_book.length - 1; i++) {
        if (phone_book[i + 1].startsWith(phone_book[i])) {
            return false; // 접두어인 경우 false를 반환합니다.
        }
    }
    return true; // 접두어가 없는 경우 true를 반환합니다.
}