import React, { useState, useEffect } from 'react'
import './Header.css'
import { useDispatch, useSelector } from 'react-redux'
import {
  setSearchTerm,
  selectSelectedSubreddit,
} from '../../stores/posts/redditSlice'

const Header = () => {
  const [searchTermLocal, setSearchTermLocal] = useState('')
  const searchTerm = useSelector((state) => state.reddit.searchTerm)
  const dispatch = useDispatch()

    const selectedSubreddit = useSelector(selectSelectedSubreddit)

  const onSearchTermChange = (e) => {
    setSearchTermLocal(e.target.value)
  }

  useEffect(() => {
    setSearchTermLocal(searchTerm)
  }, [searchTerm])

  const onSearchTermSubmit = (e) => {
    e.preventDefault()
    dispatch(setSearchTerm(searchTermLocal))
  }

  return (
    <header>
      <div className="logo">
        <img className="logo-icon" src="./logo.jpg" alt="logo" />
        <p>
          Reddit<span>Mondrian</span>
          {selectedSubreddit}
        </p>
      </div>
      <form className="search" onSubmit={onSearchTermSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={searchTermLocal}
          onChange={onSearchTermChange}
          aria-label="Search posts"
        />
        <button type="submit" onClick={onSearchTermSubmit} aria-label="Search">
          Go
        </button>
      </form>
    </header>
  )
}

export default Header
