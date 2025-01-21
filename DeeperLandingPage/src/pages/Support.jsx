function Support() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Effects */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-deeper-blue/[0.02] to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-deeper-blue/[0.02] rounded-full blur-3xl"></div>
      </div>

      <div className="relative">
        {/* Navigation */}
        <nav className="container mx-auto px-6 py-8">
          <a href="/" className="text-white text-2xl font-medium tracking-wider">
            DEEPER
          </a>
        </nav>

        {/* Support Content */}
        <main className="container mx-auto px-4 sm:px-6 pt-12 sm:pt-24 pb-20 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Support</h1>
            
            <div className="bg-white/[0.02] backdrop-blur-3xl rounded-2xl border border-white/[0.05] p-8 text-left">
              <p className="text-gray-400 text-lg mb-8">
                For any questions, issues, or feedback about Deeper, please contact our support team at:
              </p>
              
              <a 
                href="mailto:martonadriansaas@gmail.com"
                className="group relative inline-flex items-center space-x-4 px-6 py-3 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,102,255,0.3)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-deeper-blue to-blue-500 opacity-20 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-[1px] bg-black/90 rounded-xl backdrop-blur-xl"></div>
                <div className="absolute inset-0 border border-white/10 rounded-xl group-hover:border-white/20 transition-colors"></div>
                
                <span className="relative text-white font-medium">
                  martonadriansaas@gmail.com
                </span>
              </a>

              <p className="text-gray-400 mt-8">
                We typically respond within 24 hours during business days.
              </p>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="container mx-auto px-4 sm:px-6 py-8 border-t border-white/[0.05]">
          <div className="flex justify-center">
            <div className="text-sm text-gray-500 font-light">
              © 2024 Deeper - Focus & Deep Work Timer
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Support 