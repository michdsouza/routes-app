const routesData = {
  positions: {
    "position-1": {
      id: "position-1",
      name: "Position 1",
      image: "/shark1.jpg",
      image_width: 640,
      image_height: 330,
      sources: [
        { x: 230, y: 20, number: '1', name: "Fin" },
        { x: 90, y: 120, number: '2', name: "Tail" }
      ]
    },
    "position-2": {
      id: "position-2",
      name: "Position 2",
      image: "/shark2.jpg",
      image_width: 800,
      image_height: 533,
      sources: [{ x: 620, y: 350, number: '1', name: "Fin" }]
    },
    "position-3": {
      id: "position-3",
      name: "Position 3",
      image: "/shark3.jpg",
      image_width: 640,
      image_height: 320,
      sources: [{ x: 560, y: 280, number: '1', name: "Fin" }]
    }
  },
  routes: [
    {
      id: "route-a",
      title: "Route A",
      positionIds: ["position-1", "position-2", "position-3"]
    }
  ]
};

export default routesData