import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";

export default function Experiment() {
    return (
        <section className="h-screen">
            <h3 className=" text-2xl mb-3">//experiment</h3>
            <h2 className="font-bold text-4xl mb-10">I’m trying using threeJS for use 3D Object.</h2>

            {/* Canvas untuk 3D */}
            <div className="w-full h-[500px] rounded-[20px] overflow-hidden">
                <Canvas
                    camera={{ position: [0, 0, 1] }}
                    style={{ background: "#3D79F2" }}
                    >
                    <ambientLight intensity={1} />
                    <directionalLight position={[5, 5, 5]} />
                    <OrbitControls />

                    {/* Model GLB */}
                    <Model rotation={[0, 0, 0]} />
                </Canvas>
            </div>
        </section>
    );
}