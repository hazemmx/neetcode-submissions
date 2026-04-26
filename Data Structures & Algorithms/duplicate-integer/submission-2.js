class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let myMap = new Map();
        for( let num of nums ) {
         if (myMap.has(num)) return true;
         myMap.set(num,1);

    }
    return false;
}
}