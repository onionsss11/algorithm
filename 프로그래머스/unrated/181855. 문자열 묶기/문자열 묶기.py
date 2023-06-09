def solution(strArr):
    length_dict = {}
    for word in strArr:
        if len(word) not in length_dict:
            length_dict[len(word)] = [word]
        else:
            length_dict[len(word)].append(word)
    
    max_group_len = 0
    for words in length_dict.values():
        if len(words) > 1 and len(words) > max_group_len:
            max_group_len = len(words)
    
    return max_group_len