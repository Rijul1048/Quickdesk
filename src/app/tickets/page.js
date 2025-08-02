'use client';
import { useState } from 'react';
import { tickets, categories } from '../lib/data';
import TicketCard from '../components/TicketCard';
import FilterBar from '../components/FilterBar'; // Make sure this import is correct

export default function TicketsPage() {
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const filteredTickets = tickets
    .filter(ticket => statusFilter === 'all' || ticket.status === statusFilter)
    .filter(ticket => categoryFilter === 'all' || ticket.category === categoryFilter)
    .sort((a, b) => {
      if (sortBy === 'newest') return new Date(b.createdAt) - new Date(a.createdAt);
      return new Date(a.createdAt) - new Date(b.createdAt);
    });

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">All Tickets</h1>
        <a
          href="/create"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-sm"
        >
          Create New Ticket
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

      <div className="grid gap-4 mt-6">
        {filteredTickets.length > 0 ? (
          filteredTickets.map(ticket => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
            <p className="text-gray-500">No tickets found matching your filters</p>
          </div>
        )}
      </div>
    </div>
  );
}