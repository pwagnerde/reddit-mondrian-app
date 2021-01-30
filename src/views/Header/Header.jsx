import React, { useState, useEffect } from 'react'
import './Header.css'
import Navigation from '../Navigation/Navigation'
import { useDispatch, useSelector } from 'react-redux'
import {
  setSearchTerm,
} from '../../stores/posts/redditSlice'

const Header = () => {
  const [searchTermLocal, setSearchTermLocal] = useState('')
  const searchTerm = useSelector((state) => state.reddit.searchTerm)
  const dispatch = useDispatch()

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
    <React.Fragment>
      <header>
        <div className="logo"> 
            <img className="logo-icon" src="./logo.jpg" alt="logo" />
          <div className="logo-title">
            Reddit<span>Mondrian</span>
          </div>
        </div>
        <Navigation />
        <form className="search" onSubmit={onSearchTermSubmit}>
          <input
            type="text"
            placeholder="Search"
            value={searchTermLocal}
            onChange={onSearchTermChange}
            aria-label="Search posts"
          />
          <button
            type="submit"
            onClick={onSearchTermSubmit}
            aria-label="Search"
          >
            <img src="./search.svg" alt="Go" />
          </button>
        </form>
      </header>
    </React.Fragment>
  )
}

export default Header
