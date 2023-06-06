def solution(myString,pat):
    answer = ""
    
    x = len(myString)
    y = len(pat)
    
    for i in range(x-y+1):
        print(myString[i:i+y])
        if myString[i:i+y] == pat:
            temp = myString[:i+y]
            if len(temp)> len(answer):
                answer = temp
                
    return answer
            
            