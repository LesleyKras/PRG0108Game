class Interface{
    div : HTMLElement;
    ammo : HTMLElement;
    ship : Ship;
    constructor(s : Ship){
        this.ship = s;
        this.div = document.getElementById('info')
        this.ammo = document.createElement('ammo');
        this.ammo.innerHTML = s.getAnchors() + 'ammo';
        this.div.appendChild(this.ammo);
    }

    public draw():void {
        this.ammo.innerHTML = this.ship.getAnchors() + ' Ammo';
        
    }
}