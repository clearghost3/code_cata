function solution(arr) {
    var answer = [];
    let small=10;
    let temp=0;
    for(let i=0;i<arr.length;i++) {
        if (arr[i]===10) return [-1];
        if (arr[i]<small) {
            small=arr[i];
            temp=i;
        }
    }
    arr.splice(temp,temp+1)
    return arr;
}