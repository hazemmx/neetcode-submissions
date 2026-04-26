class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let faisal = "#"
        let majorString="";
       for (let str of strs){
            majorString+= faisal + str.length + faisal + str;
       }
       return majorString
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(majorString) {
      let i = 0;
      let res = [];
      while (i < majorString.length){
        if (majorString[i] == '#'){
            i++;
            let j = i;
            while(majorString[j]!= '#'){
                j++;
            }
            let length = parseInt(majorString.slice(i,j));
            i = j+1;
            let word = majorString.slice(i,i+length);
            res.push(word);
            i+=length;
        }
      }
      return res;
     
    }
}
