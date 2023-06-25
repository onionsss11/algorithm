def solution(arr):
    answer = []
    for i in arr:
        answer.append([i]*i)
        
    answer= sum(answer,[])
    return answer