class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if(edges.length !== n-1) return false; // add this first
        let graph = [];
        let visited = new Set();
        for(let i = 0 ; i < n ; i++){
            graph.push([]);
        }
        for(let [src,dest] of edges){
            graph[src].push(dest)
            graph[dest].push(src);
        }

        function hasCycle(n , parent){

            if(visited.has(n)) return true;
            visited.add(n);
            for(let neighbor of graph[n] ){
                if(neighbor == parent ) continue;
                if(hasCycle(neighbor , n)) return true;
            }
            return false;

        }
       // just start DFS from node 0
if(hasCycle(0, -1)) return false;
return visited.size === n; // all nodes connected





    }

}
