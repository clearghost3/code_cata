function solution(players, callings) {
    const dict=players.reduce((acc,curr,index)=> {
        acc[curr]=index;
        return acc;
    },{});
    for (let calling of callings) {
        
        let currPlayerIndex=dict[calling];
        let nextPlayer=players[currPlayerIndex-1];
        
        players[currPlayerIndex]=nextPlayer;
        players[currPlayerIndex-1]=calling;
        // console.log(nextPlayer);
        
        //객체의 일부를 수정
        dict[calling]-=1;
        dict[nextPlayer]+=1;
    }
    
    return players;
}
