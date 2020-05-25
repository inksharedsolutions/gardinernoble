import React from 'react'
import Nav from './navigation'
import Footer from './footer'


const Layout = (props)=>{
    return (  
      <>
        <Nav pathExt={props.extPath} />
          {props.children}
        <Footer/>
      </>
    )
}


export default Layout;