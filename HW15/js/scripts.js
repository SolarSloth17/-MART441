import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111111); 

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(3, 3, 8); 

camera.layers.enable(0);
camera.layers.enable(1);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const iceCreamGroup = new THREE.Group();

const coneHeight = 4;
const coneGeo = new THREE.ConeGeometry(1, coneHeight, 32);
const coneMat = new THREE.MeshStandardMaterial({ color: 0xCB9D61, roughness: 0.8 });
const cone = new THREE.Mesh(coneGeo, coneMat);
cone.rotation.x = Math.PI; 
cone.position.y = -2; 
iceCreamGroup.add(cone); 

const sphereRadius = 0.89;
const sphereGeo = new THREE.SphereGeometry(sphereRadius, 32, 32);
const sphereMat = new THREE.MeshStandardMaterial({ color: 0x98FF98, roughness: 0.9 });
const sphere = new THREE.Mesh(sphereGeo, sphereMat);
sphere.position.y = 1; 
iceCreamGroup.add(sphere);

iceCreamGroup.position.x = 2;
scene.add(iceCreamGroup);

let myModel; 
const loader = new GLTFLoader();

loader.load('assets/IcecreamScooper.glb', (gltf) => {
    myModel = gltf.scene;
    const box = new THREE.Box3().setFromObject(myModel);
    const size = new THREE.Vector3();
    box.getSize(size);
    const maxDimension = Math.max(size.x, size.y, size.z);
    
    const scaleFactor = (1.4 * 3) / maxDimension;
    myModel.scale.set(-scaleFactor, scaleFactor, scaleFactor);
    myModel.position.set(5.5, -1.0, 0);
    myModel.rotation.z = -Math.PI / 5;  
    
    myModel.traverse((child) => {
        if (child.isMesh) {
            child.layers.set(1); 
            child.material = new THREE.MeshStandardMaterial({ 
                color: 0xAAAAAA, 
                metalness: 0.8, 
                roughness: 0.2,
                side: THREE.DoubleSide 
            });
        }
    });
    scene.add(myModel);
});

const ambientLight = new THREE.AmbientLight(0xffffff, 0.2); 
scene.add(ambientLight);

const iceCreamLight = new THREE.PointLight(0xffffff, 100);
iceCreamLight.position.set(2, 5, 5);
iceCreamLight.layers.set(0); 
scene.add(iceCreamLight);

const scooperLight = new THREE.PointLight(0xffffff, 500); 
scooperLight.position.set(5, 5, 5);
scooperLight.layers.set(1); 
scene.add(scooperLight);

let controls = new TrackballControls(camera, renderer.domElement);
controls.rotateSpeed = 1.0;
controls.zoomSpeed = 1.2;
controls.panSpeed = 0.8;
controls.target.set(3, 1, 0);

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    controls.handleResize();
});

const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();

    iceCreamGroup.rotation.y += 0.01;
    sphere.rotation.y += 0.05;

    scooperLight.color.setRGB(
        Math.sin(t) * 0.5 + 0.5, 
        0.5, 
        Math.cos(t) * 0.5 + 0.5
    );

    if (controls) {
        controls.update();
    }
    
    renderer.render(scene, camera);
}

animate();
