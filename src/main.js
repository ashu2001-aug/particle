import React from 'react'
import './styles.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useLoader } from 'react-three-fiber';
import Img from './assets/img2.jpeg'

function Main() {
    const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const imgTex = useLoader(THREE.TextureLoader, Img);

const img = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3, 3),
  new THREE.MeshBasicMaterial( { map: imgTex} )
);
    return (
        scene.add(img)
    )
}

export default Main
