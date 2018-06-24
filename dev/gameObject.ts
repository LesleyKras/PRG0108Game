class GameObject {
    x : number = 0;
    y : number = 0;
    width: number = 0;
    height: number = 0;
    element : HTMLElement;

    constructor(name:string){
        this.element = document.createElement(name);
    }

    update(){}

    public getRectangle() {
        return this.element.getBoundingClientRect()
    }

}