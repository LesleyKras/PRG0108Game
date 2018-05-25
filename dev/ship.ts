/// <reference path="gameObject.ts" />
/// <reference path="game.ts" />


class Ship extends GameObject{
    public shipSpeed:number = 10;

    // Use a variable for both directions to get more control over the movement
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
            // Added/updated check for right border of screen
            if(this.x >= this.sky.clientWidth - this.width - 100){
                // Stop moving right (left is still possible)
                this.directionRight = false;
            }
            else {
                this.x += this.shipSpeed;

                // Only change X position of the ship
                this.element.style.transform ="translateX("+this.x+"px) scaleX(-1)";
            }
        }
        if(this.directionLeft){
            // Added/updated check for left border of screen
            if(this.x <= this.width){
                // Stop moving left (right is still possible)
                this.directionLeft = false;
            }
            else {
                this.x -= this.shipSpeed;

                // Only change X position of the ship
                this.element.style.transform ="translateX("+this.x+"px) scaleX(1)";
            }
        }
    }
}
