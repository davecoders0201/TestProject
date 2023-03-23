import React from 'react';
import Sidebar from './Sidebar';

class DrawerContent extends React.Component {
  render(){
    return (

      // This will Import the Sidebar file in that file the Drawer is There
      <Sidebar></Sidebar>
    );
  }
}

export default DrawerContent;
