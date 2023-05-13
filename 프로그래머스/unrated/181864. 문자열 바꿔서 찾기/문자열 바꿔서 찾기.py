def solution(myString, pat):
    result = []
    
    for i in myString:
        if i == "A":
            result.append("B")
        elif i == "B":
            result.append("A")
    
    answer = "".join(result)
    print(answer)
    if pat in answer:
        return 1
    else:
        return 0