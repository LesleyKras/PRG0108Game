/// <reference path="behaviour.ts" />

class Controllable implements iBehaviour{
    
    gameObject : GameObject;

    constructor(s: Ship){
        this.gameObject = s;
        let ship : Ship = s;
        // Catch both keydown and keyup events for smooth movement while holding down a key

        // Catch the keydown events to start moving the ship
        document.addEventListener('keydown', (event) => {
            const keyName = event.key;
            
            if(keyName == 'a'){
                this.gameObject.directionRight = false;
                this.gameObject.directionLeft = true;
            }
            if(keyName == 'd'){
                this.gameObject.directionLeft = false;
                this.gameObject.directionRight = true;
            }
            if(keyName == 'p'){
            }
        })

        // Catch the keyup events to stop moving the ship
        document.addEventListener('keyup', (event) => {
            const keyName = event.key;
            
            if(keyName == 'a'){
                this.gameObject.directionLeft = false;
            }
            if(keyName == 'd'){
                this.gameObject.directionRight = false;
            }
            if(keyName == 'p'){
                new DropNet(ship);
            }
        })
    }

    update(): void {
        if(this.gameObject.directionRight){
            // Added/updated check for right border of screen
            if(this.gameObject.x >= Game.getInstance().getSky().clientWidth - this.gameObject.width){
                // Stop moving right (left is still possible)
                this.gameObject.directionRight = false;
            }
            else {
                this.gameObject.x += this.gameObject.speed;

                // Only change X position of the ship
                this.gameObject.element.style.transform ="translateX("+this.gameObject.x+"px) scaleX(-1) rotate(1deg)";
            }
        }
        if(this.gameObject.directionLeft){
            // Added/updated check for left border of screen
            if(this.gameObject.x <= 0){
                // Stop moving left (right is still possible)
                this.gameObject.directionLeft = false;
            }
            else {
                this.gameObject.x -= this.gameObject.speed;

                // Only change X position of the ship
                this.gameObject.element.style.transform ="translateX("+this.gameObject.x+"px) scaleX(1) rotate(-1deg)";
            }
        }
    }
}