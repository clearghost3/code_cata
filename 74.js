function solution(id_list, report, k) {
    const numberOfMail=[];
    const reportName=new Map();
    
    for (let i of id_list) {
        numberOfMail[i]=0;
        reportName.set(i,[]);
    }
    for (let i of report) {
        const [reporter,reportedPerson]=i.split(" ");
        
        const reporters=reportName.get(reportedPerson);
        
        if (!reporters.includes(reporter))
        reporters.push(reporter);
        
    }
    
    for (let i of id_list) {
        const repot=reportName.get(i);
        if (repot.length>=k) {
            for (let j of repot) {
                numberOfMail[j]+=1;
            }
        }
        
    }
    let arr=[];
    for (i in numberOfMail) {
        arr.push(numberOfMail[i]);
    }
    // console.log(reportName);
    console.log(arr);
    var answer = [];
    return arr;
