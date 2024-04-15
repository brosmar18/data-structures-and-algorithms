class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addEdge(vertex1, vertex2, weight) {
    if (!this.adjacencyList.has(vertex1)) {
      this.adjacencyList.set(vertex1, []);
    }
    this.adjacencyList.get(vertex1).push({ vertex: vertex2, weight });
  }

  getEdgeCost(cityA, cityB) {
    const neighbors = this.adjacencyList.get(cityA);
    if (neighbors) {
      const edge = neighbors.find((n) => n.vertex === cityB);
      if (edge) {
        return edge.weight;
      }
    }
    return undefined;
  }
}

function businessTrip(graph, itinerary) {
  let totalCost = 0;

  for (let i = 0; i < itinerary.length - 1; i++) {
    let cityA = itinerary[i];
    let cityB = itinerary[i + 1];
    let cost = graph.getEdgeCost(cityA, cityB);
    // console.log(`Checking edge from ${cityA} to ${cityB}: cost is ${cost}`);

    if (cost === undefined) {
    //   console.log(`No edge from ${cityA} to ${cityB}, returning null`);
      return null;
    }

    totalCost += cost;
  }
//   console.log(`Total cost calculated: ${totalCost}`);
  return totalCost;
}

module.exports = { businessTrip, Graph };
