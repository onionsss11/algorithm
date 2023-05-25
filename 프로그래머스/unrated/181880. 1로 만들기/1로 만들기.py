def solution(num_list):
    count = 0
    
    for i in num_list:
        while i !=1:
            if i%2==1:
                i -=1
                i /=2
                count +=1
            else:
                i/=2
                count +=1            
    
    return count


    count = 0  # 연산 횟수를 저장하는 변수
    
    for num in num_list:
        while num != 1:  # 원소가 1이 될 때까지 반복
            if num % 2 == 0:  # 짝수인 경우
                num //= 2
            else:  # 홀수인 경우
                num -= 1
                num //= 2
            count += 1  # 연산 횟수 증가
    
    return count