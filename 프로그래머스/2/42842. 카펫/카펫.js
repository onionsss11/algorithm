function solution(brown, yellow) {
  const total = brown + yellow;
  
  for (let width = 3; width <= total / 2; width++) {
    if (total % width === 0) {
      const height = total / width;
      if ((width - 2) * (height - 2) === yellow) {
        return [width, height].sort((b, a) => a - b);
      }
    }
  }
}