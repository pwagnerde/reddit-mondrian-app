import { useDispatch, useSelector } from 'react-redux';
import { selectSubreddits } from '../../stores/posts/subRedditSlice';
import './Subreddits.css';
import {
  setSelectedSubreddit,
  selectSelectedSubreddit,
} from '../../stores/posts/redditSlice';

const Subreddits = () => {
  const dispatch = useDispatch();
  const subreddits = useSelector(selectSubreddits);
  const selectedSubreddit = useSelector(selectSelectedSubreddit);

  return (
    <section className="subreddit-card">
      <h2>Navigation</h2>
      <ul className="subreddits-list">
        {subreddits.map((subreddit) => (
          <li
            key={subreddit.id}
            className={`${
              selectedSubreddit === subreddit.url && `selected-subreddit`
            }`}
          >
            <button
              type="button"
              onClick={() => dispatch(setSelectedSubreddit(subreddit.url))}
            >
              {subreddit.title} [{subreddit.url}]
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Subreddits;
