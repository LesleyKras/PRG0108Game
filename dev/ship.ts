/// <reference path="gameObject.ts" />
/// <reference path="game.ts" />


class Ship extends GameObject{
    public shipSpeed:number = 10;
    public canShoot: boolean = true;
    private nets: number = 3;


    // Use a variable for both directions to get more control over the movement
    private sky : any;
    public behaviour: iBehaviour;

    constructor() {
        super('ship');
        this.sky = document.getElementById("sky");
        this.width = 100;
        this.speed = 10;
        this.x = this.sky.clientWidth - 100;
        this.element.style.transform ="translateX("+this.x+"px) scaleX(1) rotate(-1deg)";
        this.sky.appendChild(this.element);
        this.behaviour = new Controllable(this);
        this.directionLeft = false;
        this.directionRight = false;
        setInterval(() => {
            this.setNets(1);
        }, 2000);
    }
    
    update() {
        this.behaviour.update();
    }

    public getNets():number{
        return this.nets;
    }

    public setNets(n : number):void{
        this.nets += n;
    }

}
