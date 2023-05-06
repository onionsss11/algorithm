def solution(num_list):
    answer1 = 0
    for i in num_list:
        answer1 += i
        multiple = answer1*answer1
        
    answer2 = 1
    for i in num_list:
        answer2 *= i
        
    if  multiple> answer2:
        return 1
    else:
        return 0
    