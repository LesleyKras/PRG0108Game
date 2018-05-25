class Controllable implements Behavior{

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
        })
    }
}