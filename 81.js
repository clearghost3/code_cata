function solution(arr) {
    var answer = 0;
    let maxnum=Number(arr[arr.length-1]);
    
    
    while (1) {
        for (let i=0;i<arr.length;i++) {
            if (maxnum%arr[i]!==0) {
                break;
            }
            if (i===arr.length-1) return  maxnum;
        }
        maxnum+=arr[arr.length-1];
        
        
    }
    return answer;
}
