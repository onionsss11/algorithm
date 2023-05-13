def solution(num_list):
    answer = []
    
    for i in range(len(num_list)):
        answer.append(num_list[i])
    if num_list[-2]<num_list[-1]:
        answer.append(num_list[-1]-num_list[-2])
    elif num_list[-2]>=num_list[-1]:
        answer.append(2*(num_list[-1]))
    return answer

#     l.append(l[-1]-l[-2] if l[-1]>l[-2] else l[-1]*2)
#     return l