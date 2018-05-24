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
        document.addEventListener('keydown', function (event) {
            var keyName = event.key;
            if (keyName == 'a') {
                _this.ship.directionRight = false;
                _this.ship.directionLeft = true;
            }
            if (keyName == 'd') {
                _this.ship.directionLeft = false;
                _this.ship.directionRight = true;
            }
        });
        document.addEventListener('keyup', function (event) {
            var keyName = event.key;
            if (keyName == 'a') {
                _this.ship.directionLeft = false;
            }
            if (keyName == 'd') {
                _this.ship.directionRight = false;
            }
        });
    }
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
        this.ship.update();
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
        _this.shipSpeed = 10;
        _this.directionRight = false;
        _this.directionLeft = false;
        _this.sky = document.getElementById("sky");
        _this.sky.appendChild(_this.element);
        _this.behaviour = new Controllable(_this);
        return _this;
    }
    Ship.prototype.update = function () {
        if (this.directionRight) {
            if (this.x >= this.sky.clientWidth - this.width - 100) {
                this.directionRight = false;
            }
            else {
                this.x += this.shipSpeed;
                this.element.style.transform = "translateX(" + this.x + "px) scaleX(-1)";
            }
        }
        if (this.directionLeft) {
            if (this.x <= this.width) {
                this.directionLeft = false;
            }
            else {
                this.x -= this.shipSpeed;
                this.element.style.transform = "translateX(" + this.x + "px) scaleX(1)";
            }
        }
    };
    return Ship;
}(GameObject));
//# sourceMappingURL=main.js.map