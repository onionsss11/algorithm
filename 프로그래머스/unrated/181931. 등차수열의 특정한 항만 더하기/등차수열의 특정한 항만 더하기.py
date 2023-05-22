def solution(a, d, included):
    
    answer = a
    arr = [a]
    
    sum1 = 0
    for i in range(len(included)-1):
        answer += d
        arr.append(answer)
        
    for i in range(len(arr)):
        if included[i] == True:
            sum1 += arr[i]          
            
    return sum1