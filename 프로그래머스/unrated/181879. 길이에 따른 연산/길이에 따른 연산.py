def solution(num_list):
    answer = 1
    if len(num_list)>=11:
        return sum(num_list)
    elif len(num_list)<=10:
        for i in range(len(num_list)):
            answer *= num_list[i]
        return answer