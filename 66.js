function solution(keymap, targets) {
    var answer = [];
    let map=new Map();
    for (keys of keymap) {
        for (let i=0;i<keys.length;i++) {
            if (!map.has(keys[i])||i+1<map.get(keys[i])) {
                map.set(keys[i],i+1);
            }
        }
    }
    console.log(map);
    for (target of targets) {
        let cnt=0;
        for (let i=0;i<target.length;i++) {
            cnt+=map.get(target[i]);
        }
        answer.push(cnt||-1);
    }
    return answer;
}
