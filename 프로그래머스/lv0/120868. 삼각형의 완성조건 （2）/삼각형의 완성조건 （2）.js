function solution(sides) {
sides = sides.sort((a,b)=> a-b)
const arr = []

for (let i = 1 ; i <= sides[0]+sides[1];i++) {
   if( sides[0]+sides[1] >i){
     arr.push(i)
   }
}

let result = []
for(let i = 0; i < arr.length; i++) {
  if(arr[i]+sides[0]>sides[1]) {
      result.push(i)    
  }
}
return result.length;

}