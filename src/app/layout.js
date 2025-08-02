import './globals.css'

export const metadata = {
  title: 'QuickDesk',
  description: 'Simple help desk solution',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-blue-600">
                <a href="/">QuickDesk</a>
              </h1>
              <nav className="flex space-x-6">
                <a href="/tickets" className="text-gray-600 hover:text-blue-600 transition">Tickets</a>
                <a href="/create" className="text-gray-600 hover:text-blue-600 transition">Create Ticket</a>
                <a href="/admin" className="text-gray-600 hover:text-blue-600 transition">Admin</a>
              </nav>
            </div>
          </div>
        </header>
        
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        
        <footer className="bg-white border-t mt-12 py-6">
          <div className="container mx-auto px-4 text-center text-gray-500">
            <p>QuickDesk Help Desk System - Hackathon Project</p>
          </div>
        </footer>
      </body>
    </html>
  )
}