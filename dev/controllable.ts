class Controllable implements Behavior{

    ship:Ship;

    constructor(s: Ship){
        this.ship = s;
        document.addEventListener('keydown', (event) => {
            const keyName = event.key;
            console.log(event.key)
            if(keyName == 'a' || keyName == 'ArrowLeft'){
                console.log(this.ship.x);
                this.ship.directionRight = true;
                this.ship.x -= this.ship.shipSpeed;
            }
            if(keyName == 'd' || keyName == 'ArrowRight'){
                this.ship.directionRight=false;
                this.ship.x += this.ship.shipSpeed;
            }
        })
    }

    private moveLeft(){
        this.ship.x -= this.ship.shipSpeed;
    }

    public draw(){
        if(this.ship.directionRight){
            this.ship.element.style.transform ="translate("+this.ship.x+"px,"+this.ship.y+"px)";
        }
        else{
            this.ship.element.style.transform ="translate("+this.ship.x+"px,"+this.ship.y+"px) scaleX(-1)";
        }
        
    }

}