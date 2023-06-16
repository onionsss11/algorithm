def solution(myStr):
    replace = myStr.replace("b","a")
    replace = replace.replace("c","a")
    replace = replace.split('a')
    answer = []
    for i in replace:
        if i:
            answer.append(i)
        
    if answer:
        return answer
    else:
        return ['EMPTY']
            