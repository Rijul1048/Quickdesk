'use client';
import { useState } from 'react';
import { tickets, categories } from '../lib/data';
import TicketCard from '../components/TicketCard';
import FilterBar from '../components/FilterBar';

export default function TicketsPage() {
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTickets = tickets
    .filter(ticket => statusFilter === 'all' || ticket.status === statusFilter)
    .filter(ticket => categoryFilter === 'all' || ticket.category === categoryFilter)
    .filter(ticket => 
      ticket.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'newest') return new Date(b.createdAt) - new Date(a.createdAt);
      return new Date(a.createdAt) - new Date(b.createdAt);
    });

  return (
    <div className="container mx-auto px-4 py-8 animate-fadeIn">
      <div className="mb-8 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl p-6 md:p-8 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Support Tickets</h1>
          <p className="text-blue-100">Manage and track all your support requests in one place</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search tickets..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <a
            href="/create"
            className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white px-6 py-3 rounded-lg shadow-md transition-all transform hover:scale-105 active:scale-95 w-full md:w-auto text-center font-medium flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            New Ticket
          </a>
        </div>

        <FilterBar
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          sortBy={sortBy}
          setSortBy={setSortBy}
          categories={categories}
        />

        <div className="mt-6 space-y-4">
          {filteredTickets.length > 0 ? (
            filteredTickets.map(ticket => (
              <TicketCard 
                key={ticket.id} 
                ticket={ticket} 
                className="transform hover:-translate-y-1 transition-transform duration-200"
              />
            ))
          ) : (
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-gray-200 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-lg font-medium text-gray-700 mb-1">No tickets found</h3>
              <p className="text-gray-500 mb-4">Try adjusting your filters or search query</p>
              <a
                href="/create"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                Create a new ticket
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          )}
        </div>

        {filteredTickets.length > 0 && (
          <div className="mt-8 flex justify-between items-center text-sm text-gray-500">
            <span>Showing {filteredTickets.length} of {tickets.length} tickets</span>
            <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
              Load More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}