import React from 'react';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const App = () => {
    return (
      <Router>
        <Layout>
            <Routes>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/recovery-password" component={RecoveryPassword} />
                <Route path="*" component={NotFound} />
            </Routes>
        </Layout>
      </Router>
    );
}

export default App;
