function solution(s, n) {
    var answer = '';
    for (let i=0;i<s.length;i++) {
        if (s[i]===" ") {
            answer+=" ";
            continue;
        }
        let temp=s[i].charCodeAt(0);
        
        if(temp>=97) {
            const char= temp+n>122 ? (temp+n)-26:temp+n;
            answer+=String.fromCharCode(char);
        }
            
        else if(temp<97) {
            const char = temp+n>90 ? (temp+n)-26:temp+n;
            answer+=String.fromCharCode(char);
        }
        console.log(temp);
    }
    return answer;
}
