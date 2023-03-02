function solution(balls, share) {
    
    const factorial = (n)=>{
    let num =1;
        
        for(let i = 2; i<=n;i++) {
            num *=i
        }
        return num
    }

    return Math.round(factorial(balls)/(factorial(share)*factorial(balls-share)))
    

}