def solution(arr):
    answer = []
    temp = []
    if 2 not in arr:
        return [-1]
    for i in range(len(arr)):
        if arr[i] ==2:
            temp.append(i)
    if temp:
        return arr[temp[0]:temp[-1]+1]
