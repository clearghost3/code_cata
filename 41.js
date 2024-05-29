function solution(s) {
    var answer = '';
    let n=0;
    for (let i=0;i<s.length;i++) {
        if (s[i]===" ") {
            n=0;
            answer+=s[i];
            continue;
        }
        if (n%2===0) answer+=s[i].toUpperCase();
        else answer+=s[i].toLowerCase();
        n++;
    }
    return answer;
}
