const routesData = {
  positions: {
    'position-1': {
      id: 'position-1',
      name: 'Position 1',
      image: '/shark1.jpg',
      image_width: 640,
      image_height: 330,
      sources: [{ x: 10, y: 10 }]
    },
    'position-2': {
      id: 'position-2',
      name: 'Position 2',
      image: '/shark2.jpg',
      image_width: 800,
      image_height: 533,
      sources: [{ x: 10, y: 10 }]
    },
    'position-3': {
      id: 'position-3',
      name: 'Position 3',
      image: '/shark3.jpg',
      image_width: 640,
      image_height: 320,
      sources: [{ x: 10, y: 10 }]
    }
  },
  routes: [
    {
      id: 'route-a',
      title: 'Route A',
      positionIds: ['position-1', 'position-2', 'position-3']
    }
  ]
};

export default routesData