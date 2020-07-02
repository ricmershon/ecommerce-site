import React from 'react';
import './home-styles.scss'
import Directory from '../../components/Directory/Directory.js'

const Home = ({ history }) => (
  <div className='homepage'>
    <Directory />
  </div>
)

export default Home;