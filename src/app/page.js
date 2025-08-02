import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 mb-6 animate-bounce">
          <span className="text-sm font-medium">v2.0 Now Available!</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Modern Help Desk
          </span>
          <br />
          <span>Made Simple</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Streamline your support process with our AI-powered help desk solution. 
          Faster responses, happier customers.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Link
            href="/tickets"
            className="relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-8 rounded-lg shadow-lg transition-all transform hover:scale-105 active:scale-95 group"
          >
            <span className="relative z-10">View Tickets</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
          <Link
            href="/create"
            className="relative overflow-hidden bg-white hover:bg-gray-50 text-blue-600 font-medium py-4 px-8 rounded-lg border border-blue-200 shadow-sm transition-all transform hover:scale-105 active:scale-95 group"
          >
            <span className="relative z-10">Create Ticket</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 transform hover:-translate-y-1 transition-transform">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
          <p className="text-gray-600">Get instant responses with our AI-powered ticket routing and suggestions.</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 transform hover:-translate-y-1 transition-transform">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Reliable</h3>
          <p className="text-gray-600">99.9% uptime guarantee with enterprise-grade infrastructure.</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 transform hover:-translate-y-1 transition-transform">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure</h3>
          <p className="text-gray-600">End-to-end encryption and compliance with industry security standards.</p>
        </div>
      </div>

      <div className="mt-24 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl p-8 md:p-12 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your support?</h2>
          <p className="text-lg text-blue-100 mb-8">Join thousands of teams who have revolutionized their customer support with QuickDesk.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/create"
              className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-4 px-8 rounded-lg shadow-lg transition-all transform hover:scale-105 active:scale-95"
            >
              Get Started for Free
            </Link>
            <Link
              href="/tickets"
              className="bg-transparent border-2 border-white hover:bg-white/10 font-medium py-4 px-8 rounded-lg transition-all transform hover:scale-105 active:scale-95"
            >
              See Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 