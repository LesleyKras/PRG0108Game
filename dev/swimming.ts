/// <reference path="behaviour.ts" />

class Swimming implements iBehaviour{
    
    gameObject : GameObject;

    constructor(f : Fish){
        this.gameObject = f;
    }

    update(): void {
        if(this.gameObject.directionRight){
            this.gameObject.x += this.gameObject.speed;
            if(this.gameObject.x >= Game.getInstance().getOcean().clientWidth){
                this.gameObject.directionRight = false;
            }
            this.gameObject.element.style.transform ="translate("+this.gameObject.x+"px,"+this.gameObject.y+"px)";
        }
        else{
            this.gameObject.x -= this.gameObject.speed;
            if(this.gameObject.x <= 1){
                this.gameObject.directionRight = true;
            }
            this.gameObject.element.style.transform ="translate("+this.gameObject.x+"px,"+this.gameObject.y+"px) scaleX(-1)";
        }
    }
}