class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let newStarts = 0;
        let graphs = [];
        for(let i = 0 ; i < n ; i++){
            graphs.push([]);
        }
        for(let [node,prereq] of edges){
            graphs[node].push(prereq);
graphs[prereq].push(node); // undirected
        }
        let state = new Array(n).fill(0);
        function dfs(node){
            if(state[node] == 1)return;
            state[node] = 1;
          for(let neighbor of graphs[node]){
            dfs(neighbor);
          }

        }
        for(let i = 0; i < n; i++){
    if(state[i] == 0){
        newStarts++;  // fresh start = new component
        dfs(i);
    }
}
return newStarts;
    }
}
