function solution(answers) {
    var answer = [];
    
    answer[0]=0;
    answer[1]=0;
    answer[2]=0;
    let period=1;
    let a=0;
    let b=0;
    let c=0;
    for (let i=0;i<answers.length;i++) {
        
        
        
        //a에 대한 처리
        a++;
        if (a===6) a=1;
        
        if (a===answers[i]) {
           answer[0]+=1;
        }
        
        //b에 대한 처리
        if (i%2===0&&answers[i]===2) {
            answer[1]+=1;
            b+=1;
            if (b===2) b=3;
            else if(b===6) b=1;
        }       
        if (i%2===1&&answers[i]===b) {
            answer[1]+=1;
        }
        
        //c에 대한 처리
        const se=i%10;
        if (se===0||se===1) c=3;
        else if(se===2||se===3) c=1;
        else if(se===4||se===5) c=2;
        else if(se===6||se===7) c=4;
        else if(se===8||se===9) c=5;
        
        if (answers[i]===c) answer[2]+=1;
        
    }
    var answer_=[];
    
    let big_num=0;
    
    
    for (let i=0;i<answer.length;i++) {
        
        if (big_num<answer[i]) {
            big_num=answer[i];
            answer_.length=1;
            answer_[0]=(i+1);
        }
        else if(big_num===answer[i]) {
            answer_.push(i+1);
        }
    }
    
    return answer_;
}
