def solution(order):    
    price = {"americano":4500, "cafelatte":5000}
    

    answer = 0
    for i in order:
        if "americano" in i:
            answer += price["americano"]
        elif "cafelatte" in i:
            answer += price["cafelatte"]
        else:
            answer += price["americano"]
            
    return answer