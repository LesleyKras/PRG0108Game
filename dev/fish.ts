/// <reference path="gameObject.ts" />
/// <reference path="behaviour.ts" />


class Fish extends GameObject implements IObserver{
    public fishSpeed: number = 5;
    public directionRight: boolean = true;
    private ocean:any;
    private alive : boolean = true;

    constructor(){
        super('fish');
        this.width = 40;
        this.height = 40;
        this.ocean = document.getElementById('ocean');
        this.x = Math.floor(Math.random() * this.ocean.clientWidth) + 1 ;
        this.y = Math.floor(Math.random() * this.ocean.clientHeight) + 1 ; //500 max
        // console.log(this.ocean.clientWidth, 'width');
        // console.log(this.ocean.clientHeight, 'heigth');
        // console.log(this.x, 'x');
        // console.log(this.y, 'y');
        this.element.style.transform ="translate("+this.x+"px,"+this.y+"px)";
        let url = "url(../images/fish"+ (Math.floor(Math.random() * 3) + 1) +".png)";
        this.element.style.backgroundImage = url;
        this.ocean.appendChild(this.element);
    }


    public update():void {
        if(this.directionRight){
            this.x += this.fishSpeed;
            if(this.x >= Game.getInstance().getOcean().clientWidth){
                this.directionRight = false;
            }
            this.element.style.transform ="translate("+this.x+"px,"+this.y+"px)";
        }
        else{
            this.x -= this.fishSpeed;
            if(this.x <= 1){
                this.directionRight = true;
            }
            this.element.style.transform ="translate("+this.x+"px,"+this.y+"px) scaleX(-1)";
        }
        
    }

    public dead():void{
        if(this.alive){
            this.element.remove();
            Game.getInstance().setTime(5);
            Game.getInstance().setAmountOfFish(-1);
            this.alive = false;
        }
        
    }

    ReceiveNotification(): void {
        if(this.alive){
            this.dead();
        }
    }
    

}