import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Toolbar, Typography, Button, AppBar } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

import Auth from '../../utils/auth';

function Navbar() {
  return (
      <AppBar position='sticky'>
        <Toolbar>
          {Auth.loggedIn() ? (
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Classroom <SchoolIcon /></Link>
            </Typography>
          ) : (
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Classroom <SchoolIcon /></Link>
            </Typography>
          )}
          {Auth.loggedIn() ? (
            <Button onClick={Auth.logout} color='inherit'>Logout</Button>
          ) : (
            <Typography variant='h6'>
              <Link
                to='/login' style={{ textDecoration: 'none', color: 'white' }}
              >
                Login
              </Link>
              {' '}or{' '}
              <Link
                to='/signup' style={{ textDecoration: 'none', color: 'white' }}
              >
                Sign Up
              </Link>
            </Typography>
          )}
        </Toolbar>
      </AppBar>
  )
}

export default Navbar;
