def solution(my_string, m, c):
    answer = ''
    word =''
    arr = []
    for i in my_string:
        if len(word)<m:
            word += i
        else:
            arr.append(word)
            word = ""
            word += i
    arr.append(word)

    for i in range(len(arr)):
        answer += arr[i][c-1]
            
    return answer