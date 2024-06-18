function solution(s) {
    var answer=0;
    let temp=undefined;
    let na=0;
    let nb=0;
    let splitn=0;
    for (i=0;i<s.length;i++) {
        if (!temp) {
            temp=s[i];
            na=1;
        }
        else if (s[i]===temp) {
            na+=1;
        }
        else if (s[i]!==temp) {
            nb+=1;
        }
        
        if (na===nb) {
            splitn+=1;
            na=0;
            nb=0;
            temp=undefined;
        }
    }
    if (na) splitn+=1;
    answer=splitn;
    return answer;
}
