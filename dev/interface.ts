
/// <reference path="game.ts" />

class Interface{
    div : HTMLElement;
    ammo : HTMLElement;
    ship : Ship;
    time : HTMLElement;
    game : Game;
    health: HTMLElement;
    
    constructor(s : Ship, g : Game){
        this.ship = s;
        this.game = g;
        this.div = document.getElementById('info') || document.createElement('info');
        
        this.ammo = document.getElementById('ammo') || document.createElement('ammo');
        this.ammo.innerHTML = s.getAnchors() + 'ammo';
        
        this.time = document.getElementById('time') || document.createElement('time');
        this.time.innerHTML = 'Time: ' + this.game.getTime();

        this.health = document.getElementById('health') || document.createElement('health');
        this.health.innerHTML = 'Health: ' + this.game.getHealth();
    }

    public draw():void {
        this.ammo.innerHTML = 'Ammo :' + this.ship.getAnchors();
        this.time.innerHTML = 'Time: ' + this.game.getTime();

    }
}