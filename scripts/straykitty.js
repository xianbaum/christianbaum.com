// @license magnet:?xt=urn:btih:d3d9a9a6595521f9666a5e94cc830dab83b65699&dn=expat.txt Expat / MIT license
var imgsrc = "data:image/gif;base64,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";
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StrayKitty = exports.KittyType = exports.KittyStates = exports.Direction = void 0;
var Direction;
(function (Direction) {
    Direction[Direction["Right"] = 0] = "Right";
    Direction[Direction["Left"] = 1] = "Left";
})(Direction = exports.Direction || (exports.Direction = {}));
var KittyStates;
(function (KittyStates) {
    KittyStates[KittyStates["Standing"] = 0] = "Standing";
    KittyStates[KittyStates["Walking"] = 1] = "Walking";
    KittyStates[KittyStates["Running"] = 2] = "Running";
    KittyStates[KittyStates["Yawning"] = 3] = "Yawning";
    KittyStates[KittyStates["Sleeping"] = 4] = "Sleeping";
    KittyStates[KittyStates["Laying"] = 5] = "Laying";
    KittyStates[KittyStates["Sitting"] = 6] = "Sitting";
    KittyStates[KittyStates["Licking"] = 7] = "Licking";
    KittyStates[KittyStates["Grabbed"] = 8] = "Grabbed";
    KittyStates[KittyStates["Falling"] = 9] = "Falling";
})(KittyStates = exports.KittyStates || (exports.KittyStates = {}));
var KittyType;
(function (KittyType) {
    KittyType[KittyType["Ginger"] = 0] = "Ginger";
    KittyType[KittyType["Elizabeth"] = 1] = "Elizabeth";
    KittyType[KittyType["JackJack"] = 2] = "JackJack";
})(KittyType = exports.KittyType || (exports.KittyType = {}));
var StrayKitty = /** @class */ (function () {
    function StrayKitty(type) {
        var _this = this;
        this.id = StrayKitty.incrementalId;
        this.canvas = document.createElement("canvas");
        this.canvas.id = 'kittycanvas' + this.id;
        this.canvas.style.position = "fixed";
        this.canvas.style.top = "0px";
        this.canvas.style.left = "0px";
        this.canvas.style.zIndex = "2147400000";
        this.canvas.width = 32;
        this.canvas.height = 32;
        this.canvas.addEventListener("mousedown", function (event) {
            _this.mouseXOffset = _this.x - event.clientX;
            _this.mouseYOffset = _this.y - event.clientY;
            _this.state = KittyStates.Grabbed;
        });
        document.body.appendChild(this.canvas);
        this.direction = StrayKitty.randomDir();
        this.type = typeof type === "number" ? type : Math.floor(Math.random() * 3);
        this.frame = //Setting all to 0
            this.animMax =
                this.y =
                    this.xVector =
                        this.yVector =
                            this.animTimer = 0;
        this.x = Math.floor(Math.random() * window.innerWidth - 32);
        this.state = KittyStates.Standing;
        this.canvas = document.getElementById("kittycanvas" + this.id);
    }
    Object.defineProperty(StrayKitty.prototype, "animTimerOverdue", {
        get: function () {
            return this.animTimer > this.animMax;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StrayKitty, "incrementalId", {
        get: function () {
            return StrayKitty._id++;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StrayKitty.prototype, "direction", {
        get: function () {
            return this._dir;
        },
        set: function (value) {
            if (this._dir !== value) {
                var context = this.canvas.getContext("2d");
                if (context === null) {
                    throw new ReferenceError("Context is null :c");
                }
                if (this._dir !== undefined ||
                    this._dir === undefined &&
                        value === Direction.Right) {
                    context.translate(32, 0);
                    context.scale(-1, 1);
                }
            }
            this._dir = value;
        },
        enumerable: false,
        configurable: true
    });
    StrayKitty.randomDir = function () {
        return Math.random() > 0.5 ? Direction.Left : Direction.Right;
    };
    StrayKitty.randomState = function () {
        return Math.floor(Math.random() * 8);
    };
    StrayKitty.prototype.updateState = function (fps) {
        //Universal for all states except grabbing
        if (!this.isBeingGrabbed &&
            this.y < window.innerHeight - 32) {
            this.state = KittyStates.Falling;
        }
        switch (this.state) {
            case KittyStates.Falling:
                this.updateFalling(fps);
                break;
            case KittyStates.Laying:
                this.updateLaying();
                break;
            case KittyStates.Licking:
                this.updateLicking();
                break;
            case KittyStates.Running:
                this.updateRunning();
                break;
            case KittyStates.Sitting:
                this.updateSitting();
                break;
            case KittyStates.Sleeping:
                this.updateSleeping();
                break;
            case KittyStates.Standing:
                this.updateStanding();
                break;
            case KittyStates.Walking:
                this.updateWalking();
                break;
            case KittyStates.Yawning:
                this.updateYawning();
                break;
        }
    };
    StrayKitty.prototype.updateSitting = function () {
        this.checkAndChangeState(function () {
            return Math.random() > 0.4 ? KittyStates.Yawning
                : KittyStates.Standing;
        });
    };
    StrayKitty.prototype.updateLaying = function () {
        this.checkAndChangeState(function () {
            return Math.random() > 0.33 ? (Math.random() > 0.5 ? KittyStates.Running
                : KittyStates.Sleeping)
                : KittyStates.Sitting;
        });
    };
    StrayKitty.prototype.updateLicking = function () {
        this.checkAndChangeState(function () {
            return Math.random() > 0.33 ? (Math.random() > 0.5 ? KittyStates.Laying
                : KittyStates.Sleeping)
                : KittyStates.Sitting;
        });
    };
    StrayKitty.prototype.updateYawning = function () {
        this.checkAndChangeState(function () {
            return Math.random() > 0.33 ? (Math.random() > 0.5 ? KittyStates.Walking
                : KittyStates.Licking)
                : KittyStates.Laying;
        });
    };
    StrayKitty.prototype.updateSleeping = function () {
        this.checkAndChangeState(function () {
            return Math.random() > 0.4 ?
                KittyStates.Sitting
                : KittyStates.Standing;
        });
    };
    StrayKitty.prototype.updateStanding = function () {
        this.checkAndChangeState(function () { return StrayKitty.randomState(); });
    };
    StrayKitty.prototype.updateWalking = function () {
        this.checkAndChangeState(function () { return StrayKitty.randomState(); });
        this.xVector = this.direction == Direction.Right ? 1 : -1;
    };
    StrayKitty.prototype.updateRunning = function () {
        this.checkAndChangeState(function () { return StrayKitty.randomState(); });
        this.xVector = this.direction == Direction.Right ? 2 : -2;
    };
    StrayKitty.prototype.updateFalling = function (fps) {
        if (this.y < window.innerHeight - 32) {
            this.yVector = this.yVector + 2 * (1 / fps);
        }
        else {
            if (Math.abs(this.yVector) < 0.1) {
                this.y = window.innerHeight - 32;
                this.state = KittyStates.Standing;
            }
            this.yVector *= -0.5;
        }
    };
    StrayKitty.prototype.checkAndChangeState = function (newStatecalculator) {
        if (this.animTimerOverdue) {
            this.animMax = Math.floor(Math.random() * 30) + 10;
            this.animTimer = 0;
            this.state = newStatecalculator();
            this.direction = StrayKitty.randomDir();
        }
    };
    StrayKitty.prototype.checkBounds = function () {
        if (this.x < 0) {
            this.x = 0;
            if (!this.isBeingGrabbed) {
                this.flip();
            }
            this.xVector = -this.xVector;
        }
        else if (this.x > window.innerWidth - 32) {
            this.x = window.innerWidth - 32;
            if (!this.isBeingGrabbed) {
                this.flip();
            }
            this.xVector = -this.xVector;
        }
        if (this.y < 0) {
            this.y = 0;
        }
        else if (this.y > window.innerHeight - 32) {
            this.y = window.innerHeight - 32;
        }
    };
    StrayKitty.prototype.move = function (fps) {
        if (this.state == KittyStates.Grabbed ||
            this.state == KittyStates.Standing ||
            this.state == KittyStates.Sleeping ||
            this.state == KittyStates.Licking ||
            this.state == KittyStates.Sitting ||
            this.state == KittyStates.Laying) {
            this.xVector = 0;
            this.yVector = 0;
        }
        this.x += this.xVector * (100 / fps);
        this.y += this.yVector * (100 / fps);
    };
    StrayKitty.prototype.draw = function () {
        this.canvas.style.top = "" + this.y + "px";
        this.canvas.style.left = "" + this.x + "px";
        var context = this.canvas.getContext("2d");
        if (context === null) {
            throw new ReferenceError("context is null!");
        }
        context.clearRect(0, 0, 32, 32);
        context.drawImage(StrayKitty.image, 32 *
            (StrayKitty.frames[this.state][Math.floor(this.animTimer / 2) % StrayKitty.frames[this.state].length]), 32 * this.type, 32, 32, 0, 0, 32, 32);
    };
    StrayKitty.prototype.update = function (fps) {
        this.animTimer += 10 / fps;
        this.updateState(fps);
        this.move(fps);
        this.checkBounds();
        this.draw();
    };
    StrayKitty.prototype.flip = function () {
        if (this.direction === Direction.Left) {
            this.direction = Direction.Right;
        }
        else {
            this.direction = Direction.Left;
        }
    };
    StrayKitty.prototype.updateGrabbed = function (e) {
        this.x = e.clientX + this.mouseXOffset;
        this.y = e.clientY + this.mouseYOffset;
    };
    StrayKitty.prototype.release = function () {
        this.state = KittyStates.Falling;
    };
    Object.defineProperty(StrayKitty.prototype, "isBeingGrabbed", {
        get: function () {
            return this.state === KittyStates.Grabbed;
        },
        enumerable: false,
        configurable: true
    });
    StrayKitty.setImageSrc = function (value) {
        StrayKitty.image.src = value;
    };
    StrayKitty.prototype.dispose = function () {
        document.body.removeChild(this.canvas);
    };
    StrayKitty._id = 0;
    StrayKitty.image = new Image();
    StrayKitty.frames = [
        [0],
        [0, 1],
        [3, 2],
        [4],
        [5, 6],
        [7],
        [8],
        [9, 10],
        [1, 2, 3],
        [2, 3] // Falling
    ];
    return StrayKitty;
}());
exports.StrayKitty = StrayKitty;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StrayKittyManager = void 0;
var StrayKitty_1 = require("./StrayKitty");
var StrayKittyManager = /** @class */ (function () {
    function StrayKittyManager(fps) {
        var _this = this;
        this.fps = fps;
        this.releaseGrabbedKitty = function () {
            if (_this.grabbedKitty !== undefined) {
                _this.grabbedKitty.release();
                _this.grabbedKitty = undefined;
            }
        };
        this.updateGrabbedKitty = function (event) {
            if (_this.grabbedKitty !== undefined) {
                _this.grabbedKitty.updateGrabbed(event);
            }
        };
        this.update = function () {
            _this.kitties.forEach(function (kitty) {
                kitty.update(_this.fps);
                if (kitty.isBeingGrabbed) {
                    if (_this.grabbedKitty !== undefined &&
                        _this.grabbedKitty !== kitty) {
                        _this.releaseGrabbedKitty();
                    }
                    _this.grabbedKitty = kitty;
                }
            });
        };
        document.addEventListener("mousemove", this.updateGrabbedKitty);
        document.addEventListener("blur", this.releaseGrabbedKitty);
        document.addEventListener("mouseup", this.releaseGrabbedKitty);
        this.kitties = [];
    }
    Object.defineProperty(StrayKittyManager.prototype, "kittyCount", {
        get: function () {
            return this.kitties.length;
        },
        enumerable: false,
        configurable: true
    });
    StrayKittyManager.prototype.addKitty = function (type) {
        return this.kitties.push(new StrayKitty_1.StrayKitty(type)) - 1;
    };
    StrayKittyManager.prototype.removeKitty = function (num) {
        if (typeof num === undefined) {
            var kitty = this.kitties.pop();
            if (kitty !== undefined) {
                kitty.dispose();
            }
        }
        else {
            var kitties = this.kitties.splice(num, 1);
            for (var _i = 0, kitties_1 = kitties; _i < kitties_1.length; _i++) {
                var k = kitties_1[_i];
                k.dispose();
            }
        }
    };
    StrayKittyManager.prototype.clearKitties = function () {
        for (var _i = 0, _a = this.kitties; _i < _a.length; _i++) {
            var k = _a[_i];
            k.dispose();
        }
        this.kitties = [];
    };
    StrayKittyManager.prototype.start = function () {
        if (this.intervalId === undefined) {
            this.intervalId = window.setInterval(this.update, 1000 / this.fps);
        }
    };
    StrayKittyManager.prototype.pause = function () {
        if (this.intervalId !== undefined) {
            clearInterval(this.intervalId);
            this.intervalId = undefined;
        }
    };
    StrayKittyManager.prototype.toggle = function () {
        if (this.intervalId !== undefined) {
            this.pause();
        }
        else {
            this.start();
        }
    };
    StrayKittyManager.prototype.setImageSrc = function (src) {
        StrayKitty_1.StrayKitty.setImageSrc(src);
    };
    return StrayKittyManager;
}());
exports.StrayKittyManager = StrayKittyManager;

},{"./StrayKitty":1}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StrayKittyManager_1 = require("./StrayKittyManager");
var StrayKitty_1 = require("./StrayKitty");
document.addEventListener('DOMContentLoaded', function () {
    StrayKitty_1.StrayKitty.setImageSrc(imgsrc);
    window.StrayKittyManager = StrayKittyManager_1.StrayKittyManager;
});

},{"./StrayKitty":1,"./StrayKittyManager":2}]},{},[3]);
(function() {
    var manager = null;
    if (document.readyState!='loading') {
        init();
    } else {
        document.addEventListener('DOMContentLoaded', init);
    }
    function init() {
        var el = document.getElementById("straykitty");
        if(el) {
            el.onclick = function(e) {
                e.preventDefault();
                if(manager == null) {
                    manager = new StrayKittyManager(60);
                }
                manager.start();
                manager.addKitty();
            }
        }
    }
})();
// @license-end
