def solution(numbers):
    
    for idx, word in enumerate([ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]):
        numbers = numbers.replace(word,str(idx))
        
    return int(numbers)