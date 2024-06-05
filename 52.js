function solution(a, b, n) {
    var answer = 0;
    let c=0;
    console.log(Math.floor(n));
    
    while(Math.floor(n/a)!==0){
        c+=Math.floor(n/a)*b;
        console.log(c);
        n=Math.floor(n/a)*b+n%a;
    }
    answer+=c;
    return answer;
}
