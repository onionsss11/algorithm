def solution(order):
    price = {"americano": 4500, "cafelatte": 5000}
    order_price = 0
    for menu in order:
        if "americano" in menu:
            order_price += price["americano"]
        elif "cafelatte" in menu:
            order_price += price["cafelatte"]
        else:
            order_price += price["americano"]
    return order_price