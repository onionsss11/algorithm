function solution(k, tangerine) {
    var answer = 0;
    const countTangerine = {}
    tangerine.forEach(el=>{
        if(countTangerine[el] === undefined){
            countTangerine[el] = 1
        }
        else{
            countTangerine[el]++
        }
    })

    const tangerineGroup = Object.entries(countTangerine).map(([key,value])=>({key,value}))

    tangerineGroup.sort((a,b)=>b.value - a.value)
    for(let i=0;i<tangerineGroup.length;i++){
        if(k - tangerineGroup[i].value <= 0){
           answer++
            break;
        }
        else{
            k -= tangerineGroup[i].value
            answer++
        }
    }
    return answer;
}