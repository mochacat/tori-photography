import React from 'react'

import { Link } from 'react-router'

import NavSection from './NavSection'

import './main.scss'

export default class App extends React.Component{
  
  render(){
    return (
      <div className="page-wrapper">
        <NavSection />
        <div className="content">
          { React.cloneElement(
              this.props.children,
              this.props
          )}
        </div>
      </div>
    )
  }
}
