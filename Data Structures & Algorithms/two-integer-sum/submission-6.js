class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        
       let comp;
       let myMap = new Map();

      for (let i = 0 ; i < nums.length ; i++){
        comp = target - nums[i];
        if(myMap.has(comp)){
            return[myMap.get(comp),i];
        }else {
            myMap.set(nums[i],i);
        }
      }
      return [];
}
}