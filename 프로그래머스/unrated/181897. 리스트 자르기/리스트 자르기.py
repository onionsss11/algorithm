def solution(n, slicer, num_list):
    arr = [1,2,3,4]
    a,b,c =slicer
    print(num_list[slicer[0]:])
    for i in range(len(arr)):
        if arr[0]==n:
            return num_list[:b+1]
        elif arr[1]==n:
            return num_list[a:]
        elif arr[2]==n:
            return num_list[a:b+1]
        elif arr[3]==n:
            return num_list[a:b+1:c]
            