class Graph {
  constructor() {
    this.adjacencyList = {};
    this.size = 0;
  }

  addVertex(value) {
    if (!this.adjacencyList[value]) {
      this.adjacencyList[value] = [];
      this.size++;
    }
    return value;
  }

  addEdge(vertex1, vertex2, weight = null) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push({ node: vertex2, weight });
      this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }
  }

  getVertices() {
    return Object.keys(this.adjacencyList);
  }

  getNeighbors(vertex) {
    return this.adjacencyList[vertex] || [];
  }

  size() {
    return this.size;
  }
}

module.exports = Graph;
