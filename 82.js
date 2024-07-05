function solution(n) {
    if (n===1) return 1;
    else if(n==2) return 2;
    
    const limit=1234567;
    
    let a=1; let b=2;
    for (let i=3;i<=n;i++) {
        [a,b]=[b,(a+b)%limit];
    }
    return b;
}
