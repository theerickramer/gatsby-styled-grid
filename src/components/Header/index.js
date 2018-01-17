import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div
    style={{
      gridArea: 'header',
      background: 'rebeccapurple'
    }}
  >
    <div>
      <h1>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
        Header
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
