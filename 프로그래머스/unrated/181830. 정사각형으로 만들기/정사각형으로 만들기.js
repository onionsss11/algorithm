function solution(arr) {
    const maxRows = arr.length;
    let maxCols = arr.length;

    for (let i =0 ; i <arr.length;i++){
        if (maxCols < arr[i].length) {
            maxCols = arr[i].length
        }
    }
    console.log(maxCols)   
    // 행의 수를 맞춥니다.
    for (let i = 0; i < maxRows; i++) {
        while (arr[i].length < maxCols) {
            arr[i].push(0);
        }
    }

    // 열의 수를 맞춥니다.
    while (arr.length < maxCols) {
        arr.push(new Array(maxCols).fill(0));
    }

    return arr;
}