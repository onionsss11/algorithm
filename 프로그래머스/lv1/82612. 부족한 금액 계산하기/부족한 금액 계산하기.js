function solution(price, money, count) {
    
    let num = 0;
    for (let i = 1 ; i <= count; i++) {
   num += price*i
}

if(num<=money ){
 return  0
} else if ( num>money){
 return  num - money
}

}