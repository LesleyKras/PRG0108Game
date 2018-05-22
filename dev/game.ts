class Game {
    private static _instance: Game;
    private ship:Ship;
    private ocean:any;
    private sky:any;

    private constructor(){
        this.ocean = document.getElementById("ocean");
        console.log(this.ocean, 'ocean');
        console.log("new ocean created!");

        this.sky = document.getElementById("sky");
        console.log(this.sky, 'sky');
        console.log("sky created!");

        this.ship = new Ship;
        console.log("new ship created");


        requestAnimationFrame(() => this.gameLoop());
    }
    
    public static getInstance():Game
    {
       if(!Game._instance){
           Game._instance = new this();
       }
       return this._instance;
    }

    private gameLoop(){
        this.ship.behaviour.draw();
        requestAnimationFrame(() => this.gameLoop());
    }

    public getOcean():HTMLElement {
        return this.ocean;
    }
    
    public static getSky():HTMLElement {
        return this.sky;
    }
    
}
// load
window.addEventListener("load", function() {
    let g:Game = Game.getInstance();
});
