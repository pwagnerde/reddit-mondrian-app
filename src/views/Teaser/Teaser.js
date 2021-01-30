import React from 'react'
import './Teaser.css'

const Teaser = (props) => {
  const { post, index } = props
  
  let gridColumn = index % 4
  let containerStyle = "post-grid-" + gridColumn

  return (
    <article key={post.id} className={containerStyle}>
      <section>
        <div className="post-container">
          <div className="post-header">
            <h3 className="post-title">{post.title}</h3>
            <span className="post-author">
              <a href={post.url} target="_blank" rel="noreferrer">
                by {post.author}
              </a>
            </span>
          </div>
          <img src={post.url} alt="" className="post-image" />
        </div>
      </section>
    </article>
  )
}

export default Teaser
