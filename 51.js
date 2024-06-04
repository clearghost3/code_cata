function solution(food) {
    var answer = '';
    for (let i=1;i<food.length;i++) {
        for(let j=0;j<Math.floor(food[i]/2);j++) {
            answer+=i;
        }
    }
    let temp=answer.length;
    answer+=0;
    for (let i=0;i<temp;i++) answer+=answer[temp-1-i];
    return answer;
}
