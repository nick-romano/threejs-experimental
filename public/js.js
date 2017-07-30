var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);



var materials = [
    new THREE.MeshBasicMaterial({ color: 0x00ff00 }),        // Left side
    new THREE.MeshBasicMaterial({ color: 0x0B5394 }),       // Right side
    new THREE.MeshBasicMaterial({ color: 0x62643D }),         // Top side
    new THREE.MeshBasicMaterial({ color: 0x077E24}),      // Bottom side
    new THREE.MeshBasicMaterial({ color: 0x2D3553 }),       // Front side
    new THREE.MeshBasicMaterial({ color: 0x7F16B1 })         // Back side
];
var geometry = new THREE.BoxGeometry(25,25,25);
var cube = new THREE.Mesh(geometry, materials);
scene.add(cube);




// var frame1 = new THREE.Mesh(
// 	new THREE.BoxGeometry(30,30,10)
// 	);
// scene.add(frame1)



camera.position.z = 55;

var controls = new THREE.TrackballControls(camera);

var animate = function() {
	controls.update();
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

animate();