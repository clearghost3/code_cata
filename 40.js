function solution(n) {
    const trini=n.toString(3);
    trini_reverse=trini.split("").reverse().join('');
    var answer= parseInt(trini_reverse,3);
    return answer;
}
