function solution(n) {
    var answer = [];
    while (n) {
        answer.push(Math.floor(n%10));
        n/=10;
        n=Math.floor(n);
    }
    return answer;
}