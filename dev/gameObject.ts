class GameObject {
    x : number = 0;
    y : number = 0;
    width: number = 0;
    height: number = 0;
    element : HTMLElement;
    directionRight : boolean = false;
    directionLeft : boolean = false;
    speed : number = 1;

    constructor(name:string){
        this.element = document.createElement(name);
    }

    update(){}

    public getRectangle() {
        return this.element.getBoundingClientRect()
    }

}