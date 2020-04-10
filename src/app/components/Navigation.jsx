/**
 * The navigation component is present on all non-login pages,
 * and contains a link back to the dashboard, and the user's name.
 */
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';

import { ConnectedUsernameDisplay } from './UsernameDisplay'
import * as mutations from '../store/mutations';

const Navigation = ({id, authenticated})=>(
    <div className="header">
        <Link to="/dashboard">
            <div className="jumbotron jumbotron-fluid">
            <h1 className="
            display-1 
            font-weight-bold 
            text-center">
                BasicAF Todo List
            </h1>
            <h3 className="font-weight-light text-center">By Oscar Luna</h3>
            </div>
        </Link>

        { authenticated ?
            <h4 className="display-4">
                Welcome, <ConnectedUsernameDisplay id={id}/>!
            </h4>
            : null
        }
    </div>
);

const mapStateToProps = ({session})=>({
    id:session.id,
    authenticated:session.authenticated == mutations.AUTHENTICATED
});

export const ConnectedNavigation = connect(mapStateToProps)(Navigation);
