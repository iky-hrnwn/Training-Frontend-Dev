import { useGLTF } from "@react-three/drei";


export default function Model(props) {
    const { scene } = useGLTF("/tadpole.glb"); // taruh di public/model.glb
    return <primitive object={scene} scale={2} {...props} />;
}