function Terms() {
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

        {/* Terms Content */}
        <main className="container mx-auto px-4 sm:px-6 pt-12 sm:pt-24 pb-20">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-12 text-center">Terms of Use</h1>
            
            <div className="space-y-12">
              {/* General Terms Section */}
              <section className="bg-white/[0.02] backdrop-blur-3xl rounded-2xl border border-white/[0.05] p-8">
                <h2 className="text-2xl font-semibold mb-6 text-deeper-blue">General Terms</h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    By accessing and using the Deeper app, you accept and agree to be bound by the terms and provision of this agreement.
                  </p>
                  <p>
                    You agree to use the app only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else&apos;s use and enjoyment of the app.
                  </p>
                </div>
              </section>

              {/* License & Usage Section */}
              <section className="bg-white/[0.02] backdrop-blur-3xl rounded-2xl border border-white/[0.05] p-8">
                <h2 className="text-2xl font-semibold mb-6 text-deeper-blue">License & Usage</h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Deeper grants you a limited, non-exclusive, non-transferable, revocable license to use the app for your personal, non-commercial purposes.
                  </p>
                  <p>
                    You may not:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose</li>
                    <li>Attempt to decompile or reverse engineer any software contained in the app</li>
                    <li>Remove any copyright or other proprietary notations</li>
                    <li>Transfer the materials to another person or mirror the materials on any other server</li>
                  </ul>
                </div>
              </section>

              {/* Disclaimer Section */}
              <section className="bg-white/[0.02] backdrop-blur-3xl rounded-2xl border border-white/[0.05] p-8">
                <h2 className="text-2xl font-semibold mb-6 text-deeper-blue">Disclaimer</h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    The materials within the app are provided on an &apos;as is&apos; basis. Deeper makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                  </p>
                  <p>
                    Deeper does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials in the app or otherwise relating to such materials or on any sites linked to this app.
                  </p>
                </div>
              </section>

              {/* Updates & Changes Section */}
              <section className="bg-white/[0.02] backdrop-blur-3xl rounded-2xl border border-white/[0.05] p-8">
                <h2 className="text-2xl font-semibold mb-6 text-deeper-blue">Updates & Changes</h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Deeper may revise these terms of use at any time without notice. By using this app you are agreeing to be bound by the then current version of these terms of service.
                  </p>
                  <p>
                    We reserve the right to modify or discontinue, temporarily or permanently, the app or any features or portions thereof without prior notice.
                  </p>
                </div>
              </section>

              {/* Contact Section */}
              <section className="bg-white/[0.02] backdrop-blur-3xl rounded-2xl border border-white/[0.05] p-8">
                <h2 className="text-2xl font-semibold mb-6 text-deeper-blue">Contact Us</h2>
                <p className="text-gray-400">
                  If you have any questions about these Terms of Use, please contact us at:{' '}
                  <a 
                    href="mailto:martonadriansaas@gmail.com"
                    className="text-deeper-blue hover:text-blue-400 transition-colors"
                  >
                    martonadriansaas@gmail.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="container mx-auto px-4 sm:px-6 py-8 border-t border-white/[0.05]">
          <div className="flex justify-center">
            <div className="text-sm text-gray-500 font-light">
              © 2025 Deeper - Work with Depth
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Terms
