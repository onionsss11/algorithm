def solution(arr):
    mini= []
    
    answer = []
    for i in range(len(arr)):
        if len(arr)<=2**i:
            mini.append(2**i)
    miniNum = min(mini)
    
    for i in range(miniNum):
        if len(arr)>i:
            answer.append(arr[i])
        else:
            answer.append(0)
    
    return answer 