def solution(array, n):
    
    closest_num = None
    min_diff = float('inf')  # 무한대로 초기화

    array.sort()
    for num in array:
        diff = abs(num - n)
        if diff < min_diff:
            min_diff = diff
            closest_num = num

    return closest_num