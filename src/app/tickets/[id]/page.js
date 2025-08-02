'use client';
import { use } from 'react';
// Correct path - only need to go up TWO levels from [id] folder
import { tickets } from '../../lib/data';
import StatusBadge from '../../components/StatusBadge';
import CommentSection from '../../components/CommentSection';

export default function TicketDetail({ params }) {
  // Properly unwrap the params promise
  const { id } = use(params);
  
  // Find the ticket with the unwrapped id
  const ticket = tickets.find(t => t.id === Number(id));
  const [status, setStatus] = useState(ticket?.status || 'open');

  if (!ticket) {
    return <div className="p-8 text-center">Ticket not found</div>;
  }

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    ticket.status = newStatus;
    ticket.updatedAt = new Date();
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-start mb-4">
          <h1 className="text-2xl font-bold text-gray-800">{ticket.subject}</h1>
          <StatusBadge status={status} />
        </div>

        <div className="flex gap-2 mb-6">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            {ticket.category}
          </span>
          <span className="text-sm text-gray-500">
            Created: {new Date(ticket.createdAt).toLocaleString()}
          </span>
        </div>

        <div className="prose max-w-none">
          <p className="text-gray-700">{ticket.description}</p>
        </div>
      </div>

      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold mb-4">Update Status</h2>
        <div className="flex gap-2">
          {['open', 'in-progress', 'resolved', 'closed'].map((s) => (
            <button
              key={s}
              onClick={() => handleStatusChange(s)}
              className={`px-3 py-1 rounded-md text-sm ${
                status === s
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6">
        <CommentSection ticket={ticket} />
      </div>
    </div>
  )
}