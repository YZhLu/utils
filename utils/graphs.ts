//@ts-nocheck


// JavaScript program to find the longest
// path in the DAG



// Function to traverse the DAG
// and apply Dynamic Programming
// to find the longest path

export function dfs(
	node: string,
	adj: { [key: string]: string[] },
	dp: { [key: string]: number },
	vis: { [key: string]: boolean }
) {
	// Mark as visited
	vis[node] = true;

	const max = adj[node]?.length;
	// Traverse for all its children

	for (let i = 0; i < max; i++) {
		// If not visited
		if (!vis[adj[node][i]]) {
			dfs(adj[node][i], adj, dp, vis);
		}

		// Store the max of the paths
		dp[node] = Math.max(dp[node], 1 + (dp[adj[node][i]] ? dp[adj[node][i]] : 0));
	}
}

// Function to add an edge
export function addEdge(adj: { [key: string]: string[] }, source: string, target: string) {
	if (!adj[source]) {
		adj[source] = [];
	}

	adj[source].push(target);
}

// Function that returns the longest path
export function findLongestPath(adj: { [key: string]: string[] }) {
	// Dp array
	//const dp = Array(n+1).fill(0);
	const dp: { [key: string]: number } = {};
	Object.keys(adj).forEach((n) => (dp[n] = 0));

	// Visited array to know if the node
	// has been visited previously or not
	//const vis = Array(n+1).fill(false);
	const vis: { [key: string]: boolean } = {};
	Object.keys(adj).forEach((n) => (vis[n] = false));

	// Call DFS for every unvisited vertex
	Object.keys(adj).forEach((_n: string) => {
		if (!vis[_n]) {
			dfs(_n, adj, dp, vis);
		}
	});

	/* for (let i = 1; i <= n; i++) {
        if (!vis[i])
            dfs(i, adj, dp, vis);
    }
 */
	let ans = 0;

	// Traverse and find the maximum of all dp[i]
	Object.keys(adj).forEach((n) => (ans = Math.max(ans, dp[n])));
	/*for (let i = 1; i <= n; i++) {
        ans = Math.max(ans, dp[i]);
    }*/
	return ans;
}
/* 
// Driver Code

//const adj: number[][] = Array.from(Array(n + 1), () => []/* Array() * /);
const adj: { [key: string]: string[] } = {}
// Example-1
addEdge(adj, '1', '2');
addEdge(adj, '1', '3');
addEdge(adj, '3', '2');
addEdge(adj, '2', '4');
addEdge(adj, '3', '4');

console.log(findLongestPath(adj)); */
