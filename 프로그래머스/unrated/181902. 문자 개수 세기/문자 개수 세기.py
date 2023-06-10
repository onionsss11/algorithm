def solution(myString):
    answer = [0]*52
    
    for i in myString:
        if i.isupper():
            answer[ord(i)-65] += 1
        else:
            answer[ord(i)-71] += 1
    return answer