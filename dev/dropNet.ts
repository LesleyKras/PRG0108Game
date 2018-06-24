class DropNet   {
    ship: Ship;

    constructor(s : Ship){
        this.ship = s;

        document.addEventListener('keydown', (event) => {
            const keyName = event.key;
            
            if(keyName == 'p' && this.ship.canShoot && this.ship.getNets() > 0){
                this.ship.canShoot = false;
                this.ship.setNets(-1);
                this.fireNet(this.ship);
                Game.getInstance().createNet(this.ship.x + this.ship.width/2,this.ship.y);
            }
        });
    }

    public fireNet(s: Ship){
        setTimeout(function(){
            s.canShoot=true;
        }, 10);
    }

    
    

}