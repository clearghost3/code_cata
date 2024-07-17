function solution(numbers, target) {
    var answer = 0;
    const length=numbers.length;
    
    function dfs(count,result) {
        if (count===length) {
            if (target===result) {
                answer++;
            }
            return;
        }
        count++;
        
        dfs(count,result+numbers[count-1]);
        dfs(count,result-numbers[count-1]);
    }
    dfs(0,0);
    return answer;
}
