// src/app/components/CommentSection.js
'use client';

export default function CommentSection({ ticket }) {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium mb-4">Comments</h3>
      {ticket.comments?.length > 0 ? (
        <div className="space-y-4">
          {ticket.comments.map(comment => (
            <div key={comment.id} className="border-l-2 border-gray-200 pl-4">
              <p>{comment.text}</p>
              <p className="text-sm text-gray-500 mt-1">
                {new Date(comment.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No comments yet</p>
      )}
    </div>
  );
}