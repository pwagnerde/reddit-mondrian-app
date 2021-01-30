import React from 'react'
import './Post.css'
import moment from 'moment'
import shortenNumber from '../../utils/shortenNumber'
import Comment from '../Comment/Comment'

const Post = (props) => {
  const { post, onToggleComments } = props

  const renderComments = () => {
    if (post.errorComments) {
      return (
        <div>
          <h3>Error loading comments</h3>
        </div>
      )
    }

    if (post.loadingComments) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      )
    }

    if (post.showingComments) {
      return (
        <div>
          {post.comments.map((comment) => (
            <Comment comment={comment} key={comment.id} />
          ))}
        </div>
      )
    }

    return null
  }

  return (
    <article key={post.id}>
      <section>
        <div className="post-wrapper">
          <div className="post-container">
            <h3 className="post-title">{post.title}</h3>

            <div className="post-image-container">
              <img src={post.url} alt="" className="post-image" />
              <p>{post.selftext}</p>
            </div>

            <div className="post-details">
              <span className="author-details">
                <span className="author-username">{post.author}</span>
              </span>
              <span>{moment.unix(post.created_utc).fromNow()}</span>
              <span className="post-comments-container">
                <button
                  type="button"
                  className={`icon-action-button ${
                    post.showingComments && 'showing-comments'
                  }`}
                  onClick={() => onToggleComments(post.permalink)}
                  aria-label="Show comments"
                >
                  Comments:
                </button>
                {shortenNumber(post.num_comments, 1)}
              </span>
            </div>

            {renderComments()}
          </div>
        </div>
      </section>
    </article>
  )
}

export default Post
