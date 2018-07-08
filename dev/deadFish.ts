class deadFish implements iBehaviour {
    gameObject: GameObject;
    ocean : any;
    constructor(f : Fish) {
        this.gameObject = f;
        this.ocean = document.getElementById('ocean');
    }
    update(): void {
        if(this.gameObject.y > (0 - this.gameObject.height / 2))
        {
        this.gameObject.element.classList.add('img-vert');
        this.gameObject.element.style.backgroundImage = "url(images/fish_dead.png)";;
        this.gameObject.y -=1;
        this.gameObject.element.style.transform ="translate("+this.gameObject.x+"px,"+this.gameObject.y+"px) scaleX(-1)";
        }
        else{
            this.gameObject.element.remove();
        }
    }
}