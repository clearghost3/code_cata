function solution(n,a,b)
{
    var answer = 0;

    for (let i=1;i<=n;i++) {
        if ((a%2===0&&(a-1)===b)||(b%2===0&&(b-1)===a)) return i;
        a=(a+a%2)/2;
        b=(b+b%2)/2;
        console.log(a,b);
    }

    return answer;
}
