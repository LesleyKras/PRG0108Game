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
var FastControllable = (function () {
    function FastControllable(s) {
        var _this = this;
        this.ship = s;
        this.ship.shipSpeed = 20;
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
            if (keyName == 'p') {
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
            if (keyName == 'p') {
                new DropNet(_this.ship);
            }
            if (keyName == 'l') {
                _this.ship.behaviour = new Controllable(_this.ship);
            }
        });
    }
    FastControllable.prototype.update = function () {
        if (this.ship.directionRight) {
            if (this.ship.x >= Game.getInstance().getSky().clientWidth - this.ship.width) {
                this.ship.directionRight = false;
            }
            else {
                this.ship.x += this.ship.shipSpeed;
                this.ship.element.style.transform = "translateX(" + this.ship.x + "px) scaleX(-1) rotate(1deg)";
            }
        }
        if (this.ship.directionLeft) {
            if (this.ship.x <= 0) {
                this.ship.directionLeft = false;
            }
            else {
                this.ship.x -= this.ship.shipSpeed;
                this.ship.element.style.transform = "translateX(" + this.ship.x + "px) scaleX(1) rotate(-1deg)";
            }
        }
    };
    return FastControllable;
}());
var Util = (function () {
    function Util() {
    }
    Util.checkCollision = function (a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    };
    return Util;
}());
var Controllable = (function () {
    function Controllable(s) {
        var _this = this;
        this.ship = s;
        this.ship.shipSpeed = 10;
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
            if (keyName == 'p') {
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
            if (keyName == 'p') {
                new DropNet(_this.ship);
            }
            if (keyName == 'l') {
                _this.ship.behaviour = new FastControllable(_this.ship);
            }
        });
    }
    Controllable.prototype.update = function () {
        if (this.ship.directionRight) {
            if (this.ship.x >= Game.getInstance().getSky().clientWidth - this.ship.width) {
                this.ship.directionRight = false;
            }
            else {
                this.ship.x += this.ship.shipSpeed;
                this.ship.element.style.transform = "translateX(" + this.ship.x + "px) scaleX(-1) rotate(1deg)";
            }
        }
        if (this.ship.directionLeft) {
            if (this.ship.x <= 0) {
                this.ship.directionLeft = false;
            }
            else {
                this.ship.x -= this.ship.shipSpeed;
                this.ship.element.style.transform = "translateX(" + this.ship.x + "px) scaleX(1) rotate(-1deg)";
            }
        }
    };
    return Controllable;
}());
var DropNet = (function () {
    function DropNet(s) {
        var _this = this;
        this.ship = s;
        document.addEventListener('keydown', function (event) {
            var keyName = event.key;
            if (keyName == 'p' && _this.ship.canShoot && _this.ship.getAnchors() > 0) {
                _this.ship.canShoot = false;
                _this.ship.setAnchors(-1);
                _this.fireNet(_this.ship);
                Game.getInstance().createNet(_this.ship.x + _this.ship.width / 2, _this.ship.y);
            }
        });
    }
    DropNet.prototype.fireNet = function (s) {
        setTimeout(function () {
            s.canShoot = true;
        }, 10);
    };
    return DropNet;
}());
var GameObject = (function () {
    function GameObject(name) {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.element = document.createElement(name);
    }
    GameObject.prototype.update = function () { };
    GameObject.prototype.getRectangle = function () {
        return this.element.getBoundingClientRect();
    };
    return GameObject;
}());
var Fish = (function (_super) {
    __extends(Fish, _super);
    function Fish() {
        var _this = _super.call(this, 'fish') || this;
        _this.fishSpeed = 5;
        _this.directionRight = true;
        _this.alive = true;
        _this.width = 40;
        _this.height = 40;
        _this.ocean = document.getElementById('ocean');
        _this.x = Math.floor(Math.random() * _this.ocean.clientWidth) + 1;
        _this.y = Math.floor(Math.random() * _this.ocean.clientHeight) + 1;
        _this.element.style.transform = "translate(" + _this.x + "px," + _this.y + "px)";
        var url = "url(../docs/images/fish" + (Math.floor(Math.random() * 3) + 1) + ".png)";
        _this.element.style.backgroundImage = url;
        _this.ocean.appendChild(_this.element);
        return _this;
    }
    Fish.prototype.update = function () {
        if (this.directionRight) {
            this.x += this.fishSpeed;
            if (this.x >= Game.getInstance().getOcean().clientWidth) {
                this.directionRight = false;
            }
            this.element.style.transform = "translate(" + this.x + "px," + this.y + "px)";
        }
        else {
            this.x -= this.fishSpeed;
            if (this.x <= 1) {
                this.directionRight = true;
            }
            this.element.style.transform = "translate(" + this.x + "px," + this.y + "px) scaleX(-1)";
        }
    };
    Fish.prototype.dead = function () {
        if (this.alive) {
            this.element.remove();
            Game.getInstance().setTime(5);
            Game.getInstance().setAmountOfFish(-1);
            this.alive = false;
        }
    };
    Fish.prototype.ReceiveNotification = function () {
        if (this.alive) {
            this.dead();
        }
    };
    return Fish;
}(GameObject));
var Interface = (function () {
    function Interface(s, g) {
        this.ship = s;
        this.game = g;
        this.div = document.getElementById('info') || document.createElement('info');
        this.ammo = document.getElementById('ammo') || document.createElement('ammo');
        this.ammo.innerHTML = s.getAnchors() + 'ammo';
        this.time = document.getElementById('time') || document.createElement('time');
        this.time.innerHTML = 'Time: ' + this.game.getTime();
        this.health = document.getElementById('health') || document.createElement('health');
        this.health.innerHTML = 'Health: ' + this.game.getHealth();
    }
    Interface.prototype.draw = function () {
        this.ammo.innerHTML = 'Ammo :' + this.ship.getAnchors();
        this.time.innerHTML = 'Time: ' + this.game.getTime();
    };
    return Interface;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        this.health = 3;
        this.time = 100;
        this.killAllFishButton = new KillAllFish();
        this.gameObjectsArray = new Array();
        this.ocean = document.getElementById("ocean");
        this.sky = document.getElementById("sky");
        var ship = new Ship();
        this.interface = new Interface(ship, this);
        this.gameObjectsArray.push(ship);
        this.amountOfFish = 5;
        this.maxFish = 10;
        for (var i = 0; i < this.amountOfFish; i++) {
            var fish = new Fish();
            this.killAllFishButton.RegisterObserver(fish);
            this.gameObjectsArray.push(fish);
        }
        setInterval(function () {
            _this.time -= 1;
        }, 1000);
        setInterval(function () {
            if (_this.amountOfFish < _this.maxFish) {
                var fish = new Fish();
                _this.amountOfFish += 1;
                _this.killAllFishButton.RegisterObserver(fish);
                _this.gameObjectsArray.push(fish);
            }
            else {
            }
        }, 5000);
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.getInstance = function () {
        return this._instance || (this._instance = new this());
    };
    Game.prototype.gameLoop = function () {
        var _this = this;
        if (this.time > 0) {
            this.interface.draw();
            this.gameObjectsArray.forEach(function (element) {
                element.update();
            });
            this.gameObjectsArray.forEach(function (elementNet) {
                if (elementNet instanceof Net) {
                    if (elementNet.y > Game.getInstance().getOcean().clientHeight) {
                        elementNet.element.remove();
                    }
                    _this.gameObjectsArray.forEach(function (elementFish) {
                        if (elementFish instanceof Fish) {
                            if (Util.checkCollision(elementNet.getRectangle(), elementFish.getRectangle())) {
                                elementFish.dead();
                                _this.killAllFishButton.RemoveObserver(elementFish);
                                elementNet.element.remove();
                            }
                            ;
                        }
                    });
                }
            });
            requestAnimationFrame(function () { return _this.gameLoop(); });
        }
    };
    Game.prototype.getOcean = function () {
        return this.ocean;
    };
    Game.prototype.setTime = function (n) {
        this.time += n;
    };
    Game.prototype.getTime = function () {
        return this.time;
    };
    Game.prototype.getHealth = function () {
        return this.health;
    };
    Game.prototype.setHealth = function (n) {
        this.health += n;
    };
    Game.prototype.getAmountOfFish = function () {
        return this.amountOfFish;
    };
    Game.prototype.setAmountOfFish = function (n) {
        this.amountOfFish += n;
    };
    Game.prototype.createNet = function (x, y) {
        var net = new Net(x, y);
        this.gameObjectsArray.push(net);
    };
    Game.prototype.getSky = function () {
        return this.sky;
    };
    return Game;
}());
window.addEventListener("load", function () {
    var g = Game.getInstance();
});
var KillAllFish = (function () {
    function KillAllFish() {
        var _this = this;
        this.observers = [];
        this.amountofClicks = 0;
        this.button = document.getElementById('killbutton') || document.createElement('killbutton');
        this.button.innerHTML = "Capture ALL";
        this.button.addEventListener("click", function (e) {
            _this.onClick(e);
        });
    }
    KillAllFish.prototype.onClick = function (e) {
        if (this.amountofClicks < 1) {
            for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
                var observer = _a[_i];
                observer.ReceiveNotification();
            }
            this.amountofClicks += 1;
            this.button.remove();
        }
    };
    KillAllFish.prototype.RegisterObserver = function (observer) {
        this.observers.push(observer);
    };
    KillAllFish.prototype.RemoveObserver = function (observer) {
        var index = this.observers.indexOf(observer);
        this.observers.splice(index, 1);
    };
    return KillAllFish;
}());
var Net = (function (_super) {
    __extends(Net, _super);
    function Net(x, y) {
        var _this = _super.call(this, 'net') || this;
        _this.dropSpeed = 3.5;
        _this.width = 10;
        _this.height = 10;
        _this.x = x;
        _this.y = y;
        _this.element.style.backgroundColor = "black";
        _this.element.style.width = _this.width + "px";
        _this.element.style.height = _this.height + "px";
        Game.getInstance().getOcean().appendChild(_this.element);
        console.log(_this.element);
        return _this;
    }
    Net.prototype.update = function () {
        this.y += this.dropSpeed;
        this.element.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    return Net;
}(GameObject));
var Ship = (function (_super) {
    __extends(Ship, _super);
    function Ship() {
        var _this = _super.call(this, 'ship') || this;
        _this.shipSpeed = 10;
        _this.canShoot = true;
        _this.anchors = 3;
        _this.directionRight = false;
        _this.directionLeft = false;
        _this.sky = document.getElementById("sky");
        _this.width = 100;
        _this.x = _this.sky.clientWidth - 100;
        _this.element.style.transform = "translateX(" + _this.x + "px) scaleX(1) rotate(-1deg)";
        _this.sky.appendChild(_this.element);
        _this.behaviour = new Controllable(_this);
        setInterval(function () {
            _this.setAnchors(1);
        }, 2000);
        return _this;
    }
    Ship.prototype.update = function () {
        this.behaviour.update();
    };
    Ship.prototype.getAnchors = function () {
        return this.anchors;
    };
    Ship.prototype.setAnchors = function (n) {
        this.anchors += n;
    };
    return Ship;
}(GameObject));
//# sourceMappingURL=main.js.map