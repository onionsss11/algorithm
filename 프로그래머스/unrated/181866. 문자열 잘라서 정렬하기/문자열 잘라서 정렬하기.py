def solution(myString):
    
    split =myString.split("x")
    print(split)
    
    answer = []
    
    for i in range(len(split)):
        if "" != split[i]:
            answer.append(split[i])
    result = sorted(answer)
    return result
   