import React from 'react'
import "./home.css"
import Header from '../components/Header.jsx'
import Sidebar from '../components/Sidebar.jsx'
import Section from '../components/Section.jsx'
const Home = () => {
  return (
    <div className='contain'>
        <div className="left-part">
        <Sidebar className="sidebar"/>
        </div>
        <div className="right-part">
        <Header className="headerx" />
      <Section className="sectionx"/>
        </div>
    </div>
  )
}

export default Home