const Graph = require("../index");

describe("Graph", () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  test("Adding and retrieving vertices", () => {
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");

    const vertices = graph.getVertices();
    expect(vertices).toContain("A");
    expect(vertices).toContain("B");
    expect(vertices).toContain("C");
  });

  test("Adding edges and retrieving neighbors", () => {
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addEdge("A", "B", 10);

    const neighbors = graph.getNeighbors("A");
    expect(neighbors).toContainEqual({ node: "B", weight: 10 });
  });

  test("Retrieving neighbors of a non-existent vertex", () => {
    const neighbors = graph.getNeighbors("X");
    expect(neighbors).toEqual([]);
  });

  test("Graph size after adding vertices and edges", () => {
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    graph.addEdge("A", "B", 5);
    graph.addEdge("B", "C", 7);

    expect(graph.size).toBe(3);
  });
});
