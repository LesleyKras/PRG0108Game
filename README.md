# Installation

## Step 1:
Clone the repository to your local environment

## Step 2:
run npm install to acquire all the required packages

## Step 3:
Run CMD + Shift + b to build the project. Select the tsconfig.json file that's inside the project folder.

# Class diagram
![UML](/docs/images/UML.png?raw=true "UML")


# Code Snippets + Explanation
## Singleton Pattern
De Singleton Pattern heb is toegepast op de Game Class. Hierdoor ben ik er zeker van dat er altijd maar 1 instantie van de game is, en ik altijd de juiste instantie aanspreek door de getInstance functie.
Hieronder de singleton zoals ik deze heb toegepast op mijn Game class.

```typescript

class Game {
    private static __instance : Game;

    private constructor(){}

    public static getInstance() : Game
    {
        return this._instance || (this._instance = new this());
    }
}

```

## Strategy Pattern
De Strategy Pattern is toegepast op de vissen. Voor de strategy pattern heb ik 2 nieuwe gedragstypen gemaakt; Swimming en deadFish(). Deze implementeren beide de iBehaviour interface zodat deze als 'behaviour' parameter kan worden meegeven voor het gedrag van de vis.

In de Swimming Class staat de code geschreven waardoor de vis van links naar rechts zwemt.
In de deadFish Class staat de functionaliteit beschreven als de vis dood gaat, dan drijft hij naar boven en veranderd de afbeelding naar een dode vis.

Doordat beide gedragstypen de interface implementeren beschikken zij beide over een update() functie. Hierdoor kan ik deze gemakkelijk aanspreken in de update functie van de GameObject zelf. Welke weer wordt aangesproken in de gameloop.

Hierdoor kan ik dus heel makkelijk het gedrag veranderen van de vis, door simpelweg de inhoud van de 'behaviour' parameter te vervangen voor een andere class die voldoet aan de iBehvaiour interface.



Interface
```typescript
interface iBehaviour {
    gameObject: GameObject;
    update():void;
}
```

Fish
```typescript
class Fish extends GameObject{
    public behaviour: iBehaviour;

    constructor(){
        super('fish');
    }

    public update():void{
        this.behaviour.update();
    }
}
```

## Observer Pattern
Voor de Observer Pattern heb ik een rode knop toegevoegd onder de Ammo en Tijd. Deze knop kun je 1 malig gebruiken om in 1x alle vissen te vangen uit de zee. Dit heb ik gedaan door gebruik te maken van de Observer Pattern.
Ik heb 2 interfaces; Observable en Observer.

De knop is bij mij een observable. Deze beheert alle Observers (Elementen die naar deze knop moeten luisteren).
Bij het aanmaken van een vis, koppel ik de vis meteen aan de knop. Vervolgens heb ik een EventListener met klik toegevoegd aan de knop, die door de observers array heen loopt, om vervolgens bij elke Observer de receiveNotification() function aan te spreken.

Observable
```typescript
interface IObservable {
    observers:Array<IObserver>;
    RegisterObserver(observer : IObserver ) : void;
    RemoveObserver(observer : IObserver ) : void;
}
```

Observer
```typescript
interface IObserver {
    ReceiveNotification() : void;
}
```

## Polymorphism
Polymorfisme heb ik toegpast met de GameObject class. Ik heb eerst een globale class aangemaakt voor een gameObject met standaard variabelen die elk gameObject zou moeten hebben zoals een -x en y waarde en dergelijke. Naast de standaardwaarden zit er ook een update() functie in. Deze functie wordt gebruikt om elk gameObjkect te updaten.

Dit doe ik in de Game class. Hier heb ik een array met alle GameObjecten van de game. Het type wat er wordt opgeslagen in de array is ook van het GameObject. Echter zou ik wel nog later kunnen terugzien of dat het van bijvoorbeeld het type Fish is.

GameObject Class
```typescript
class GameObject {
    x : number;
    y : number;
    width: number;
    height: number;;
    element : HTMLElement;

    constructor(name:string){
        this.element = document.createElement(name);
    }

    update(){}

    public getRectangle() {
        return this.element.getBoundingClientRect()
    }

}
```

Loopen door gameobjecten
```typescript
class Game {

private gameObjectsArray:Array<GameObject>;
    
private constructor(){}

    private gameLoop(){
        this.gameObjectsArray.forEach(element => {
            element.update();
        });
}
```

# Gameplay Components

# Game can be played here

www.lesleykras.nl

# Pull Request - Week 4

https://github.com/0909758/PRG08_Bobs_Nightmare/commit/8211faefbef7c0a397fecb0629e7038bd8843092

# Peer review - Week 6

https://github.com/0909758/PRG08_Bobs_Nightmare/issues/5