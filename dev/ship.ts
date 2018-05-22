/// <reference path="gameObject.ts" />
/// <reference path="game.ts" />


class Ship extends GameObject{
    public shipSpeed:number = 15;
    public directionRight : boolean = true;
    private sky : any;
    public behaviour: Behavior;

    constructor() {
        super('ship');
        this.sky = document.getElementById("sky");
        this.sky.appendChild(this.element);
        this.behaviour = new Controllable(this);
    }
    update() {
        if(this.directionRight){
            this.x += this.shipSpeed;
            if(this.x >= this.sky.clientWidth - this.width){
                this.directionRight = false;
            }
            this.element.style.transform ="translate("+this.x+"px,"+this.y+"px) scaleX(-1)";
        }
        else{
            this.x -= this.shipSpeed;
            if(this.x <= 1){
                this.directionRight = true;
            }
            this.element.style.transform ="translate("+this.x+"px,"+this.y+"px) ";
        }
    }
}
