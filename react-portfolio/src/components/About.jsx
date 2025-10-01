import Quote from "./Quote";

export default function About() {
    return (
        <section className="px-[53px] h-screen">
            <Quote />
            <h3 className="text-[#8F8686] text-2xl mb-3">//about</h3>
            <h2 className="font-bold text-4xl mb-4 mr-96">I love crafting interactive digital solutions that combine design and technology.</h2>
            <p className="font-light text-[20px] text-justify mr-150">Graduated in Multimedia at Telkom Universitywith a strong passion for web and app development, I initially wanted to pursue a career in game development, but due to certain limitations, I decided to focus on becoming a Web Developer first. With a deep interest in technology, I am committed to continuous learning until I master various areas of programming.</p>
        </section>
    );
}