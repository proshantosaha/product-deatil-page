import React from 'react'
import { Menu, Search } from '@mui/icons-material'
import {AppBar,Toolbar,IconButton, Typography, Box} from '@mui/material' 
import Link from '../../utils/mui/Link'
import SearchFrom from '../search/SearchFrom'
import CartIcon from '../cart/CartIcon'
import Account from '../account/Account'

const Nav = () => {
  return (
    <>
     <AppBar>
        <Toolbar position="sticky">
          <IconButton size='large' edge='start' color='inherit' sx={{mr:2}}>
            <Menu/>
          </IconButton>
          <Link href="/" color="inherit" sx={{textDecoration:'none'}}>
            <Typography variant='h6' component="h1" noWrap>
                Ps-Eco
            </Typography>
          </Link>

          <Box sx={{display:{xs:'none',sm:'block'}}}>
                <SearchFrom/>
            
          </Box>

          <Box sx={{flexGrow:1}}/>

          <IconButton sx={{display:{xs:'inherit',sm:'none'},color:'inherit'}}>
            <Search/>
          </IconButton>

          <CartIcon/>
          <Account/>

        </Toolbar>
      </AppBar>
    
    </>
  )
}

export default Nav