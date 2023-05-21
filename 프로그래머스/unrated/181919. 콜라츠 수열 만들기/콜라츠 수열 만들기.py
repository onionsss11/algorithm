def solution(n):
    answer = []  # 초기값인 n을 수열의 첫 번째 원소로 추가
    answer.append(n)
    while n != 1:
        if n % 2 == 0:  # n이 짝수인 경우
            n = n // 2
        else:  # n이 홀수인 경우
            n = 3 * n + 1
        answer.append(n)  # 계산된 수를 수열에 추가
    
    return answer