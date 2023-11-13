import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Header from './components/header/Header';
import Section from './components/section1/Section';
import Section2 from './components/section2/Section2';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Service from './components/service/Service';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Section/>
    <Section2/>
    <Service/>
    <Contact />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
