class EventHandler {
    static RegisterKeyPress(input: string){
        document.getElementById(input).addEventListener('keypress', (e: KeyboardEvent) =>{
           //You have yout key code here
            console.log(e.keyCode);
        }
    }
}