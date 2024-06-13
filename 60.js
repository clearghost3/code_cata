function div_num(num) {
    let n=0;
    for (let i=1;i<=Math.sqrt(num);i++) {
        if (num%i ===0) {
            if (num/i===i) {
                n+=1;
            }
            else {
                n+=2;
            }
        }
    }
    return n;
}

function solution(number, limit, power) {
    var answer =0;
    
    for (let i=1;i<=number;i++) {
        let attack=div_num(i);
        if (attack>limit) {
            attack=power;
        }
        answer+=attack;
    }
    
    return answer;
}
