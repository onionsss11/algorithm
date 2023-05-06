def solution(start, end):
    result = list()
    
    for i in range(end,start+1):
        result.append(i)
        
    result.sort()
    result.reverse()
    
    return result