// import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoggedInPage } from './modules/LoggedIn';
import Join from './modules/Auth/Join';
import Login from './modules/Auth/Login';
// import ProtectedRoute from './components/ProtectedRoute';
import Profile from './modules/LoggedIn/pages/member/Profile';
import { connect } from 'react-redux';
import DetailProduct from './modules/LoggedIn/pages/member/DetailProduct';
import Project from './modules/LoggedIn/pages/member/Project';

function App(props: any) {
  const { isAuthenticated } = props;
  return (
    <BrowserRouter>
      <Routes>
        {isAuthenticated ?
          <>
          <Route path="/" element={<Profile />} />
          <Route path="/product/:projectId" element={<DetailProduct />} />
          <Route path="/create-project" element={<Project />} />
          </> :
          <>
            <Route path="/" element={<LoggedInPage />} />
            <Route path="auth" >
              <Route index element={<Join />} />
              <Route path="login" element={<Login />} />
            </Route>
          </>
        }

      </Routes>
    </BrowserRouter>
  );
}

function mapStateToProps(state: any) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}

export default connect(mapStateToProps)(App);
