function solution(A, B) {
  if (A.length !== B.length) {
    return -1; // A와 B의 길이가 다르면 B로 밀어서 만들 수 없음
  }

  for (let i = 0; i < A.length; i++) {
    const shiftedA = A.slice(-i) + A.slice(0, -i); // A를 오른쪽으로 i칸 밀어서 만든 문자열
    if (shiftedA === B) {
      return i; // i번 이동으로 B를 만들 수 있음
    }
  }

  return -1; // A를 밀어서 B를 만들 수 없는 경우
}
