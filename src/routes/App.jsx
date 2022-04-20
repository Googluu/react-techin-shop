import React from 'react';
import {  BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/login';
import RecoveryPassword from '../containers/RecoveryPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const App = () => {
    return (
      <BrowserRouter>
        <Layout>
            <Routes>
                <Route exact path="/" component={<Home />} />
                <Route exact path="/login"
                component={<Login />} />
                <Route exact path="/recovery-password"
                component={<RecoveryPassword />} />
                <Route path="/" component={<NotFound />} />
            </Routes>
        </Layout>
      </BrowserRouter>
    );
}

export default App;