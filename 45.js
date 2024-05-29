function solution(sizes) {
    let big_num=0;
    let min_num=0;
    let x_n=0;
    let y_n=0;
    for (i=0;i<sizes.length;i++) {
        if (big_num<=sizes[i][0]||big_num<=sizes[i][1]) {
            big_num=sizes[i][0]>sizes[i][1] ? sizes[i][0]:sizes[i][1];
        }
        let temp=sizes[i][0]>sizes[i][1] ? sizes[i][1]:sizes[i][0];
        if (min_num<temp) {
            min_num=temp;
        }
    }
    console.log(min_num);
    
    var answer = min_num*big_num;
    return answer;
}
