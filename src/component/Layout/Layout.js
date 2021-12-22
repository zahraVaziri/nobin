import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";


import Head from "../Pages/Head/Head";

import Loading from "../Pages/loading/Loading";

import { useLocation } from "react-router-dom";


const Layout =(props) => {

      const [loading,setLoading] =useState(true)

  const [show,setShow]= useState(true)
  const [showSingle,setShowSingle]= useState(true)
  const location = useLocation()

  useEffect( ()=> {
    setLoading(true)
  },[props.children])


  useEffect(() => {
  if (location.pathname == "/") {
    setLoading(false) 
    setShow( false)
  } else {
    setShow(true)
    setLoading(false) 
  
  }
})

useEffect(() => {
  if (location.pathname == "/detail/:id") {
    setLoading(false) 
    setShowSingle(true)
  } else {
    setShowSingle(false)
    setLoading(false) 
  
  }
})
  return (
    <div >
        
     
      {
         showSingle ? <Head /> : ''
      }

      {
        
        loading ? ( show ? <Loading/>  : <div> <Head/> <Loading/> </div>) : props.children
      }
      

      <Footer/>
    
    </div>
  );
}

export default Layout;
