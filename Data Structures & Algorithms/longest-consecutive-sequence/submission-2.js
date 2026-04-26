class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let max = 0;
        let counter;

        for(let num of set){
            if(set.has(num-1)){
                continue;
            }else {
                counter = 1;
                if (set.has(num+1)){
                    
                    while(set.has(num+counter)){
                        counter++;
                        
                    }
                   
                }
                 if(counter>max){
                        max = counter;
                    }
            }
        }
        return max;
    }
}
