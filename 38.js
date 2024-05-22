process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n=data.split(" ");
    const a= Number(n[0]);
    const b=Number(n[1]);
    for (let i=0;i<n[1];i++) {
        let line= '';
        for (let j=0;j<n[0];j++) {
            line=line+'*';
        }
        console.log(line);
    }
});
