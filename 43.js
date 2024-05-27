function solution(t, p) {
    let n=0;
    let p_length=p.length;
    const p_num=parseInt(p,10);
    
    for (i=0;i<=t.length-p_length;i++) {
            
        const subStr=t.substring(i,i+p_length);
        const num=parseInt(subStr,10);
        
        if (num<=p_num) n++;
        
    }
    return n;
}
