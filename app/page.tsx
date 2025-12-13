import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <Image
                src="/Final Files-01.png"
                alt="Goldman and Co"
                width={180}
                height={50}
                className="h-12 w-auto"
                priority
              />
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm font-medium text-gray-600 hover:text-[#b8860b] transition-colors">About</a>
              <a href="#philosophy" className="text-sm font-medium text-gray-600 hover:text-[#b8860b] transition-colors">Philosophy</a>
              <a href="#services" className="text-sm font-medium text-gray-600 hover:text-[#b8860b] transition-colors">Services</a>
              <a href="#partners" className="text-sm font-medium text-gray-600 hover:text-[#b8860b] transition-colors">Partners</a>
              <a href="#contact" className="ml-4 px-6 py-2.5 bg-[#0f172a] text-white text-sm font-medium rounded hover:bg-[#1e293b] transition-colors">Contact Us</a>
            </div>
            <div className="md:hidden">
              <a href="#contact" className="px-4 py-2 bg-[#0f172a] text-white text-sm font-medium rounded hover:bg-[#1e293b] transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <p className="text-[#b8860b] font-medium tracking-[0.3em] uppercase text-sm mb-6">Goldman and Co</p>
          </div>
          <h1 className="animate-fade-in-up animation-delay-200 text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-8">
            Private Capital. Strategic Growth.<br /><span className="text-[#d4a944]">Long-Term Value.</span>
          </h1>
          <p className="animate-fade-in-up animation-delay-400 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Goldman and Co is a private capital and investment firm focused on acquiring, funding, and scaling high-performing middle-market businesses.
          </p>
          <div className="animate-fade-in-up animation-delay-600 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="px-8 py-4 bg-[#b8860b] text-white font-medium rounded hover:bg-[#d4a944] transition-all duration-300">Request a Confidential Review</a>
            <a href="#about" className="px-8 py-4 border border-white/30 text-white font-medium rounded hover:bg-white/10 transition-all duration-300">Learn More</a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
    </div>
  );
}
