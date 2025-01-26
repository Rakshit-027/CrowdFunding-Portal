import React, { useState } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() === "") return;

    const newCommentObj = {
      id: Date.now(),
      text: newComment,
      timestamp: new Date().toLocaleString(),
    };

    setComments([...comments, newCommentObj]);
    setNewComment("");
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Comments</h2>

      {/* Comment Input Form */}
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex flex-col md:flex-row">
          <textarea
            value={newComment}
            onChange={handleCommentChange}
            placeholder="Write a comment..."
            className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none mb-2 md:mb-0 md:mr-2"
            rows="3"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Post Comment
          </button>
        </div>
      </form>

      {/* Display Comments */}
      {comments.length === 0 ? (
        <p className="text-gray-500">No comments yet. Be the first to comment!</p>
      ) : (
        <div>
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-gray-100 p-4 rounded-lg mb-4 shadow-sm"
            >
              <p className="text-gray-800">{comment.text}</p>
              <div className="mt-2 text-sm text-gray-500">
                <span>{comment.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentSection;