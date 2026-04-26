class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {

        let leftMax = [];
  let rightMax = [];

  for (let i = 0; i < height.length; i++) {
    if (i === 0) {
      leftMax[i] = height[i];
    } else {
      leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }
  }
  for (let i = height.length - 1; i >= 0; i--) {
    if (i === height.length - 1) {
      rightMax[i] = height[i];
    } else {
      rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }
  }
  let waterTotal = 0;
  for (let i = 0; i < height.length; i++) {
    waterTotal += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  return waterTotal;




    }
}
