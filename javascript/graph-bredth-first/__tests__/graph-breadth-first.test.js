const Graph = require("../index");

describe("Graph Breadth First Search", () => {
  let graph;
  beforeEach(() => {
    graph = new Graph();
    // Adding vertices
    for (const node of ["A", "B", "C", "D", "E", "F"]) {
      graph.adjacencyList.set(node, []);
    }
    // Adding edges
    graph.adjacencyList.get("A").push("B", "C");
    graph.adjacencyList.get("B").push("A", "D");
    graph.adjacencyList.get("C").push("A", "E", "F");
    graph.adjacencyList.get("D").push("B");
    graph.adjacencyList.get("E").push("C");
    graph.adjacencyList.get("F").push("C");
  });

  test("Test Case 1: Starting from node 'A'", () => {
    const startNode = "A";
    const expectedOutput = ["A", "B", "C", "D", "E", "F"];
    const result = graph.breadthFirst(startNode);
    expect(result).toEqual(expectedOutput);
  });

  test("Test Case 2: Starting from node 'B'", () => {
    const startNode = "B";
    const expectedOutput = ["B", "A", "D", "C", "E", "F"];
    const result = graph.breadthFirst(startNode);
    expect(result).toEqual(expectedOutput);
  });

  test("Test Case 3: Starting from node 'C'", () => {
    const startNode = "C";
    const expectedOutput = ["C", "A", "E", "F", "B", "D"];
    const result = graph.breadthFirst(startNode);
    expect(result).toEqual(expectedOutput);
  });

  test("Test Case 4: Starting from node 'D'", () => {
    const startNode = "D";
    const expectedOutput = ["D", "B", "A", "C", "E", "F"];
    const result = graph.breadthFirst(startNode);
    expect(result).toEqual(expectedOutput);
  });
});
