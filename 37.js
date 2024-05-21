function solution(arr1, arr2) {
    var answer = arr1;
    for (let i in arr1) {
        for (let j in arr1[i]) {
            answer[i][j]=answer[i][j]+arr2[i][j];
        }
    }
    return answer;
}
