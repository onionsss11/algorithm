def solution(numbers):
    num = ["zero","one","two","three","four","five","six","seven","eight","nine"]
    result = ""
    for i in range(len(numbers)):
        for j in range(len(num)):
            if numbers[i:].startswith(num[j]):
                result += str(j)
                break
                
    return int(result)