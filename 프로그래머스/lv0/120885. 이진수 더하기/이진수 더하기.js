function solution(bin1, bin2) {
  // 더하기
  const Sum = parseInt(bin1, 2) + parseInt(bin2, 2);
  // 이진수로 변환
  const result = Sum.toString(2);
  return result;
}