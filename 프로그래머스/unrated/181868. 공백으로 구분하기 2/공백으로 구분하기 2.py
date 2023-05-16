def solution(my_string):
    answer = []
    result = my_string.split(" ")
    for i in range(len(result)):
        if "" ==result[i]:
            print(result[i])
        else:
            answer.append(result[i])
    return answer