import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <div>
        <h1>Expensify</h1>
        <ul className="nav">
            <li><NavLink className="nav-link" activeClassName="is-active" exact={true} to="/">Home</NavLink></li>
            <li><NavLink className="nav-link" activeClassName="is-active" to="/add-expense">Add Expense</NavLink></li>
            <li><NavLink className="nav-link" activeClassName="is-active" to="/help">Help</NavLink></li>
        </ul>
    </div>
);

export default Header;