import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import TsunamiOutlinedIcon from '@mui/icons-material/TsunamiOutlined'

const Header = () => (
  <AppBar position='static'>
    <Toolbar sx={{ width: 500, m: '0 auto' }}>
      <TsunamiOutlinedIcon fontSize='large' />
      <Typography
        variant='h4'
        component='div'
        sx={{ flexGrow: 1, textAlign: 'center', fontFamily: 'Pacifico' }}
      >
        My Weather App
      </Typography>
    </Toolbar>
  </AppBar>
)

export default Header
