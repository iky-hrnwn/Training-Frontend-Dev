export default function Form() {
    return (
      <section className="px-[53px] h-screen text-center bg-[#F2F2EB]">
        <div className="w-full max-w-3xl mx-auto py-20 px-6 ">
            {/* Heading */}
            <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
            GET IN TOUCH
            </h2>
            <p className="text-lg text-gray-600 mb-12">
            For collaborations or inquiries, send me a message.
            </p>
    
            {/* Form */}
            <form className="space-y-8">
            {/* Name */}
            <div className="relative">
                <input
                type="text"
                placeholder="YOUR NAME"
                className="w-full border-b border-gray-400 focus:border-black focus:outline-none py-2 text-gray-900 placeholder-gray-500"
                />
            </div>
    
            {/* Phone */}
            <div className="relative">
                <input
                type="tel"
                placeholder="PHONE"
                className="w-full border-b border-gray-400 focus:border-black focus:outline-none py-2 text-gray-900 placeholder-gray-500"
                />
            </div>
    
            {/* Email */}
            <div className="relative">
                <input
                type="email"
                placeholder="YOUR EMAIL"
                className="w-full border-b border-gray-400 focus:border-black focus:outline-none py-2 text-gray-900 placeholder-gray-500"
                />
            </div>
    
            {/* Message */}
            <div className="relative">
                <textarea
                rows="3"
                placeholder="HOW CAN I HELP YOU"
                className="w-full border-b border-gray-400 focus:border-black focus:outline-none py-2 text-gray-900 placeholder-gray-500 resize-none"
                ></textarea>
            </div>
    
            {/* Button */}
            <button
                type="submit"
                className="mt-8 px-10 py-3 text-black font-semibold transition"
            >
                LET’S CONNECT
            </button>
            </form>
        </div>
      </section>
    );
  }
  