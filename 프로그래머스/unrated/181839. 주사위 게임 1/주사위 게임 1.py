def solution(a, b):
    print(a**2+ b**2)    
    if a%2==0 and b%2==0:
        return abs(a-b)
    elif a%2==1 and b%2==1:
        return ((a**2)+(b**2))
    elif a%2==0 or b%2==1:
        return 2*(a+b)
    elif a%2==1 or b%2==0:
        return 2*(a+b)

    
