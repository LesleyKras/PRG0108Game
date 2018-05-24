class Controllable implements Behavior{

    ship:Ship;

    constructor(s: Ship){
        this.ship = s;

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