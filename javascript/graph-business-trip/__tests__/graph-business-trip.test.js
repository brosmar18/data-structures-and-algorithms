const { businessTrip, Graph } = require("../index");

describe("businessTrip", () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
    graph.addEdge("Gotham", "Metropolis", 75);
    graph.addEdge("Gotham", "Star City", 50);
    graph.addEdge("Metropolis", "Gotham", 75);
    graph.addEdge("Metropolis", "Central City", 60);
    graph.addEdge("Central City", "Metropolis", 60);
    graph.addEdge("Central City", "Star City", 55);
    graph.addEdge("Star City", "Gotham", 50);
    graph.addEdge("Star City", "Central City", 55);
    graph.addEdge("Star City", "Metropolis", 75);
  });

  test("should return the total cost of a valid business trip", () => {
    expect(businessTrip(graph, ["Gotham", "Metropolis"])).toBe(75);
    expect(
      businessTrip(graph, ["Metropolis", "Central City", "Star City"])
    ).toBe(115);
    expect(businessTrip(graph, ["Star City", "Metropolis", "Gotham"])).toBe(
      150
    );
  });

  test("should return null if the business trip is not possible", () => {
    expect(businessTrip(graph, ["Central City", "Gotham"])).toBeNull();
  });
});
