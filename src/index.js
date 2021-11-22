import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import Index from './router/index/index';
import reportWebVitals from './reportWebVitals';
import Register from './router/register/register';
import Login from './router/login/login';
import Profile from './router/profile/Profile';
import User from './router/u/user'
import Following from './router/following/following';
import Follower from './router/follower/follower';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" index element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/u/:uid" element={<User />} />
        <Route path="/following/:uid" element={<Following />} />
        <Route path="/follower/:uid" element={<Follower />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();