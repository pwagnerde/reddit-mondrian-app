import { useDispatch, useSelector } from 'react-redux'
import { selectSubreddits } from '../../stores/posts/subRedditSlice'
import './Navigation.css'
import { Link } from 'react-router-dom'
import {
  setSelectedSubreddit,
  selectSelectedSubreddit,
} from '../../stores/posts/redditSlice'

const Navigation = () => {
  const dispatch = useDispatch()
  const subreddits = useSelector(selectSubreddits)
  const selectedSubreddit = useSelector(selectSelectedSubreddit)

  return (
    <section className="subreddit-card">
      <ul className="subreddits-list">
        {subreddits.map((subreddit) => (
          <li
            key={subreddit.id}
            className={`${
              selectedSubreddit === subreddit.url && `selected-subreddit`
            }`}
          >
            <Link to={subreddit.url}>
              <button
                type="button"
                onClick={() => dispatch(setSelectedSubreddit(subreddit.url))}
              >
                {subreddit.url}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Navigation
