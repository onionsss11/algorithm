def solution(todo_list, finished):
    passed = []
    answer = []
    
    for i in range(len(finished)):
        if finished[i] == False:
            passed.append(i)
    
    for i in passed:
        answer.append(todo_list[i])
    
    return answer    
