def solution(arr1, arr2):
    
    sum1 = 0
    sum2 = 0
    
    if len(arr1) == len(arr2):
        for i in arr1:
            sum1 += i
        for i in arr2:
            sum2 += i
        if sum1 == sum2:
            return 0
        if sum1>sum2:
            return 1
        else:
            return -1
        
    if len(arr1)> len(arr2):
        return 1
    else:
        return -1
