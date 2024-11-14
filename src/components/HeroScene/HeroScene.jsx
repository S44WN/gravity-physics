import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Stars,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Model";
import "./HeroScene.css";
const HeroScene = () => {
  return (
    <>
      <div className="heroscene scenebg container">
        <div className="scenebg" />
        <h1 className="hscenetitle">
          Let us take you to the stars <br /> and unravel all the mysteries{" "}
        </h1>

        <Canvas dpr={[1.5, 2]} linear shadows>
          {/* <fog attach="fog" args={["#272730", 16, 30]} /> */}

          <ambientLight intensity={2.75} />

          <PerspectiveCamera makeDefault position={[0, 0, 16]} fov={75}>
            <pointLight intensity={3} />
            <spotLight
              castShadow
              intensity={4.25}
              angle={0.2}
              penumbra={1}
              // position={[-25, 20, -15]}
              shadow-mapSize={[1024, 1024]}
              shadow-bias={-0.0001}
            />
          </PerspectiveCamera>
          {/* <Suspense fallback={null}> */}
          <Model />
          {/* </Suspense> */}
          <OrbitControls
            autoRotate
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />

          <Stars radius={400} depth={10} count={3000} factor={10} />
        </Canvas>
        {/* <Canvas
          className="r3f"
          camera={{
            fov: 45,
            near: 0.1,
            far: 2000,
            position: [-3, 1.5, 4],
          }}
        >
          <OrbitControls
            autoRotate
            enablePan={false}
            enableZoom={false}
            enableDamping
            dampingFactor={0.5}
            rotateSpeed={1}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <PerspectiveCamera makeDefault position={[0, 0, 16]} fov={75}>
            <pointLight intensity={1} position={[-10, -25, -10]} />
            <spotLight
              castShadow
              intensity={2.25}
              angle={0.2}
              penumbra={1}
              position={[-25, 20, -15]}
              shadow-mapSize={[1024, 1024]}
              shadow-bias={-0.0001}
            />
          </PerspectiveCamera>
          <ambientLight intensity={1.75} />
          <pointLight intensity={1} position={[-10, -25, -10]} />
          <fog attach="fog" args={["#cc7b32", 16, 20]} />

          <Model />
        </Canvas> */}
      </div>
    </>
  );
};

export default HeroScene;
