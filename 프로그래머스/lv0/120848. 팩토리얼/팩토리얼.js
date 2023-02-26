function solution(n) {
   let answer = 0;
  let multiple = 1;
for ( let i = 1 ; i <= n ; i++ ) {
     multiple *=i
  
  if( multiple >n) break
  answer = i
}
    return answer
    
}