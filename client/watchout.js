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

var axes = {
  x: d3.scale.linear().domain([0, 100]).range([0, gameOptions.width]),
  y: d3.scale.linear().domain([0, 100]).range([0, gameOptions.height])
};

var gameBoard = function() {
  d3.select('.board').append('svg')
    .attr('class', 'viewport')
    .attr('width', gameOptions.width)
    .attr('height', gameOptions.height)
    .style('background-color', 'black');
};
gameBoard();
var dataStore = []
var makePositions = function() {

  for (var i = 0; i < 2; i++) {
  var coord = []
  var x = Math.random()*100;
  coord.push(x);
  var y = Math.random()*100;
  coord.push(y);
  dataStore.push(coord);
  }
  console.log(dataStore);
}
makePositions();

var enemies = function() {
  d3.selectAll('.viewport')
  //  .data(dataStore).enter()
    .append('image')
    .attr('width', 50)
    .attr('height', 50)
    .attr('xlink:xlink:href', 'asteroid.png')
    .attr('cx', 57) //for saturday: try to get the translate working
    .attr('cy', 490) // it's almost there, just need a few minor tweaks.
    // .attr('transform', function(d){
    //   console.log(d[0])
    //   return 'translate( + d[0] ',' d[1] + )'
    // });

    //put in translate attr
}

enemies();
//.attr('xlink:xlink:href', asteroid.png)
//
// var updateScore = function() {
//   d3.select('.current')
//       .text(gameStats.score.toString())
// };
//
// var updateBestScore = function() {
//   gameStats.bestScore = _.max [gameStats.bestScore, gameStats.score];
//
//   d3.select('.highscore').text(gameStats.bestScore.toString());
// };
//
// var Player = function() {
//
//   this.path = 'm-7.5,1.62413c0,-5.04095 4.08318,-9.12413 9.12414,-9.12413c5.04096,0 9.70345,5.53145 11.87586,9.12413c-2.02759,2.72372 -6.8349,9.12415 -11.87586,9.12415c-5.04096,0 -9.12414,-4.08318 -9.12414,-9.12415z';
//   this.fill = '#ff6600';
//   this.x = 0;
//   this.y = 0;
//   this.angle = 0;
//   this.r = 5;
// };
//
// Player.prototype.gameMaker = function(gameOptions) {
//   this.gameOptions = gameOptions;
// };
// Player.prototype.render = function(to) {
//   this.el = to.append('svg:path')
//           .attr('d', this.path)
//           .attr('fill', this.fill)
//
//   this.el.transform = {
//     x: this.gameOptions.width * 0.5,
//     y: this.gameOptions.height * 0.5
//   };
//
//   this.setupDragging = function(){
//     this;
//   };
// };
//
// Player.prototype.getX = function() {
//   return this.x;
// };
//
// Player.prototype.setX = function(x) {
//   var minX = this.gameOptions.padding
//   var maxX = this.gameOptions.width - this.gameOptions.padding
//   if (x <= minX) {
//     x = minX
//   }
//   if (x >= maxX) {
//     x = maxX
//   }
//   this.x = x;
// };
//
// Player.prototype.getY = function() {
//
//   Player.prototype.setY = function() {
//     var minY = this.gameOptions.padding
//     var maxY = this.gameOptions.height - this.gameOptions.padding
//     if (y <= minY) {
//       y = minY;
//     }
//     if (y >= maxY) {
//       y = maxY;
//     }
//   }
//   return this.y;
// };
//
// Player.prototype.transform = function(opts) {
//   this.angle = opts.angle || this.angle;
//   this.setX = opts.x || this.x;
//   this.setY = opts.y || this.y;
//   //
//   // //TODO : add some d3 shit
//   // @el.attr 'transform',
//   //     "rotate(#{@angle},#{@getX()},#{@getY()}) "+
//   //     "translate(#{@getX()},#{@getY()})"
//
// };
//
// Player.prototype.moveAbsolute = function(x, y) {
//   this.transform(x,y);
// };
//
// Player.prototype.moveRelative = function(dx, dy) {
//   this.transform(this.getX(), this.getY(), 360 * (Math.atan2(dy,dx)/(Math.PI*2)));
// };
//
// Player.prototype.setupDragging = function() {
//   var dragMove = function() {
//     this.moveRelative(d3.event.dx, d3.event.dy)
//   };
//
//   var drag = d3.behavior.drag()
//               .on('drag', dragMove)
//   this.el.call(drag)
//
// };

// //check out players [] and players.push
//
// Player.prototype.createEnemies = function() {
//   _.range(0,gameOptions.nEnemies).map(i, function() {
//     { //TODO fix this
//       id: i,
//       x: Math.random()*100,
//       y: Math.random()*100
//     }
//   });
// };
//
// Player.protoype.render = funtion() {
//   var enemies = gameBoard.selectAll('circle.enemy')
//                          .data(enemy_data)
// }
//
//
//
//
//
//
//
//
//
// Player.protoype.play = function() {
//
//
//   render();
// }
