class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a - b);
        let res = [];
        let arr = nums;


        for (let i = 0 ; i < nums.length - 2 ; i++){
            
            if (i > 0 && nums[i] === nums[i-1]) continue;
            let left = i+1;
            let right = nums.length -1;

            while (right>left){
            const sum = arr[i] + arr[right] + arr[left];
            if (sum === 0){
                res.push([arr[i],arr[left],arr[right]]);

                left++;
                right--;

                while(right > left && arr[left] == arr[left-1]){left++;}
                while(right>left && arr[right]==arr[right+1]){right--};
            } else if (sum < 0){
                left++;
            }else {
                right--;
                }


            }
        }
        return res;

    }
}
