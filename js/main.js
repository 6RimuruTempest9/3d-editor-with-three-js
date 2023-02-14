import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Load the OBJ model
var loader = new THREE.ObjectLoader();
loader.load( 'model.obj', function ( object ) {
    scene.add( object );
    object.position.y -= 60;
}, function ( xhr ) {
    console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
}, function ( error ) {
    console.log( 'An error happened' );
} );

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
};

animate();