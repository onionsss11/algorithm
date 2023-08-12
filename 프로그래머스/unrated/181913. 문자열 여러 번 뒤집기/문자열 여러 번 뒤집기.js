function reverseStringInRange(str, s, e) {
  return str.slice(0, s) + str.slice(s, e + 1).split('').reverse().join('') + str.slice(e + 1);
}

function solution(my_string, queries) {
  for (const [s, e] of queries) {
    my_string = reverseStringInRange(my_string, s, e);
  }
  return my_string;
}