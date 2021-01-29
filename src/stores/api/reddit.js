import { API_URL } from '../../constants/base'

export const getSubredditPosts = async (subreddit) => {
  const response = await fetch(`${API_URL}${subreddit}.json?limit=60`)
  const json = await response.json()

  return json.data.children.map((post) => post.data)
}

export const getSubreddits = async () => {
  const response = await fetch(`${API_URL}/subreddits.json?limit=10`)
  const json = await response.json()

  return json.data.children.map((subreddit) => subreddit.data)
}

export const getPostComments = async (permalink) => {
  const response = await fetch(`${API_URL}${permalink}.json`)
  const json = await response.json()

  return json[1].data.children.map((subreddit) => subreddit.data)
}
