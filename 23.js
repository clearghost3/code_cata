function solution(num) {
    let cnt=0;
    while (num!==1){
    if (num%2===0) {num/=2; cnt++;}
    else {num*=3; num+=1; cnt++;}
    }
    var answer = cnt<500 ? cnt:-1;
    return answer;
}
