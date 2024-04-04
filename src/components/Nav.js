import React, { useEffect, useState } from 'react'
import './Nav.css'


function Nav() {

    const [show,setShow]=useState(false)

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>500){
                setShow(true)
            }else{
                setShow(false)
            }
        })

    },[])
    console.log(show);
  return (
    <div className={`nav ${show && 'nav_black'}`}>
        <img style={{width:'150px'}} src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Netflix-Logo.png" alt="logo" />
    </div>
  )
}

export default Nav