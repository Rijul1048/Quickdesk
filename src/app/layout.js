import './globals.css'

export const metadata = {
  title: 'QuickDesk - Modern Help Desk System',
  description: 'Next-gen help desk solution with AI-powered features',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
          <div className="container mx-auto px-4 py-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                    <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd" />
                  </svg>
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  <a href="/">QuickDesk</a>
                </h1>
              </div>
              <nav className="hidden md:flex space-x-6 items-center">
                <a href="/tickets" className="text-gray-600 hover:text-blue-600 transition-all font-medium group">
                  Tickets
                  <span className="block h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
                <a href="/create" className="text-gray-600 hover:text-blue-600 transition-all font-medium group">
                  Create Ticket
                  <span className="block h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
                <a href="/admin" className="text-gray-600 hover:text-blue-600 transition-all font-medium group">
                  Admin
                  <span className="block h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-md transition-all transform hover:scale-105 active:scale-95">
                  Get Help
                </button>
              </nav>
              <button className="md:hidden text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </div>
        </header>
        
        <main className="container mx-auto px-4 py-8 animate-fadeIn">
          {children}
        </main>
        
        <footer className="bg-white/80 backdrop-blur-md border-t border-gray-100 mt-12 py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">QuickDesk</h3>
                <p className="text-gray-600">Next-generation help desk solution powered by AI and modern technology.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Links</h3>
                <ul className="space-y-2">
                  <li><a href="/tickets" className="text-gray-600 hover:text-blue-600 transition">Tickets</a></li>
                  <li><a href="/create" className="text-gray-600 hover:text-blue-600 transition">Create Ticket</a></li>
                  <li><a href="/admin" className="text-gray-600 hover:text-blue-600 transition">Admin Panel</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-blue-600 transition">Documentation</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-600 transition">API</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-600 transition">Community</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li className="text-gray-600">support@quickdesk.app</li>
                  <li className="text-gray-600">+1 (555) 123-4567</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-100 mt-8 pt-6 text-center text-gray-500">
              <p>© {new Date().getFullYear()} QuickDesk Help Desk System - Hackathon Project</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}