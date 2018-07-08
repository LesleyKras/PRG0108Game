/// <reference path="gameObject.ts" />
/// <reference path="behaviour.ts" />
/// <reference path="Swimming.ts" />
/// <reference path="deadFish.ts" />




class Fish extends GameObject implements IObserver{
    public fishSpeed: number = 5;
    public directionRight: boolean = true;
    private ocean:any;
    private alive : boolean = true;
    private behaviour : iBehaviour;

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
        let fishType : number = (Math.floor(Math.random() * 3) + 1);
        this.element.style.transform ="translate("+this.x+"px,"+this.y+"px)";
        let url = "url(../images/fish"+ fishType +".png)";
        this.speed = fishType * 3;
        this.element.style.backgroundImage = url;
        this.ocean.appendChild(this.element);
        this.behaviour = new Swimming(this);
    }


    public update():void {
        this.behaviour.update();
    }

    public dead():void{
        if(this.alive){
            console.log('boem');
            this.behaviour = new deadFish(this);
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