class Game {
    static sky: any;
    private static _instance: Game;
    private ocean:any;
    private sky:any;
    private gameObjectsArray:Array<GameObject>;

    private constructor(){
        this.gameObjectsArray = new Array();
        this.ocean = document.getElementById("ocean");
        // console.log(this.ocean, 'ocean');
        // console.log("new ocean created!");

        this.sky = document.getElementById("sky");
        console.log(this.sky, 'sky');
        console.log("sky created!");

        let ship = new Ship();
        this.gameObjectsArray.push(ship);
        console.log("new ship created");

        for(let i = 0; i < 3; i++){
            let fish = new Fish();
            this.gameObjectsArray.push(fish);
        }
        console.log('fish has been made');

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
        this.gameObjectsArray.forEach(element => {
            element.update();
        });
        
        requestAnimationFrame(() => this.gameLoop());
    }

    public getOcean():HTMLElement {
        return this.ocean;
    }

    public createNet(x:number, y:number){
        console.log('created a net at ' + x + 'X-value and Y value: ' + y);
        let net = new Net(x,y);
        this.gameObjectsArray.push(net);
    }
    
    public checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
     }
    
    public static getSky():HTMLElement {
        return this.sky;
    }

    
    
}
// load
window.addEventListener("load", function() {
    let g:Game = Game.getInstance();
    console.log(g);
});
