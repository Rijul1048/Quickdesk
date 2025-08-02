'use client';
import { use, useState } from 'react';
import { tickets } from '../../lib/data';
import StatusBadge from '../../components/StatusBadge';
import CommentSection from '../../components/CommentSection';

export default function TicketDetail({ params }) {
  const { id } = use(params);
  const ticket = tickets.find(t => t.id === Number(id));
  const [status, setStatus] = useState(ticket?.status || 'open');
  const [isUpdating, setIsUpdating] = useState(false);

  if (!ticket) {
    return (
      <div className="max-w-4xl mx-auto p-8 text-center bg-white rounded-xl shadow-sm border border-gray-200">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-xl font-medium text-gray-700 mb-2">Ticket Not Found</h3>
        <p className="text-gray-500 mb-6">The ticket you're looking for doesn't exist or may have been deleted</p>
        <a
          href="/tickets"
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition-colors"
        >
          Back to Tickets
        </a>
      </div>
    );
  }

  const handleStatusChange = async (newStatus) => {
    setIsUpdating(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    setStatus(newStatus);
    ticket.status = newStatus;
    ticket.updatedAt = new Date();
    setIsUpdating(false);
  };

  return (
    <div className="container mx-auto px-4 py-8 animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <a 
            href="/tickets" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to all tickets
          </a>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-gray-200">
          {/* Ticket Header */}
          <div className="p-6 md:p-8 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-white">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{ticket.subject}</h1>
              <StatusBadge status={status} large />
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                {ticket.category}
              </span>
              <div className="flex items-center text-sm text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Created: {new Date(ticket.createdAt).toLocaleString()}
              </div>
              {ticket.updatedAt && (
                <div className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Updated: {new Date(ticket.updatedAt).toLocaleString()}
                </div>
              )}
            </div>

            <div className="prose max-w-none bg-white p-4 rounded-lg border border-gray-200">
              <p className="text-gray-700">{ticket.description}</p>
            </div>
          </div>

          {/* Status Update Section */}
          <div className="p-6 md:p-8 border-b border-gray-200">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              Update Ticket Status
            </h2>
            <div className="flex flex-wrap gap-2">
              {['open', 'in-progress', 'resolved', 'closed'].map((s) => (
                <button
                  key={s}
                  onClick={() => handleStatusChange(s)}
                  disabled={isUpdating}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    status === s
                      ? 'bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-md'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  } ${isUpdating ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isUpdating && status === s ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Updating...
                    </span>
                  ) : (
                    s.charAt(0).toUpperCase() + s.slice(1).replace('-', ' ')
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Comments Section */}
          <div className="p-6 md:p-8">
            <CommentSection ticket={ticket} />
          </div>
        </div>
      </div>
    </div>
  );
}