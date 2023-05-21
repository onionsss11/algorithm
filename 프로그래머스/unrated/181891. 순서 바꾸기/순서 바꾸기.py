def solution(num_list, n):
    answer = []
    result1 = num_list[n:]
    result2 = num_list[:n]
    print(result2)
    return result1+result2