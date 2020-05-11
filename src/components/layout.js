import React from 'react'
import Nav from './navigation'
import Footer from './footer'


const Layout = (props)=>{
    return (  
      <>
        <Nav/>
          {props.children}
        <Footer/>
      </>
    )
}


export default Layout;