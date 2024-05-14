function solution(n) {
    var answer = 0;
    let i=1;
    
    while (i*i<n) ++i;
    if (i*i===n) answer=(i+1)*(i+1);
    else return -1;
    return answer;
}