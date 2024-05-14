function solution(s) {
    var answer = '';
    let center=Math.floor(s.length/2);
    if (s.length%2==1) answer=s[center];
    else answer=s[center]+s[center+1];
    return answer;
}

const str="abcde";

console.log(solution(str));