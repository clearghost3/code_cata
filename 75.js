function solution(s) {
    var answer = '';
    let min=2147483647;
    let max=-2147483648;
    s=s.split(" ");
    for (let i of s) {
        if (min>+i)
            min=+i;
        if (max<+i)
            max=+i;
    }
    return `${min} ${max}`;
}
