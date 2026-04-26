class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const myMap = new Map();
       
       for ( const number of nums){
        if(myMap.has(number)){
            return true;
        }else
        {
            myMap.set(number,1);
        }
       }
            return false;
        
    }

}
