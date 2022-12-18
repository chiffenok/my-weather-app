import React from 'react'
import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import TsunamiOutlinedIcon from '@mui/icons-material/TsunamiOutlined'

const Header = () => (
  <AppBar position='static'>
    <Container maxWidth='sm'>
      <Toolbar>
        <TsunamiOutlinedIcon fontSize='large' />
        <Typography
          variant='h4'
          component='div'
          sx={{ flexGrow: 1, textAlign: 'center', fontFamily: 'Pacifico' }}
        >
          My Weather App
        </Typography>
      </Toolbar>
    </Container>
  </AppBar>
)

export default Header
