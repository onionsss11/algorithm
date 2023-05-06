def solution(myString):
    answer = []
    
    a = myString.split("x")
    
    print(a)
    for i in a:
        answer.append(len(i))
    
    return answer