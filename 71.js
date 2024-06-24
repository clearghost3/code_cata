function solution(today, terms, privacies) {
    var answer=[];
    let provisions=new Map();
    
    const current=new Date(today);
    
    //약관의 이름과 약관의 유효기간을 맵핑
    for (let i=0;i<terms.length;i++) {
        const term=terms[i].split(" ");
        provisions[term[0]]=Number(term[1]);
    }
    let personal_info={};
    
    //약관에 따라 정보를 보관할 수 있는 최대 일자를 구한다.
    for (let i=0;i<privacies.length;i++) {
        const [date,term]=privacies[i].split(" ");
        
        let expires_date=new Date(date);
        
        expires_date.setMonth(expires_date.getMonth()+provisions[term]);
        if (current>=expires_date) {
            answer.push(i+1);
        }
    }
    
    return answer;
}
