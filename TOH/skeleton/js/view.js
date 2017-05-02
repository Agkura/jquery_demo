class View{

  constructor(game, $el){
    this.game = game;
    this.el = $el;
    this.setupTowers();
    this.render();
    this.firstClick = undefined;

    $("ul").on("click", (e)=>{
      let $current = $(e.currentTarget);
      let tower = parseInt($current.data("pos"));
      console.log(tower);
      this.clickTower(tower);
    });
  }

  clickTower(tower){
    if(this.firstClick === undefined){
      this.firstClick = tower;
    } else if (this.game.move(this.firstClick, tower)){
      this.firstClick = undefined;
    }

  }

  setupTowers(){
    for(let i = 0; i < 3; i++){
      let $ul = $(`<ul data-pos='${i}'></ul>`);
      for(let j = 0; j < 3; j++){
        if(i === 0){
          let $li = $(`<li id = "disk-${j}"></li>`);
          $ul.append($li);
        }
        else{
          let $li = $("<li></li>");
          $ul.append($li);
        }
      }
      this.el.append($ul);
    }
  }

  render(){

  }
}

module.exports = View;
