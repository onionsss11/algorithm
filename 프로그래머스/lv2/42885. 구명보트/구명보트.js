function solution(people, limit) {
    people.sort((a,b) => b-a)
    let answer =0;
    let last = people.length-1;
    for(let i = 0 ; i <people.length;i++) {
        const  weight = limit - people[i];
        
        //가벼운 사람의 몸무게가 보트에 수용할 수 있는 몸무게보다 작을 경우
        // === 보트에 태울 수 있다.
        if( weight >= people[last]) {
            
                   last--;
            } 
        answer++
        // 대기열에 아무도 없는 경우
        if( i>= last) {
            return answer;
        }
    }
    
}



// 답은 맞으나 효율성테스트 x
// people.sort((a,b)=> b-a)
    
//     let answer = 0;
    
//     let boat= [];
    
//     for (let i = 0 ; i < people.length; i++) {
//         if(people[i] === null) continue;
//         boat.push(people[i])
//         people[i] = null
        
//         const weight = limit - boat[0];
//         const idx = people.includes(weight)? people.indexOf(weight)        
//                                           : people.findIndex((el)=>{
//                                                      return el !== null && el<weight})
//         // 태울 사람 이 있는 경우
//         if(idx !== -1){
//             people[idx] = null;
//         }
//         answer++;
//         boat = [];
//     }
//     console.log(answer)
//     return answer`