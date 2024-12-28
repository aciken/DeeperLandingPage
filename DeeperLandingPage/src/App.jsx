import appScreenshot from './assets/deeperScreen.png'
import appleBadge from './assets/appleLogo.png'
import googleBadge from './assets/googleLogo.png'

function App() {
  const scrollToDownload = () => {
    const downloadSection = document.getElementById('download-section');
    downloadSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-deeper-dark text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-mesh"></div>
      <div className="absolute top-0 -left-1/2 w-[1000px] h-[1000px] bg-gradient-conic from-deeper-blue/30 via-deeper-blue/5 to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 -right-1/2 w-[1000px] h-[1000px] bg-gradient-conic from-deeper-blue/20 via-deeper-blue/5 to-transparent blur-3xl"></div>

      <div className="relative">
        {/* Navigation */}
        <nav className="container mx-auto px-6 py-8 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-white text-3xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-deeper-blue to-blue-400">D</span>eeper
            </h1>
          </div>
          <div className="flex items-center space-x-10">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a>
            <button 
              onClick={scrollToDownload}
              className="relative group bg-gradient-to-br from-deeper-blue to-blue-500 px-6 py-2.5 rounded-lg font-medium overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-br from-blue-600 to-deeper-blue opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative">Start working</span>
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="container mx-auto px-6 pt-24 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
              Master deep work and{' '}
              <span className="bg-gradient-to-r from-deeper-blue to-blue-400 bg-clip-text text-transparent">
                achieve flow state
              </span>
            </h1>
            
            <p className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto">
              Track your focus sessions, eliminate distractions, and build a sustainable deep work practice.
            </p>
            
            {/* Stats */}
            <div className="flex justify-center items-center space-x-12 mb-16">
              <div className="text-center">
                <div className="text-deeper-blue text-2xl font-bold mb-1">2.5hr</div>
                <div className="text-gray-400 text-sm">Avg. daily focus</div>
              </div>
              <div className="text-center">
                <div className="text-deeper-blue text-2xl font-bold mb-1">87%</div>
                <div className="text-gray-400 text-sm">Productivity boost</div>
              </div>
              <div className="text-center">
                <div className="text-deeper-blue text-2xl font-bold mb-1">50K+</div>
                <div className="text-gray-400 text-sm">Active users</div>
              </div>
            </div>

            {/* App Screenshot */}
            <div className="relative max-w-sm mx-auto mt-16">
              {/* Glow effects */}
              <div className="absolute -inset-1 bg-gradient-to-r from-deeper-blue to-blue-500 rounded-[3rem] blur opacity-30 group-hover:opacity-40 transition duration-1000"></div>
              <div className="absolute -inset-1 bg-gradient-radial from-deeper-blue/30 to-transparent blur-2xl"></div>
              
              <img 
                src={appScreenshot} 
                alt="Deeper Focus Timer Interface" 
                className="relative w-full rounded-[2.5rem] shadow-2xl border border-white/10 backdrop-blur-sm"
              />

              {/* Floating elements */}
              <div className="absolute -right-12 top-20 w-24 h-24 bg-gradient-to-br from-deeper-blue/20 to-transparent rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -left-16 bottom-20 w-32 h-32 bg-gradient-to-br from-deeper-blue/20 to-transparent rounded-full blur-xl animate-pulse delay-700"></div>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 text-left max-w-3xl mx-auto mb-20">
              <div>
                <h3 className="text-lg font-semibold mb-2">Focus Timer</h3>
                <p className="text-gray-400">Customizable Pomodoro timer to structure your deep work sessions</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Focus Insights</h3>
                <p className="text-gray-400">Track your daily focus time and discover your most productive periods</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Focus Streaks</h3>
                <p className="text-gray-400">Build consistency with daily streaks and focus-time milestones</p>
              </div>
            </div>
          </div>
        </main>

        {/* Footer Section */}
        <div className="bg-deeper-gray/50 mt-20 border-t border-white/5 backdrop-blur-sm">
          {/* Download Section */}
          <div id="download-section" className="container mx-auto px-6 py-16 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to start focusing?</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Download Deeper now and begin your journey to better focus and productivity
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              {/* App Store Button */}
              <a 
                href="#" 
                className="group flex items-center space-x-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl px-6 py-3 transition-all hover:scale-105 hover:-translate-y-1 backdrop-blur-sm"
              >
                <div className="flex-shrink-0">
                  <img src={appleBadge} alt="" className="w-8 h-8" />
                </div>
                <div className="text-left">
                  <div className="text-gray-400 text-xs">Download on the</div>
                  <div className="text-white font-semibold -mt-0.5">App Store</div>
                </div>
              </a>

              {/* Play Store Button */}
              <a 
                href="#" 
                className="group flex items-center space-x-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl px-6 py-3 transition-all hover:scale-105 hover:-translate-y-1 backdrop-blur-sm"
              >
                <div className="flex-shrink-0">
                  <img src={googleBadge} alt="" className="w-8 h-8" />
                </div>
                <div className="text-left">
                  <div className="text-gray-400 text-xs">GET IT ON</div>
                  <div className="text-white font-semibold -mt-0.5">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* Footer */}
          <footer className="container mx-auto px-6 py-8 border-t border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-sm text-gray-400 order-2 md:order-1">
                © 2024 Deeper - Focus & Deep Work Timer
              </div>
              <div className="flex space-x-8 text-sm text-gray-400 order-1 md:order-2">
                <a href="#" className="hover:text-white transition-colors">Support</a>
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
                <a href="#" className="hover:text-white transition-colors">Blog</a>
                <a href="#" className="hover:text-white transition-colors">Privacy & Terms</a>
              </div>
            </div>
          </footer>
        </div>

      </div>
    </div>
  )
}

export default App
