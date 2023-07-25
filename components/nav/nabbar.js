import { AppBar, Container, Tabs,Tab } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'
Link


const Nabbar = () => {
    const [pageTab,setPageTab] = useState(0)
  return (
    <div>
        <AppBar position='sticky'>
            <Container>
                <Tabs
                variant='scrollable'
                scrollButtons="auto"
                textColor='primary'
                indicatorColor='secondary'
                value={pageTab}
                onChange={(e,newValue)=>setPageTab(newValue)}
                
                >
                  <Link href='/'><Tab label="Home" /></Link>  
                   <Link href='/products'><Tab label="Product"/></Link> 
                   <Link href='/Account'><Tab label="Account"/></Link> 
                   <Link href='/About'> <Tab label ="About"/></Link> 

                </Tabs>
            </Container>
        </AppBar>



    </div>
  )
}

export default Nabbar