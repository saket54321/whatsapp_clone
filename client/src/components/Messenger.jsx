import React from 'react'
import { AppBar, Toolbar, styled, Box } from '@mui/material';
import LoginDialogbox from './account/LoginDialogbox';
const Header = styled(AppBar)`
    background-color: #00A884;
    height: 125px;
    box-shadow: none;
`;
const Component = styled(Box)`
    height: 100vh;
    background: #DCDCDC;
`;


function Messenger() {
  return (
    <Component>
    <Header>
        <Toolbar>

        </Toolbar>
    </Header>
    <LoginDialogbox/>
    </Component>
    
  )
}

export default Messenger