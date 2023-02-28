function solution(age) {
let answer = ""
age = String(age)

    return age.split("").map((el)=>{
      return  "abcdefghij"[el]
    }).join("")
}