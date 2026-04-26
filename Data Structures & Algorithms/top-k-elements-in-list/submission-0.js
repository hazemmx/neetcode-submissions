class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let myMap = {};
        for (let num of nums){
            myMap[num] = (myMap[num] || 0)+1;
        }
        let entries = Object.entries(myMap);
        console.log(entries);
        entries.sort((a,b) => b[1]-a[1]);
        console.log(entries);
        let result = [];
        for (let i =0; i<k ; i++){
            result.push(parseInt(entries[i][0]));
        }
    return result;
    }
}
