function solution(n) {
    let a = 0
    let b = 0
    
    for (let i = 4 ; i <=n; i++ ) {
        for (let j =1; j<=i;j++ ) {

            if (i%j===0){
                a++
                if(a>=3 && i==j) {
                    b++
                    a=0
                }
            }
        }
    }
    return b
}