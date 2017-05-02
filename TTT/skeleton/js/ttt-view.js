const Game = require("../../solution/game.js");

class View {
  constructor(game, $el) {
    this.game = game;
    this.el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $('li').on("click", (e)=>{
      const current = $(e.currentTarget);

      if (current.hasClass("move-made")) {
        alert("Invalid Move");
      } else {
        this.makeMove(current);
        let currentPlayer = this.game.currentPlayer;
        current.addClass(`move-made ${currentPlayer}`);

        if (this.game.isOver()){
          $('.ttt').append($(`<h2 id="winner">You Win, ${currentPlayer.toUpperCase()}!</h2>`));
          $(`.${this.game.currentPlayer}`).addClass('winner');
          $( "li" ).not( `.${currentPlayer}` ).addClass('loser');
          $('li').off("click");
          $('li').removeClass("hover");
        }
      }
    });
  }

  makeMove($square) {
    let pos = $square.data("pos");
    let x = Math.floor(parseInt(pos)/3);
    let y = parseInt(pos%3);
    let move = [x,y];
    this.game.playMove(move);
  }

  setupBoard() {
    let $grid = $("<ul class = 'cf'></ul>");
    for(let i = 0; i < 9; i++){
      $grid.append($(`<li class="hover" data-pos=\"${i}\"></li>`));
    }
    this.el.append($grid);
  }
}

module.exports = View;
