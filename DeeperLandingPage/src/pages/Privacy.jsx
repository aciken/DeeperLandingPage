function Privacy() {
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

        {/* Privacy Content */}
        <main className="container mx-auto px-4 sm:px-6 pt-12 sm:pt-24 pb-20">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-12 text-center">Privacy & Terms</h1>
            
            <div className="space-y-12">
              {/* Privacy Policy Section */}
              <section className="bg-white/[0.02] backdrop-blur-3xl rounded-2xl border border-white/[0.05] p-8">
                <h2 className="text-2xl font-semibold mb-6 text-deeper-blue">Privacy Policy</h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Your privacy is important to us. It is Deeper's policy to respect your privacy regarding any information we may collect from you through our app.
                  </p>
                  <p>
                    We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.
                  </p>
                  <p>
                    We don't share any personally identifying information publicly or with third-parties, except when required to by law.
                  </p>
                  <p>
                    Our app may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
                  </p>
                </div>
              </section>

              {/* Terms of Service Section */}
              <section className="bg-white/[0.02] backdrop-blur-3xl rounded-2xl border border-white/[0.05] p-8">
                <h2 className="text-2xl font-semibold mb-6 text-deeper-blue">Terms of Service</h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    By downloading or using the app, these terms will automatically apply to you – you should make sure therefore that you read them carefully before using the app.
                  </p>
                  <p>
                    You're not allowed to copy or modify the app, any part of the app, or our trademarks in any way. You're not allowed to attempt to extract the source code of the app, and you also shouldn't try to translate the app into other languages or make derivative versions.
                  </p>
                  <p>
                    The app itself, and all the trademarks, copyright, database rights, and other intellectual property rights related to it, still belong to Deeper.
                  </p>
                  <p>
                    Deeper is committed to ensuring that the app is as useful and efficient as possible. For that reason, we reserve the right to make changes to the app or to charge for its services, at any time and for any reason.
                  </p>
                </div>
              </section>

              {/* Data Storage Section */}
              <section className="bg-white/[0.02] backdrop-blur-3xl rounded-2xl border border-white/[0.05] p-8">
                <h2 className="text-2xl font-semibold mb-6 text-deeper-blue">Data Storage</h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    The app does use third-party services that declare their Terms and Conditions. You should be aware that there are certain things that Deeper will not take responsibility for.
                  </p>
                  <p>
                    Your data is stored locally on your device and synced with our secure servers to provide backup and cross-device functionality. We implement industry-standard security measures to protect your information.
                  </p>
                </div>
              </section>

              {/* Contact Section */}
              <section className="bg-white/[0.02] backdrop-blur-3xl rounded-2xl border border-white/[0.05] p-8">
                <h2 className="text-2xl font-semibold mb-6 text-deeper-blue">Contact Us</h2>
                <p className="text-gray-400">
                  If you have any questions about these Terms or Privacy Policy, please contact us at:{' '}
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

export default Privacy 