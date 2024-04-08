class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  breadthFirst(start) {
    let visited = new Set();
    let queue = [start];

    while (queue.length > 0) {
      let current = queue.shift();
      visited.add(current);

      let neighbors = this.adjacencyList.get(current);
      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }

    return Array.from(visited);
  }
}

module.exports = Graph;
