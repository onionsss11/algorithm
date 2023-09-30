function solution(numlist, n) {
  // 거리와 크기를 고려하여 정렬하는 비교 함수
  function compareDistanceAndValue(a, b) {
    const distA = Math.abs(a - n);
    const distB = Math.abs(b - n);

    // 거리가 다르면 거리가 가까운 것이 먼저 옵니다.
    if (distA !== distB) {
      return distA - distB;
    }

    // 거리가 같다면 큰 값이 먼저 옵니다.
    return b - a;
  }

  // 비교 함수를 사용하여 배열 정렬
  numlist.sort(compareDistanceAndValue);

  return numlist;
}
