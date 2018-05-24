/// <reference path="gameObject.ts" />
/// <reference path="game.ts" />


class Ship extends GameObject{
    public shipSpeed:number = 10;
    public directionRight : boolean = false;
    public directionLeft : boolean = false;
    private sky : any;
    public behaviour: Behaviour;

    constructor() {
        super('ship');
        this.sky = document.getElementById("sky");
        this.sky.appendChild(this.element);
        this.behaviour = new Controllable(this);
    }
    update() {
        if(this.directionRight){
            if(this.x >= this.sky.clientWidth - this.width - 100){
                this.directionRight = false;
            }
            else {
                this.x += this.shipSpeed;
                this.element.style.transform ="translateX("+this.x+"px) scaleX(-1)";
            }
        }
        if(this.directionLeft){
            if(this.x <= this.width){
                this.directionLeft = false;
            }
            else {
                this.x -= this.shipSpeed;
                this.element.style.transform ="translateX("+this.x+"px) scaleX(1)";
            }
        }
    }
}
