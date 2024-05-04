const Graph = require("../index"); // Importing the Graph class

describe("Graph depth-first search", () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    graph.addVertex("D");
    graph.addVertex("E");
    graph.addVertex("F");
    graph.addVertex("G");
    graph.addVertex("H");
    graph.addEdge("A", "B");
    graph.addEdge("B", "C");
    graph.addEdge("C", "G");
    graph.addEdge("D", "E");
    graph.addEdge("D", "F");
    graph.addEdge("D", "H");
    graph.addEdge("A", "D");
  });

  test("depthFirst should return correct traversal order", () => {
    expect(graph.depthFirst("A")).toEqual([
      "A",
      "D",
      "H",
      "F",
      "E",
      "B",
      "C",
      "G",
    ]);
  });

  test("depthFirst should handle graph with single vertex", () => {
    const smallGraph = new Graph();
    smallGraph.addVertex("X");
    expect(smallGraph.depthFirst("X")).toEqual(["X"]);
  });

  test("depthFirst should handle empty graph", () => {
    const emptyGraph = new Graph();
    expect(emptyGraph.depthFirst("Y")).toEqual([]);
  });

  test("depthFirst should handle graph with vertices but no edges", () => {
    const isolatedGraph = new Graph();
    isolatedGraph.addVertex("I");
    isolatedGraph.addVertex("J");
    expect(isolatedGraph.depthFirst("I")).toEqual(["I"]);
    expect(isolatedGraph.depthFirst("J")).toEqual(["J"]);
  });
});
