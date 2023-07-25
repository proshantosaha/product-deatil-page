import {} from '@/utils/mui/theme'
import React from 'react'
import theme from '../../utils/mui/theme'
import { Search } from '@mui/icons-material'
import { InputBase,Box,alpha } from '@mui/material'

const SearchFrom = () => {
  return (
   <>
   
   <Box sx={{
    position:'relative',
    borderRadius:(theme)=>theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white,0.15),
    '&.hover':{backgroundColor:alpha(theme.palette.common.white,0.25)},
    mr:2,
    ml:24
   }}>

    <Box
    sx={{
        p:theme.spacing(0,2),
        position:'absolute',
        height:'100%',
        pointerEvents:'none',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        
       }}
    
    >
        <Search/>

    </Box>

    <Box coponent ="from">
        <InputBase placeholder='search....'
          sx={{
            color:"inherit",
            '& .MuiInputBase-input':{
                p:theme.spacing(1,1,1,0),
                width:'120ch',
                pl:`calc(1em + ${theme.spacing(4)})`
            }
           }}
        
        />

    </Box>

   </Box>
   
   </>
  )
}

export default SearchFrom