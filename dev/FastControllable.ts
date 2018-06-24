/// <reference path="behaviour.ts" />

class FastControllable implements iBehaviour{
    
    ship:Ship;

    constructor(s: Ship){
        this.ship = s;
        this.ship.shipSpeed = 20;
        // Catch both keydown and keyup events for smooth movement while holding down a key

        // Catch the keydown events to start moving the ship
        document.addEventListener('keydown', (event) => {
            const keyName = event.key;
            
            if(keyName == 'a'){
                this.ship.directionRight = false;
                this.ship.directionLeft = true;
            }
            if(keyName == 'd'){
                this.ship.directionLeft = false;
                this.ship.directionRight = true;
            }
            if(keyName == 'p'){
            }
        })

        // Catch the keyup events to stop moving the ship
        document.addEventListener('keyup', (event) => {
            const keyName = event.key;
            
            if(keyName == 'a'){
                this.ship.directionLeft = false;
            }
            if(keyName == 'd'){
                this.ship.directionRight = false;
            }
            if(keyName == 'p'){
                new DropNet(this.ship);
            }
            if(keyName == 'l'){
                this.ship.behaviour = new Controllable(this.ship);
            }
        })
    }

    update(): void {
        if(this.ship.directionRight){
            // Added/updated check for right border of screen
            if(this.ship.x >= Game.getInstance().getSky().clientWidth - this.ship.width){
                // Stop moving right (left is still possible)
                this.ship.directionRight = false;
            }
            else {
                this.ship.x += this.ship.shipSpeed;

                // Only change X position of the ship
                this.ship.element.style.transform ="translateX("+this.ship.x+"px) scaleX(-1) rotate(1deg)";
            }
        }
        if(this.ship.directionLeft){
            // Added/updated check for left border of screen
            if(this.ship.x <= 0){
                // Stop moving left (right is still possible)
                this.ship.directionLeft = false;
            }
            else {
                this.ship.x -= this.ship.shipSpeed;

                // Only change X position of the ship
                this.ship.element.style.transform ="translateX("+this.ship.x+"px) scaleX(1) rotate(-1deg)";
            }
        }
    }
}