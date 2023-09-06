function solution(number) {
  const n = number.length;
  let count = 0;

  // 비트마스크를 사용하여 가능한 모든 조합을 검사합니다.
  for (let bitmask = 1; bitmask < (1 << n); bitmask++) {
    let sum = 0;
    let selectedStudents = [];

    // 비트마스크를 이용하여 학생을 선택하고 선택한 학생들의 합을 계산합니다.
    for (let i = 0; i < n; i++) {
      if (bitmask & (1 << i)) {
        sum += number[i];
        selectedStudents.push(number[i]);
      }
    }

    // 합이 0이면 삼총사로 인정합니다.
    if (sum === 0 && selectedStudents.length === 3) {
      count++;
    }
  }

  return count;
}