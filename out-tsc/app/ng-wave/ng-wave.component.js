var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';
export var NgWaveComponent = (function () {
    /* DEPENDENCY INJECTION (CONSTRUCTOR) */
    function NgWaveComponent() {
        /* USER INTERACTION PROPERTIES */
        this.isUserInteracting = false;
        this.mouseX = 0;
        this.mouseY = -500;
        this.particles = new Array();
        this.count = 0;
        this.SEPARATION = 100;
        this.AMOUNTX = 50;
        this.AMOUNTY = 50;
    }
    Object.defineProperty(NgWaveComponent.prototype, "canvas", {
        /* PANORAMA PROPERTIES */
        /* RENDERING PROPERTIES */
        get: function () {
            return this.canvasRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    /* STAGING, ANIMATION, AND RENDERING */
    /**
     * Create the scene.
     */
    NgWaveComponent.prototype.init = function () {
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
        this.camera.position.z = 1000;
        this.scene = new THREE.Scene();
        this.particles = new Array();
        var geometry = new THREE.SphereGeometry(1, 5, 5);
        var material = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            transparent: false
        });
        var i = 0;
        for (var ix = 0; ix < this.AMOUNTX; ix++) {
            for (var iy = 0; iy < this.AMOUNTY; iy++) {
                this.particle = this.particles[i++] = new THREE.Mesh(geometry, material);
                this.particle.position.x = ix * this.SEPARATION - ((this.AMOUNTX * this.SEPARATION) / 2);
                this.particle.position.z = iy * this.SEPARATION - ((this.AMOUNTY * this.SEPARATION) / 2);
                this.scene.add(this.particle);
            }
        }
        console.log(window.innerHeight);
        var component = this;
        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight - 0.059 * window.innerHeight);
        (function r1() {
            requestAnimationFrame(r1);
            component.render();
        }());
        //
    };
    NgWaveComponent.prototype.onMouseMove = function (event) {
        var windowHalfX = window.innerWidth / 2;
        var windowHalfY = window.innerHeight / 2;
        this.mouseX = (event.clientX) / 2 - windowHalfX;
        this.mouseY = (-event.clientY) / 2 - windowHalfY;
    };
    NgWaveComponent.prototype.onResize = function () {
        if (window.innerWidth > 500) {
            var windowHalfX = window.innerWidth / 2;
            var windowHalfY = window.innerHeight / 2;
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight - 0.059 * window.innerHeight);
        }
    };
    NgWaveComponent.prototype.render = function () {
        this.camera.position.x += (this.mouseX - this.camera.position.x) * .05;
        this.camera.position.y += (-this.mouseY - this.camera.position.y) * .05;
        this.camera.lookAt(this.scene.position);
        var i = 0;
        for (var ix = 0; ix < this.AMOUNTX; ix++) {
            for (var iy = 0; iy < this.AMOUNTY; iy++) {
                this.particle = this.particles[i++];
                this.particle.position.y = (Math.sin((ix + this.count) * 0.3) * 50) +
                    (Math.sin((iy + this.count) * 0.5) * 50);
                this.particle.scale.x = this.particle.scale.y = (Math.sin((ix + this.count) * 0.3) + 1) * 4 +
                    (Math.sin((iy + this.count) * 0.5) + 1) * 4;
            }
        }
        this.renderer.render(this.scene, this.camera);
        this.count += 0.1;
    };
    /* LIFECYCLE */
    NgWaveComponent.prototype.ngAfterViewInit = function () {
        this.init();
        //this.animate();
    };
    __decorate([
        ViewChild('canvas'), 
        __metadata('design:type', ElementRef)
    ], NgWaveComponent.prototype, "canvasRef", void 0);
    NgWaveComponent = __decorate([
        Component({
            selector: 'app-ng-wave',
            templateUrl: './ng-wave.component.html',
            styleUrls: ['./ng-wave.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], NgWaveComponent);
    return NgWaveComponent;
}());
//# sourceMappingURL=/Users/afshawnlotfi/Documents/afshawndotorg/src/app/ng-wave/ng-wave.component.js.map