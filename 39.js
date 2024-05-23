function solution(n, m) {
    var answer = [];
    let minnum= n>m ? m:n;
    let maxnum= n>m ? n:m;
    for (let i=minnum;i>=0;i--) {
        if (n%i===0&&m%i===0) {
            answer.push(i);
            break;
        }
    }
    let a=0;
    while ((minnum*a)%maxnum!==0||minnum*a/maxnum<1) {
        a+=1;
    }
    answer.push(minnum*a);
    return answer;
}
