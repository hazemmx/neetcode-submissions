class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        
        // validate rows
        for (let i = 0 ; i < 9 ; i++){
            let set = new Set();
            for (let j = 0 ; j < 9 ; j++){
                let cell = board[i][j]
                if (set.has(cell)){
                    return false;
                } else if (cell != '.'){
                    set.add(cell);
                }
                
            }
        }



        // validate cols

          for (let i = 0 ; i < 9 ; i++){
            let set = new Set();
            for (let j = 0 ; j < 9 ; j++){
                let cell = board[j][i]
                if (set.has(cell)){
                    return false;
                } else if (cell != '.'){
                    set.add(cell);
                }
                
            }
        }

        // validate boxes
         let startRow =0;
         let startCol = 0;
        for (let b = 0 ; b < 9 ; b++){
            let boxSet = new Set();
           
            for ( let j = startRow ; j < startRow+3 ; j++){

                for (let i = startCol ; i < startCol+3 ; i++){
                    let item = board[j][i];
                    if (boxSet.has(item)){
                        return false;
                    }else if (item != '.'){
                        boxSet.add(item);
                    }
                }
            
            }
        
            startCol += 3;
            if (startCol == 9){
                startCol =0;
                startRow +=3;
            }


        }       
        return true;



    }
}
