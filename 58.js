function prime_discriminator(number) {
    if (number===1) return 0;
    if (number===2) return 1;
    for (let i=2;i<number/2;i++) {
        if (number%i===0) return 0
    }
    return 1;
}
function solution(nums) {
    var answer = 0;
    let n=nums.length;
    for (let i=0;i<nums.length;i++) {
        if (!nums[i+2]) break;
        
        for(let j=i+1;j<nums.length;j++) {
            for (let k=j+1;k<nums.length;k++) {
                
                const temp=nums[i]+nums[j]+nums[k];
                if (prime_discriminator(temp)) {
                    answer+=1;
                }
                    
            }
        }
    }
    
    return answer;
}
