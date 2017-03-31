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
  x: d3.scale.linear().domain([0,100]).range([0,gameOptions.width]),
  y: d3.scale.linear().domain([0,100]).range([0,gameOptions.height])
};

var gameBoard = d3.select('.board').append('svg:svg')
                     .attr('width', gameOptions.width)
                     .attr('height', gameOptions.height)

var updateScore = function() {
  d3.select('.current')
      .text(gameStats.score.toString())
};

var updateBestScore = function() {
  gameStats.bestScore = _.max [gameStats.bestScore, gameStats.score];

  d3.select('.highscore').text(gameStats.bestScore.toString());
}
                       
