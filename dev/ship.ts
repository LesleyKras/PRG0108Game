/// <reference path="gameObject.ts" />
/// <reference path="game.ts" />


class Ship extends GameObject{
    public shipSpeed:number = 10;
    public canShoot: boolean = true;
    private anchors: number = 3;


    // Use a variable for both directions to get more control over the movement
    public directionRight : boolean = false;
    public directionLeft : boolean = false;

    private sky : any;
    public behaviour: iBehaviour;

    constructor() {
        super('ship');
        this.sky = document.getElementById("sky");
        this.width = 100;
        this.x = this.sky.clientWidth - 100;
        this.element.style.transform ="translateX("+this.x+"px) scaleX(1) rotate(-1deg)";
        this.sky.appendChild(this.element);
        this.behaviour = new Controllable(this);
        setInterval(() => {
            this.setAnchors(1);
        }, 2000);
    }
    
    update() {
        if(this.directionRight){
            // Added/updated check for right border of screen
            if(this.x >= this.sky.clientWidth - this.width){
                // Stop moving right (left is still possible)
                this.directionRight = false;
            }
            else {
                this.x += this.shipSpeed;

                // Only change X position of the ship
                this.element.style.transform ="translateX("+this.x+"px) scaleX(-1) rotate(1deg)";
            }
        }
        if(this.directionLeft){
            // Added/updated check for left border of screen
            if(this.x <= 0){
                // Stop moving left (right is still possible)
                this.directionLeft = false;
            }
            else {
                this.x -= this.shipSpeed;

                // Only change X position of the ship
                this.element.style.transform ="translateX("+this.x+"px) scaleX(1) rotate(-1deg)";
            }
        }
    }

    public getAnchors():number{
        return this.anchors;
    }

    public setAnchors(n : number):void{
        this.anchors += n;
    }

}
