def solution(my_string):
    answer = 0
    my_string += "A"
    arr = []
    number = ""
    for i in my_string:
        if i.isdigit():
            number += i
        elif number !="":
            arr.append(number)
            number=""
    
    print(arr)
    
    for i in arr:
        answer += int(i)
    return answer