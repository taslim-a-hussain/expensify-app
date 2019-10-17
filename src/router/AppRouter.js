import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../common-components/Header';
import ExpensifyDashboard from '../components/ExpensifyDashboard';
import AddExpense from '../components/AddExpense';
import Edit from '../components/Edit';
import Help from '../components/Help';
import NotFound from '../components/NotFound';


const AppRouter = () => ( 
    <BrowserRouter> {/** BroserRouter - (react-router-dom's component) */}
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpensifyDashboard} exact={true} />
                <Route path="/add-expense" component={AddExpense} />
                <Route path="/edit/:id" component={Edit} />
                <Route path="/help" component={Help} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;