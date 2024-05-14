function solution(seoul) {
    var answer = '';
    for (let i in seoul) {
        if (seoul[i]==="Kim") {
            answer=`김서방은 ${i}에 있다`;
        }
    }
    return answer;
}
seoul=["sdad","DAadaf","Kim"];
console.log(solution(seoul));