function solution(spell, dic) {
   
spell = spell.sort().join("")
   const arr = []
for(let i = 0 ; i < dic.length;i++) {
    if(dic[i].split("").sort().join("")===spell) {
       arr.push(dic[i].split("").sort().join(""))
    } 
}

    if( arr.length===0){
        return 2
    }else return 1
}