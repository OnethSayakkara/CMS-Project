import { useState } from "react"
import { CTASection } from "./customer/CTASection"
import { Facebook, Instagram, Linkedin, Youtube, Send } from "lucide-react"

export function Footer() {
  const [email, setEmail] = useState("")
  const handleSubscribe = e => {
    e.preventDefault()
    if (email) {
      alert("Thank you for subscribing!")
      setEmail("")
    }
  }
  return (
    <main className=" flex flex-col w-full bg-slate-50">


      <footer className="bg-blue-50 text-black py-12 border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Brand & Social */}
              <div className="col-span-1">
                <div className="flex items-center gap-3 mb-5">
                  <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => (window.location.href = "/")}
          >
            <img
              src="/logo2.png"
              alt="TrainHub Logo"
              className="w-16 h-16"
            />
            
          </div>
                  <span className="text-slate-900 font-bold text-xl">
                    CMS - Colombo Plan
                  </span>
                </div>
                <p className="text-sm mb-6">
                  Empowering professionals worldwide to become certified
                  trainers and create lasting community impact.
                </p>

                {/* Social Media Icons */}
                <div className="flex items-center gap-3">
                  <a
                    href="https://web.facebook.com/ColomboPlan/?_rdc=1&_rdr#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5 text-blue-600" />
                  </a>
                  <a
                    href="https://www.instagram.com/thecolomboplanorg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white  rounded-full flex items-center justify-center transition-all"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5 text-pink-500" />
                  </a>
                  <a
                    href="https://x.com/thecolomboplan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white  rounded-full flex items-center justify-center transition-colors"
                    aria-label="X (Twitter)"
                  >
                    <svg
                      className="w-5 h-5 text-black"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/thecolomboplan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-blue-600" />
                  </a>
                  <a
                    href="https://www.youtube.com/@thecolomboplan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-5 h-5 text-red-500" />
                  </a>
                </div>
              </div>

              {/* Certification */}
              <div className="md:ml-20">
                <h4 className="text-xl text-slate-700 font-medium mb-4">Certification</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="/curriculum/upc"
                      className="hover:text-slate-600 transition-colors"
                    >
                      Prevention (UPC)
                    </a>
                  </li>
                  <li>
                    <a
                      href="/curriculum/utc"
                      className="hover:text-slate-600 transition-colors"
                    >
                      Treatment (UTC)
                    </a>
                  </li>
                  <li>
                    <a
                      href="/curriculum/urc"
                      className="hover:text-slate-600 transition-colors"
                    >
                      Recovery (URC)
                    </a>
                  </li>
                </ul>
              </div>

              {/* Newsletter Subscription */}
              <div>
                <h4 className="text-slate-700 font-medium mb-4 text-xl">Subscribe Now</h4>
                <p className="text-sm mb-4">
                  Don't miss our future updates! Get Subscribed Today!
                </p>
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3  border border-blue-700 rounded-lg text-white placeholder-blue-400 focus:outline-none focus:border-blue-400 transition-colors text-sm"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-black pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
              <p>
                &copy; {new Date().getFullYear()} Universal Curricula. Powered
                by Colombo Plan.
              </p>
              <div className="flex items-center gap-6 mt-4 md:mt-0">
                <a
                  href="/privacy-policy"
                  className="hover:text-slate-600 transition-colors"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </footer>
    </main>
  )
}
