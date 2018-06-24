/// <reference path="interface.ts" />

class Game {
    static sky: any;
    private static _instance: Game;
    private ocean:any;
    private sky:any;
    private gameObjectsArray:Array<GameObject>;
    private interface:Interface;
    private amountOfFish : number;
    private maxFish : number;
    private health : number = 3;

    private constructor(){
        this.gameObjectsArray = new Array();
        this.ocean = document.getElementById("ocean");
        // console.log(this.ocean, 'ocean');
        // console.log("new ocean created!");

        this.sky = document.getElementById("sky");
        console.log(this.sky, 'sky');
        console.log("sky created!");

        let ship = new Ship();
        this.interface = new Interface(ship);
        this.gameObjectsArray.push(ship);
        console.log("new ship created");
        
        this.amountOfFish = 5;
        this.maxFish = 10;
        for(let i =0; i < this.amountOfFish; i++){
            let fish = new Fish();
            this.gameObjectsArray.push(fish);
        }
        
        setInterval(() => {
            
            if(this.amountOfFish < this.maxFish){
                let fish = new Fish();
                this.amountOfFish += 1;
                this.gameObjectsArray.push(fish);
                console.log('fish has been made');
            }
            else{console.log('too many fish')}

        },5000);
        console.log(this.gameObjectsArray)
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
        this.interface.draw();
        this.gameObjectsArray.forEach(element => {
            element.update();

        });

        this.gameObjectsArray.forEach(elementNet => {
            if(elementNet instanceof Net){
                if(elementNet.y > Game.getInstance().getOcean().clientHeight){
                    elementNet.element.remove();
                }
                this.gameObjectsArray.forEach(elementFish => {
                    if(elementFish instanceof Fish){
                        if(Util.checkCollision(elementNet.getRectangle(),elementFish.getRectangle())){
                            elementFish.element.remove();
                            this.amountOfFish -= 1;
                            elementNet.element.remove();
                        };
                    }
                });
            }
        })
        
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
    
    public static getSky():HTMLElement {
        return this.sky;
    }  
}

// load
window.addEventListener("load", function() {
    let g:Game = Game.getInstance();
    console.log(g);
});
