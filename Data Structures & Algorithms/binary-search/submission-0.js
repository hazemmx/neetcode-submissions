class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let min = 0;
        let max = nums.length-1;
        
        while(max >= min){
            let middle = Math.floor((max+min)/2);
            if (target > nums[middle]){
                min = middle+1;

            } else if (target < nums[middle]){
                max = middle -1;
            } else {
                return middle;
            }
        }
        return -1;
    }
}
