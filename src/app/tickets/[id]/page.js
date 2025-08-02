'use client';
import { use, useState } from 'react'; // Added useState import
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
      {/* Rest of your component code */}
    </div>
  );
}
