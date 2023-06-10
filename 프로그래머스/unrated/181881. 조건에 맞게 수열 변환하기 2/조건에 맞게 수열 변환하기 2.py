def solution(arr):

    prevArr = arr
    count = 0
        
    while True:
        count += 1
        arr = [num/2 if num%2==0 and num>=50 else num*2+1 if num%2==1 and num<50 else num for num in arr]
            
        if arr == prevArr:
            break
        prevArr = arr[:]
    return count-1
    
# 50보다 크거나 같은 짝수 = /2

# 50보다 작은 홀수 = *2+1

# 바놉ㄱ
