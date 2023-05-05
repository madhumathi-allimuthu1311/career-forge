import React from 'react';
import TopBar from './Topbar';

const Layout = ({ children }) => {
  return (
    <div>
      <TopBar />
      <div class='min-h-screen bg-background'>
      {children}
      </div>
    </div>
  )
}
export default Layout;