// start slingin' some d3 here.
var gameOptions = {
  height: 450,
  width: 700,
  enemies: 30,
  padding: 20
};

var gameStats = {
  highScore: 0,
  currentScore: 0,
};

var bruh = [[300,300]];

var gameBoard = function() {
  d3.select('.board').append('svg')
    .attr('class', 'viewport')
    .attr('width', gameOptions.width)
    .attr('height', gameOptions.height)
    .style('background-color', 'black');
};

var dude = function() {
  d3.select('.viewport')
    .append('circle')
    .attr('r', 10)
    .attr('class', 'player')
    .attr('fill', 'red')
    .data(bruh)
    .attr('transform', function(d) {
    return 'translate(' + d[0] + ',' + d[1] + ')';
  })
   .call(drag);
};

var drag = d3.behavior.drag()
    .on("drag", function(d,i) {
      d[0] += d3.event.dx
      d[1] += d3.event.dy
      d3.select(this).attr("transform", function(d,i){
      return 'translate(' + d[0] + ',' + d[1] + ')';
    });
});

gameBoard();

var makePositions = function() {
  var dataStore = [];
  for (var i = 0; i < gameOptions.enemies; i++) {
    var coord = [];
    var x = Math.random() * 700;
    coord.push(x);
    var y = Math.random() * 450;
    coord.push(y);
    dataStore.push(coord);
  }
  return dataStore;
};

var dataStore = makePositions();

var enemies = function() {
  d3.select('.viewport')
    .selectAll('image')
    .data(makePositions())
    .enter()
    .append('image')
    .attr('width', 25)
    .attr('height', 25)
    .attr('xlink:xlink:href', 'asteroid.png')
    .attr('transform', function(d) {
      return 'translate(' + d[0] + ',' + d[1] + ')';
    });

};

var moveEnemies = function() {
  d3.select('.viewport')
    .selectAll('image')
    .data(makePositions())
    .transition().duration(3000)
    .attr('transform', function(d) {
      return 'translate(' + d[0] + ',' + d[1] + ')';
    });
};

var scoreCounter = function() {
  d3.select('.current')
    .select('span')
    .text(gameStats.currentScore);
  gameStats.currentScore++;
};

var collision = function() {
  var enemies = d3.select('svg').selectAll('image')[0];
  var dude = d3.select('circle')[0][0];
  var dudeX = parseInt(d3.select(dude).attr('transform').split('(')[1]);
  var dudeY = parseInt(d3.select(dude).attr('transform').split(',')[1]);
  for (var i = 0; i < enemies.length; i++) {
    var thisEnemy = d3.select(enemies[i])[0][0];
    var thisEnemyX = parseInt(d3.select(thisEnemy).attr('transform').split('(')[1]);
    var thisEnemyY = parseInt(d3.select(thisEnemy).attr('transform').split(',')[1]);
    var xLeg = Math.abs(dudeX - thisEnemyX);
    var yLeg = Math.abs(dudeY - thisEnemyY);
    if (Math.sqrt((xLeg * xLeg) + (yLeg * yLeg)) < 20) {
      gameStats.currentScore = 0;
    }
  }
};

setInterval(scoreCounter, 1000);
enemies();
dude();
setInterval(moveEnemies, 2500);
setInterval(collision, 1);
