function solution(park, routes) {
    const ylen=park.length;
    const xlen=park[0].length;
    
    let start=[];
    
    const direction={
        N:[-1,0],
        S:[1,0],
        W:[0,-1],
        E:[0,1]
    };
    
    //시작 좌표 찾기
    for (let i=0;i<park.length;i++) {
        for (let j=0;j<park[i].length;j++) {
            if (park[i][j]==='S') {
                start=[i,j]; break;
            }
        }
    }
    
    
    //이동하는 거리만큼을 탐색
    for (let i=0;i<routes.length;i++) {
        
        let [azimuth,step]=routes[i].split(" ");
        
        let move=direction[azimuth];
        let movePoint=[start[0],start[1]];
        
        //step만큼 전진
        for (let j=0;j<step;j++) {
            movePoint[0]+=move[0];
            movePoint[1]+=move[1];
            console.log(movePoint);
            
            if (movePoint[0]<0||movePoint[1]<0||movePoint[0]>=ylen||movePoint[1]>=xlen||park[movePoint[0]][movePoint[1]]==='X') {
                console.log('X');
                movePoint=[false,false];
                break;
            }
        }
        if (movePoint[0]!==false) {
            start=movePoint;
        }
    }
    
    
    var answer = start;
    return answer;
}
