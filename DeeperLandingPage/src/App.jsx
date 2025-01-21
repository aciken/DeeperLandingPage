import appScreenshot from './assets/deeperScreen.png'
import appleBadge from './assets/appleLogo.png'
import googleBadge from './assets/GoogleLogo.png'
import { Link } from 'react-router-dom'

function App() {
  const scrollToDownload = () => {
    const downloadSection = document.getElementById('download-section');
    downloadSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-deeper-blue/[0.02] to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-deeper-blue/[0.02] rounded-full blur-3xl"></div>
      </div>

      <div className="relative">
        {/* Navigation */}
        <nav className="container mx-auto px-6 py-8 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-white text-2xl font-medium tracking-wider">
              DEEPER
            </h1>
          </div>
          <div className="flex items-center">
            <button 
              onClick={scrollToDownload}
              className="group relative px-8 py-3 rounded-full overflow-hidden transition-all duration-500 hover:scale-105 shadow-[0_0_20px_rgba(0,102,255,0.2)] hover:shadow-[0_0_30px_rgba(0,102,255,0.4)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-deeper-blue to-blue-500 opacity-40 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute -inset-[1px] bg-gradient-to-r from-deeper-blue to-blue-500 opacity-20 blur-sm group-hover:opacity-40 group-hover:blur-md transition-all duration-500"></div>
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-[1px] rounded-full bg-black/90 group-hover:bg-black/80 transition-colors duration-500"></div>
              <span className="relative font-medium text-white group-hover:text-white/95">
                Start focusing
              </span>
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="container mx-auto px-4 sm:px-6 pt-12 sm:pt-24 pb-20 sm:pb-40 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 leading-tight tracking-tight">
              Master deep work and{' '}
              <span className="text-deeper-blue">
                achieve flow state
              </span>
            </h1>
            
            <p className="text-gray-400 text-lg sm:text-xl mb-12 sm:mb-20 max-w-2xl mx-auto font-light px-4">
              Track your focus sessions, eliminate distractions, and build a sustainable deep work practice.
            </p>
            
            {/* Stats */}
            <div className="inline-flex flex-col sm:flex-row bg-white/[0.02] backdrop-blur-3xl rounded-2xl border border-white/[0.05] px-8 sm:px-12 py-6 sm:py-8 mb-16 sm:mb-24">
              <div className="flex flex-col sm:flex-row justify-center items-center divide-y sm:divide-y-0 sm:divide-x divide-white/[0.05]">
                <div className="text-center px-8 sm:px-12 py-4 sm:py-0">
                  <div className="text-deeper-blue text-3xl font-bold mb-2">4.5hr</div>
                  <div className="text-gray-400 text-sm font-light">Avg. daily focus</div>
                </div>
                <div className="text-center px-8 sm:px-12 py-4 sm:py-0">
                  <div className="text-deeper-blue text-3xl font-bold mb-2">87%</div>
                  <div className="text-gray-400 text-sm font-light">Productivity boost</div>
                </div>
              </div>
            </div>

            {/* App Screenshot */}
            <div className="relative max-w-xs sm:max-w-sm mx-auto mt-16 group px-4">
              <div className="absolute -inset-1 bg-gradient-to-r from-deeper-blue/30 to-deeper-blue/20 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-30 transition duration-500"></div>
              
              <img 
                src={appScreenshot} 
                alt="Deeper Focus Timer Interface" 
                className="relative w-full rounded-[2.5rem] shadow-2xl border border-white/[0.05] backdrop-blur-sm transform transition duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_0_50px_rgba(0,102,255,0.2)]"
              />
            </div>

            {/* Download Section */}
            <div id="download-section" className="mt-20 sm:mt-32 px-4">
              <h2 className="text-2xl font-medium mb-6">Ready to start focusing?</h2>
              <p className="text-gray-400 mb-12 max-w-md mx-auto font-light">
                Download Deeper now and begin your journey to better focus and productivity
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                {/* App Store Button */}
                <a 
                  href="#" 
                  className="group relative flex items-center space-x-4 px-6 py-3.5 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,102,255,0.3)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-deeper-blue to-blue-500 opacity-20 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute inset-[1px] bg-black/90 rounded-xl backdrop-blur-xl"></div>
                  <div className="absolute inset-0 border border-white/10 rounded-xl group-hover:border-white/20 transition-colors"></div>
                  
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-deeper-blue to-blue-500 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <img src={appleBadge} alt="" className="relative w-12 h-12 invert object-contain" />
                  </div>
                  <div className="relative text-left">
                    <div className="text-gray-400 text-xs font-light">Download on the</div>
                    <div className="text-white font-medium -mt-0.5 group-hover:text-deeper-blue transition-colors">App Store</div>
                  </div>
                </a>

                {/* Play Store Button */}
                <a 
                  href="#" 
                  className="group relative flex items-center space-x-4 px-6 py-3.5 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,102,255,0.3)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-deeper-blue to-blue-500 opacity-20 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute inset-[1px] bg-black/90 rounded-xl backdrop-blur-xl"></div>
                  <div className="absolute inset-0 border border-white/10 rounded-xl group-hover:border-white/20 transition-colors"></div>
                  
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-deeper-blue to-blue-500 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <img src={googleBadge} alt="" className="relative w-7 h-7 brightness-200 object-contain" />
                  </div>
                  <div className="relative text-left">
                    <div className="text-gray-400 text-xs font-light">GET IT ON</div>
                    <div className="text-white font-medium -mt-0.5 group-hover:text-deeper-blue transition-colors">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="container mx-auto px-4 sm:px-6 py-8 border-t border-white/[0.05]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500 order-2 md:order-1 font-light text-center md:text-left">
              © 2025 Deeper - Work with Depth
            </div>
            <div className="flex space-x-6 sm:space-x-8 text-sm text-gray-500 order-1 md:order-2 font-light">
              <Link to="/support" className="hover:text-white transition-colors">Support</Link>
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy & Terms</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
