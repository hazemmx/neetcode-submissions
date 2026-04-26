class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        let right = heights.length-1;
        let left = 0;
        let maxAmount = 0;
      
       while (right > left) {
    const shorter = Math.min(heights[left], heights[right]);
    const area = (right - left) * shorter;
    maxAmount = Math.max(maxAmount, area);

    if (heights[left] < heights[right]) {
        left++;
    } else {
        right--;
    }
}

        return maxAmount;
    }
}
