def solution(num_list):
    
    num_list.sort()
    
    result = num_list
    
    print(len(result))
    
    print(result[5:len(result)])
    
    return result[5:len(result)]