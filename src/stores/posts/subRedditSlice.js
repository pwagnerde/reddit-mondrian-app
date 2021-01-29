import { createSlice } from '@reduxjs/toolkit'
import { REDDITS } from '../../constants/base'

const initialState = {
  subreddits: REDDITS,
  error: false,
  isLoading: false,
}

const subRedditSlice = createSlice({
  name: 'subreddits',
  initialState,
  reducers: {
    startGetSubreddits(state) {
      state.isLoading = true
      state.error = false
    },
    getSubredditsSuccess(state, action) {
      state.isLoading = false
      state.subreddits = action.payload
    },
    getSubredditsFailed(state) {
      state.isLoading = false
      state.error = true
    },
  },
})

export const {
  getSubredditsFailed,
  getSubredditsSuccess,
  startGetSubreddits,
} = subRedditSlice.actions

export default subRedditSlice.reducer

export const selectSubreddits = (state) => state.subreddits.subreddits
