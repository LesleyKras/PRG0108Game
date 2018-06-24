# Installation

## Step 1:
Clone the repository to your local environment

## Step 2:
run npm install to acquire all the required packages

## Step 3:
Run CMD + Shift + b to build the project. Select the tsconfig.json file that's inside the project folder.

# Class diagram

# Code Snippets + Explanation
## Singleton Pattern
De Singleton Pattern heb is toegepast op de Game Class. Hierdoor ben ik er zeker van dat er altijd maar 1 instantie van de game is, en ik altijd de juiste instantie aanspreek door de getInstance functie.
Hieronder de singleton zoals ik deze heb toegepast op mijn Game class.

'''typescript

class Game {
    private static __instance : Game;

    private constructor(){}

    public static getInstance():Game
    {
        return this._instance || (this._instance = new this());
    }
}

'''

# Gameplay Components

# Game can be played here

https://stud.hosted.hr.nl/0881520/websites/CMGTPRG018/

# Pull Request - Week 4

https://github.com/0909758/PRG08_Bobs_Nightmare/commit/8211faefbef7c0a397fecb0629e7038bd8843092

# Peer review - Week 6

https://github.com/0909758/PRG08_Bobs_Nightmare/issues/5