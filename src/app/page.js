import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto text-center py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to QuickDesk</h1>
      <p className="text-xl text-gray-600 mb-10">
        A simple, efficient help desk solution for your organization
      </p>
      <div className="flex justify-center gap-6">
        <Link
          href="/tickets"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-md transition"
        >
          View Tickets
        </Link>
        <Link
          href="/create"
          className="bg-white hover:bg-gray-50 text-blue-600 font-medium py-3 px-6 rounded-lg border border-blue-600 shadow-sm transition"
        >
          Create Ticket
        </Link>
      </div>
    </div>
  )
}