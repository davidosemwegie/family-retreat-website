import React, { Component } from 'react';
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

//compoent Imports
import Header from './components/Header'
import Hero from './components/Hero'
import InfoBox from './components/InfoBox'
import Waiver from './components/Waiver'
import Schedule from './components/Schedule'
import Faqs from './components/Faqs'
import Packing from './components/Packing'
import Gallery from './components/Gallery'

function App() {
  return (
    <Router>
      <div>
        {/* <Header /> */}
        <Hero />
        <InfoBox />
        <Schedule />
        <Packing />
        <Waiver />
        <Faqs />
        <Gallery />
      </div>
    </Router>
  );
}

export default App;
