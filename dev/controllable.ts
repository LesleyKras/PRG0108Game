/// <reference path="behaviour.ts" />

class Controllable implements iBehaviour{

    ship:Ship;

    constructor(s: Ship){
        this.ship = s;

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
                this.ship.behaviour = new DropNet(this.ship);
            }
        })
    }

    public draw():void {

        
    }
}