def solution(emergency):
    answer = []
    
    temp = sorted(emergency,reverse=True)
    print(temp)

    
    for i in emergency:
        answer.append(temp.index(i)+1)
        print(i,temp.index(i))
    return answer