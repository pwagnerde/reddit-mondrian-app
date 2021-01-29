import { configureStore, combineReducers } from '@reduxjs/toolkit'
import redditReducer from './posts/redditSlice'
import subRedditReducer from './posts/subRedditSlice'

export default configureStore({
  reducer: combineReducers({
    reddit: redditReducer,
    subreddits: subRedditReducer,
  }),
})
