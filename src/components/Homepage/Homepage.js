import React from 'react';
import './homepage-styles.scss'
import Directory from '../Directory/Directory.js'

const Homepage = ({ history }) => (
  <div className='homepage'>
    <Directory />
  </div>
)

export default Homepage;