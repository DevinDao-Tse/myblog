import React from 'react'
import classes from './Navigation.module.css'

const Navigation = props => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation