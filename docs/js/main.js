"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Controllable = (function () {
    function Controllable(s) {
        var _this = this;
        this.ship = s;
        document.addEventListener('keypress', function (event) {
            var keyName = event.key;
            if (keyName == 'a') {
                console.log(_this.ship.x);
                _this.ship.directionRight = true;
                _this.ship.x -= _this.ship.shipSpeed;
            }
            if (keyName == 'd') {
                _this.ship.directionRight = false;
                _this.ship.x += _this.ship.shipSpeed;
            }
        });
    }
    Controllable.prototype.moveLeft = function () {
        this.ship.x -= this.ship.shipSpeed;
    };
    Controllable.prototype.draw = function () {
        if (this.ship.directionRight) {
            this.ship.element.style.transform = "translate(" + this.ship.x + "px," + this.ship.y + "px)";
        }
        else {
            this.ship.element.style.transform = "translate(" + this.ship.x + "px," + this.ship.y + "px) scaleX(-1)";
        }
    };
    return Controllable;
}());
var EventHandler = (function () {
    function EventHandler() {
    }
    EventHandler.RegisterKeyPress = function (input) {
        document.getElementById(input).addEventListener('keypress', function (e) {
            console.log(e.keyCode);
        });
    };
    return EventHandler;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        this.ocean = document.getElementById("ocean");
        console.log(this.ocean, 'ocean');
        console.log("new ocean created!");
        this.sky = document.getElementById("sky");
        console.log(this.sky, 'sky');
        console.log("sky created!");
        this.ship = new Ship;
        console.log("new ship created");
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.getInstance = function () {
        if (!Game._instance) {
            Game._instance = new this();
        }
        return this._instance;
    };
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.ship.behaviour.draw();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.getOcean = function () {
        return this.ocean;
    };
    Game.getSky = function () {
        return this.sky;
    };
    return Game;
}());
window.addEventListener("load", function () {
    var g = Game.getInstance();
});
var GameObject = (function () {
    function GameObject(name) {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.element = document.createElement(name);
    }
    return GameObject;
}());
var Ship = (function (_super) {
    __extends(Ship, _super);
    function Ship() {
        var _this = _super.call(this, 'ship') || this;
        _this.shipSpeed = 15;
        _this.directionRight = true;
        _this.sky = document.getElementById("sky");
        _this.sky.appendChild(_this.element);
        _this.behaviour = new Controllable(_this);
        return _this;
    }
    Ship.prototype.update = function () {
        if (this.directionRight) {
            this.x += this.shipSpeed;
            if (this.x >= this.sky.clientWidth - this.width) {
                this.directionRight = false;
            }
            this.element.style.transform = "translate(" + this.x + "px," + this.y + "px) scaleX(-1)";
        }
        else {
            this.x -= this.shipSpeed;
            if (this.x <= 1) {
                this.directionRight = true;
            }
            this.element.style.transform = "translate(" + this.x + "px," + this.y + "px) ";
        }
    };
    return Ship;
}(GameObject));
//# sourceMappingURL=main.js.map