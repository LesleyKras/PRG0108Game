class Net extends GameObject {
        public dropSpeed: number = 3.5;

    constructor(x:number, y:number){
        super('net');
        this.width = 10;
        this.height = 10;
        this.x = x;
        this.y = y;
        this.element.style.backgroundColor = "black";
        this.element.style.width = this.width+"px";
        this.element.style.height = this.height+"px";
        Game.getInstance().getOcean().appendChild(this.element);
        console.log(this.element);
    }

    update() {
        this.y += this.dropSpeed;
        this.element.style.transform ="translate("+this.x+"px,"+this.y+"px)"
    }
}