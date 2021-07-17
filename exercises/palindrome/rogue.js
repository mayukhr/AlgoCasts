function findRoutes(routes) {
    let solution = [];
    let next = '';
  
    for(let i = 0; i < routes.length; i++) {
      let first = routes[i][0];
      next = routes[i][1];
      let j = 0;
      while (j < routes.length && routes[j][1] !== first) {
        j++;
      }
      if (j >= routes.length) {
        solution.push(first);
        routes.splice(i, 1);
        break;
      }
    }
  
    while (routes.length !== 0) {
      for(let i = 0; i < routes.length; i++) {
        if (routes[i][0] === next) {
          solution.push(routes[i][0]);
          next = routes[i][1]
          routes.splice(i, 1);
          break;
        }
      }
    }
    solution.push(next);
    return solution;
  }

  console.log(findRoutes([["MNL", "TAG"], ["CEB", "TAC"], ["TAG", "CEB"], ["TAC", "BOR"]]).join(', '));