class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let lastColumnIndex = matrix[0].length-1;
        let theWantedRow = 0;
        for (let i = 0 ; i < matrix.length ; i++){
            if (target <= matrix[i][lastColumnIndex]){
                theWantedRow=i;
                break;
            }
        }
        let max = matrix[theWantedRow].length-1;
        let min = 0;
        while(max >= min){
            let middle = Math.floor((max+min)/2)
            if(target>matrix[theWantedRow][middle]){
                min = middle + 1;
            } else if (target < matrix[theWantedRow][middle]){
                max = middle-1;

            } else if (target = matrix[theWantedRow][middle]) {
                return true;
            } else {
                return false;
            }
        }
     return false;   
    }
}
