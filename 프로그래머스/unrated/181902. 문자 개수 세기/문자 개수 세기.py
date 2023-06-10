from collections import Counter

def solution(my_string):
    counts = Counter(my_string)
    # 대문자 A ~ Z : 아스키 코드 65 ~ 90
    # 소문자 a ~ z : 아스키 코드 97 ~ 122
    result = []
    for i in range(65, 91):
        print(i,counts[chr(i)])
        result.append(counts[chr(i)])
    for i in range(97, 123):
        print(i,counts[chr(i)])
        
        result.append(counts[chr(i)])
    return result