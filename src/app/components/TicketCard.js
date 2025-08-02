import Link from 'next/link';
import StatusBadge from './StatusBadge';

export default function TicketCard({ ticket }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg text-gray-800">{ticket.subject}</h3>
          <StatusBadge status={ticket.status} />
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{ticket.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            {ticket.category}
          </span>
          <Link
            href={`/tickets/${ticket.id}`}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
}