def solution(array, n):

    closeNum = None
    minimum = float('inf')
    array.sort()
    for i in array:
        diff = abs(i-n)
        if diff < minimum:
            minimum = diff
            closeNum = i
            
    return closeNum
