import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export const Navigation = () => {
    return (
        <div>
           <Link to="/dashboard">
           <h1>My Application</h1>
           </Link> 
        </div>
    )
}

export const ConnectedNavigation = connect(state => state)(Navigation)
