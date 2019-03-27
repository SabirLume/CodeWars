function points(games) {
    let homePoints = 0;
      games.forEach(function(game){
        let x = game.split(':')[0]
        let y = game.split(':')[1]
        if(x === y){
          homePoints ++;
        }else if(x > y){
          homePoints +=3;
        }else{
          homePoints += 0;
        }
      })
      return homePoints
    }