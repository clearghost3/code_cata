function solution(strings, n) {
    
    
    var answer= strings.sort(function (a,b) {
        if (a[n]>b[n]) {
            return 1;
        }
        if (a[n]<b[n]) {
            return -1;
        }
        if (a[n]===b[n]) {
            const temp= a>b ? 1:-1;
            return temp;
        }
        return 0;
    });
    
    return answer;
}
