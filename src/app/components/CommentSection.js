'use client';
import { useState } from 'react';

export default function CommentSection({ ticket }) {
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    
    ticket.comments.push({
      id: Date.now(),
      text: newComment,
      author: "User",
      createdAt: new Date()
    });
    ticket.updatedAt = new Date();
    setNewComment('');
  };

  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-4">Comments ({ticket.comments.length})</h3>
      
      {ticket.comments.length > 0 ? (
        <div className="space-y-4 mb-6">
          {ticket.comments.map(comment => (
            <div key={comment.id} className="border-l-2 border-gray-300 pl-4 py-2">
              <p className="text-gray-800">{comment.text}</p>
              <div className="flex justify-between items-center mt-1">
                <p className="text-xs text-gray-500">
                  {comment.author}
                </p>
                <p className="text-xs text-gray-500">
                  {new Date(comment.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 mb-6">No comments yet</p>
      )}

      <form onSubmit={handleSubmit} className="mt-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          rows={3}
          placeholder="Add a comment..."
          required
        />
        <button
          type="submit"
          className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Post Comment
        </button>
      </form>
    </div>
  );
}