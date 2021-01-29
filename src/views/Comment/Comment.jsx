import React from 'react';
import './Comment.css';
import moment from 'moment'

const Comment = (props) => {
  const { comment } = props;
  return (
    <div className="comment">
      <div className="comment-metadata">
        <p className="comment-author">{comment.author}</p>
        <p className="comment-created-time">
          {moment.unix(comment.created_utc).fromNow()}
        </p>
      </div>
      <div>{comment.body}</div>
    </div>
  )
};

export default Comment;
