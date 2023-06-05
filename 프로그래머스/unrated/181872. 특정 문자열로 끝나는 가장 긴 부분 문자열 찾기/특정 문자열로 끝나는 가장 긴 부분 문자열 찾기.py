def solution(myString, pat):
    longest_substring = ""  # 가장 긴 부분 문자열을 저장할 변수 초기화
    n = len(myString)
    m = len(pat)

    # myString을 순회하면서 각 부분 문자열의 끝이 pat인지 확인
    for i in range(n - m + 1):
        if myString[i:i + m] == pat:
            # 현재 부분 문자열이 pat로 끝나는 경우
            current_substring = myString[:i + m]  # 현재 부분 문자열
            if len(current_substring) > len(longest_substring):
                longest_substring = current_substring  # 가장 긴 부분 문자열 업데이트

    return longest_substring