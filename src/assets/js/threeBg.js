import * as THREE from "three";
import images from "./images";
const container = document.querySelector(".three_bg");
const loader = new THREE.TextureLoader();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.1,
    1000

);
const renderer = new THREE.WebGL1Renderer({
    antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

window.addEventListener('resize', ()=>{
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

})


const geometry = new THREE.PlaneGeometry(5, 5, 15, 9);
const material = new THREE.MeshBasicMaterial({
     //color: 0xff0000

     map: loader.load(images.bg3),
     wireframe: true,
});

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);
camera.position.z = 5;



function animate(){
    requestAnimationFrame(animate);
    // mesh.rotation.x += 0.01;
    // mesh.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();


renderer.render(scene, camera);