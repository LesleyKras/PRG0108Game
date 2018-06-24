class KillAllFish implements IObservable {
    observers: IObserver[] = [];
    private button : HTMLElement;
    private amountofClicks : number = 0;
    
    constructor(){
        this.button = document.getElementById('killbutton') || document.createElement('killbutton');
        this.button.innerHTML = "Capture ALL"
        this.button.addEventListener("click", (e: MouseEvent) => {
            this.onClick(e);
        });
    }

    private onClick(e:MouseEvent):void {
        if(this.amountofClicks < 1){
        for(let observer of this.observers){
            observer.ReceiveNotification();
        }
        this.amountofClicks += 1;
        this.button.remove();
    }
    }

    RegisterObserver(observer: IObserver): void {
        this.observers.push(observer);
    }    
    
    RemoveObserver(observer: IObserver): void {
        let index = this.observers.indexOf(observer);
        this.observers.splice(index, 1);
    }

}