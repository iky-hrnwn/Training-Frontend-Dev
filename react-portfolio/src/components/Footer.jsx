// Footer.jsx
export default function Footer() {
  return (
    <section className="bg-[#F2F2EB] py-12 px-[53px]">
      <div className="flex flex-col font-light">
        {/* Social links */}
        <div className="flex justify-between font-normal">
          <h2><a href="#">LinkedIn</a></h2>
          <h2><a href="#">Instagram</a></h2>
          <h2><a href="#">Github</a></h2>
        </div>

        {/* Title */}
        <div className="flex flex-col text-center items-center">
          <h1 className="text-[#262622] font-bold text-[150px]">HERNAWAN.IKY</h1>
          <h2 className="text-[#262622]">
            ©2025 All Rights Reserved. Dicki Hernawan
          </h2>
        </div>
      </div>
    </section>
  );
}
