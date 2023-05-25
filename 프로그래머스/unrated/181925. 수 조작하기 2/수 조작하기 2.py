def solution(numLog):
    
    result = ""
    prev_num = numLog[0]
    for i in range(1, len(numLog)):
        diff = numLog[i] - prev_num
        if diff == 1:
            result += "w"
        elif diff == -1:
            result += "s"
        elif diff == 10:
            result += "d"
        elif diff == -10:
            result += "a"
        prev_num = numLog[i]
    return result
    