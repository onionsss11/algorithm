function solution(n) {
    let tenNumber = 1, threeNumber = 1

    while(n>tenNumber){
        tenNumber++
        threeNumber++

        while(threeNumber % 3 === 0 || String(threeNumber).includes('3')){
            threeNumber++
        }
    }

    return threeNumber
}