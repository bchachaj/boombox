import * as THREE from 'three';

let scene, camera, renderer;
let geometry, material, mesh;

scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.z = 1000;

  geometry = new THREE.BoxGeometry( 200, 200, 200 );
  material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: false });

  mesh = new THREE.Mesh( geometry, material );

  scene.add(mesh);



renderer = new THREE.WebGLRenderer({canvas: document.getElementById('canvas')});

renderer.setSize( window.innerWidth, window.innerHeight );

// requestAnimationFrame( animate );
//
//     mesh.rotation.x += 0.01;
//     mesh.rotation.y += 0.02;
//
// renderer.render(scene, camera);


// function init() {
//   scene = new THREE.Scene();
//   camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000);
//   camera.position.z = 1000;
//
//   geometry = new THREE.BoxGeometry( 200, 200, 200 );
//   material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true });
//
//   mesh = new THREE.Mesh( geometry, material );
//
//   scene.add(mesh);
//
//   renderer = new THREE.WebGLRenderer();
//
//   renderer.setSize( window.innerWidth, window.innerHeight );
//
//   document.body.appendChild( renderer.domElement );
//
//
// }
//
//
function animate() {
    requestAnimationFrame( animate );

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;

    renderer.render(scene, camera );
}

animate();
