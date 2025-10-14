// Footer.jsx
export default function Footer() {
  return (
    <section className="h-screen bg-[#F2F2EB] text-[#262622] uppercase">
      <div className="container mx-auto px-3 py-2 pt-20">
        <div className="flex flex-col items-center">
          <div className="text-8xl font-bold text-center">HAVE A PROJECT?<br />LET'S BUILD IT</div>
          <p className="text-center font-bold text-2xl">I'm currently available for freelance<br />opportunities or full-time roles. Feel<br />free to say hello.</p>
          {/* Form */}
          <form className="w-full max-w-sm">
            <div className="flex items-center border-b border-teal-500 py-2">
              <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="YOUR NAME" aria-label="Full name" />
            </div>
            <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
