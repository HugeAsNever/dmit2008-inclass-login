 import React from 'react';
 import {IoIosNotifications} from "react-icons/io";
 import {AppBarStyles, AppBarItem, AppBarItems} from './styles';
 import {IconButton} from './../../ui/buttons';
 function AppBar  (props){
     return( 
       <AppBarStyles>
         <AppBarItems>
           <AppBarItem>Branding</AppBarItem>
           <AppBarItem><IconButton><IoIosNotifications color="tomato" size="1.75rem" /></IconButton></AppBarItem>
           
         </AppBarItems>
       </AppBarStyles>
     )
 }
 
 export default AppBar;