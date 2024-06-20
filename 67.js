function solution(s, skip, index) {
    var answer = '';
    let arr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'].filter(char=>!(skip.includes(char)));
    
    s=s.split("").
    map((char)=>arr[(arr.indexOf(char)+index)%arr.length   ])
    .join("");
    
    answer=s;
    return answer;
}
