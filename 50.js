function solution(s) {
    var answer=[];
    let arr=new Array(26).fill(-1);
    for (let i=0;i<s.length;i++) {
        let temp=s.charCodeAt(i)-97;
        
        if (arr[temp]!==-1) {
            answer.push(i-arr[temp]);
        }
        else {
            answer.push(-1);
        }
        arr[temp]=i;
    }
        
        
        return answer;
    }
    
