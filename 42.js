function solution(number) {
    const length_max=number.length
    var answer = 0;
    for(let i=0;i<length_max;i++) {
        for (let j=i+1;j<length_max;j++) {
            for (let k=j+1;k<length_max;k++) {
                console.log(number[i]+number[j]+number[k]);
                if ((number[i]+number[j]+number[k])===0) answer++;
            }
        }
    }
    
    return answer;
}
