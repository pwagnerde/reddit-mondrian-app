import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <span className="copyright">© 2021 Philipp Wagner, All Rights Reserved.</span>
      <span className="location">
        Designed in Frankfurt, Germany.{' '}
        <a
          href="https://github.com/pwagnerde/reddit-mondrian-app/issues"
          target="_blank"
          rel="noreferrer"
        >
          Issues?
        </a>
      </span>
    </footer>
  )
}

export default Footer
