var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import * as THREE from 'three';
export var Stl3dViewerComponent = (function () {
    /* DEPENDENCY INJECTION (CONSTRUCTOR) */
    function Stl3dViewerComponent() {
        /* USER INTERACTION PROPERTIES */
        this.isUserInteracting = true;
        this.cameraTarget = new THREE.Vector3();
    }
    Object.defineProperty(Stl3dViewerComponent.prototype, "canvas", {
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
    Stl3dViewerComponent.prototype.init = function () {
        this.camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 15);
        this.camera.position.set(3, 0.15, 3);
        this.cameraTarget = new THREE.Vector3(0, -0.25, 0);
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.Fog(0x72645b, 2, 15);
        var OrbitControls = require('three-orbit-controls')(THREE);
        this.controls = new OrbitControls(this.camera, this.renderer);
        this.controls.target.set(0, 0, 0);
        // Ground
        var plane = new THREE.Mesh(new THREE.PlaneBufferGeometry(40, 40), new THREE.MeshPhongMaterial({ color: 0x999999, specular: 0x101010 }));
        plane.rotation.x = -Math.PI / 2;
        plane.position.y = -1;
        this.scene.add(plane);
        var component = this;
        plane.receiveShadow = true;
        // ASCII file
        var STLLoader = require('three-stl-loader')(THREE);
        var loader = new STLLoader();
        var material = new THREE.MeshPhongMaterial({ color: 0xAAAAAA, specular: 0x111111, shininess: 200 });
        this.cad3d.forEach(function (item, index) {
            loader.load(item, function (geometry) {
                var mesh = new THREE.Mesh(geometry, material);
                mesh.position.set(1, -0.4 * (index + 1), 1);
                mesh.rotation.set(-Math.PI / 2, 0, 0);
                mesh.scale.set(0.01, 0.01, 0.01);
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                component.scene.add(mesh);
            });
        });
        // Binary files
        // Lights
        this.scene.add(new THREE.HemisphereLight(0x443333, 0x111122));
        this.addShadowedLight(1, 1, 1, 0xffffff, 1.35);
        this.addShadowedLight(0.5, 1, -1, 0xffaa00, 1);
        // renderer
        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
        this.renderer.setClearColor(this.scene.fog.color);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth * .6, window.innerHeight * .6);
        this.renderer.gammaInput = true;
        this.renderer.gammaOutput = true;
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.renderReverseSided = false;
        // stats
        (function r1() {
            if (component.closedD == false) {
                component.animationId = requestAnimationFrame(r1);
                component.render();
                component.controls.enableZoom = true;
            }
            else {
                component.controls.enableZoom = false;
                component.controls.enablePan = false;
            }
        }());
    };
    Stl3dViewerComponent.prototype.addShadowedLight = function (x, y, z, color, intensity) {
        var directionalLight = new THREE.DirectionalLight(color, intensity);
        directionalLight.position.set(x, y, z);
        this.scene.add(directionalLight);
        directionalLight.castShadow = true;
        var d = 1;
        //directionalLight.shadow.camera.left = -d;
        //directionalLight.shadow.camera.right = d;
        //directionalLight.shadow.camera.top = d;
        //directionalLight.shadow.camera.bottom = -d;
        //directionalLight.shadow.camera.near = 1;
        //directionalLight.shadow.camera.far = 4;
        directionalLight.shadow.mapSize.width = 100;
        directionalLight.shadow.mapSize.height = 100;
        directionalLight.shadow.bias = -0.005;
    };
    Stl3dViewerComponent.prototype.onWindowResize = function () {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth * .6, window.innerHeight * .6);
    };
    Stl3dViewerComponent.prototype.onWheel = function (event) {
        this.camera.fov += event.deltaY * 0.05;
        this.camera.updateProjectionMatrix();
    };
    Stl3dViewerComponent.prototype.dragStart = function () {
        this.isUserInteracting = true;
    };
    Stl3dViewerComponent.prototype.dragEnd = function () {
        this.isUserInteracting = false;
    };
    Stl3dViewerComponent.prototype.render = function () {
        var timer = Date.now() * 0.0005;
        if (this.isUserInteracting == false) {
            this.camera.position.x = Math.cos(timer) * 4;
            this.camera.position.z = Math.sin(timer) * 4;
        }
        this.camera.lookAt(this.cameraTarget);
        this.renderer.render(this.scene, this.camera);
    };
    /* LIFECYCLE */
    Stl3dViewerComponent.prototype.ngAfterViewInit = function () {
        this.init();
        //this.animate();
    };
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], Stl3dViewerComponent.prototype, "cad3d", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Boolean)
    ], Stl3dViewerComponent.prototype, "closedD", void 0);
    __decorate([
        ViewChild('canvas'), 
        __metadata('design:type', ElementRef)
    ], Stl3dViewerComponent.prototype, "canvasRef", void 0);
    Stl3dViewerComponent = __decorate([
        Component({
            selector: 'app-stl3d-viewer',
            templateUrl: './stl3d-viewer.component.html',
            styleUrls: ['./stl3d-viewer.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], Stl3dViewerComponent);
    return Stl3dViewerComponent;
}());
//# sourceMappingURL=/Users/afshawnlotfi/Documents/afshawndotorg/src/app/stl3d-viewer/stl3d-viewer.component.js.map