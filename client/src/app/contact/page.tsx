export default function Contact() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold tracking-tight">
            Contact <span className="text-gray-400">Sarthi</span>
          </h1>

          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Have questions, feedback, or need assistance with your booking?
            Our support team is available 24/7 to help you.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* LEFT SIDE */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg">
            <h2 className="text-3xl font-semibold mb-8">
              Get In Touch
            </h2>

            <div className="space-y-6">
              
              <div>
                <p className="text-sm text-gray-400 mb-1">
                  Email Support
                </p>
                <p className="text-lg font-medium">
                  support@sarthi.com
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-400 mb-1">
                  Customer Care
                </p>
                <p className="text-lg font-medium">
                  +91 98755xxxx
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-400 mb-1">
                  Office Address
                </p>
                <p className="text-lg font-medium">
                  Jaypee University India
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-400 mb-1">
                  Working Hours
                </p>
                <p className="text-lg font-medium">
                  Mon - Sun : 24/7 Support
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white text-black rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-semibold mb-8">
              Send Message
            </h2>

            <form className="space-y-6">
              
              <div>
                <label className="block mb-2 font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}