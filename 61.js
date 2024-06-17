function solution(lottos, win_nums) {
    let min = 0;
    let max = 0;
    for (let i of lottos){
        for (let j of win_nums){
            if(i === j)
                min += 1;
        }
    }
    max = min+lottos.filter(v=>v===0).length;
    return[max === 0? 6 : 7-max, min === 0? 6 : 7-min]
}
