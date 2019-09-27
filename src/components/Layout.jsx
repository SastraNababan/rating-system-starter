import React from 'react';
import Navigation from './Navigation'
import Footer from './Footer'
const Layout = (props) => (
  <div>
    <Navigation />
    {props.children}
    <Footer/>
  </div>
)

export default Layout;