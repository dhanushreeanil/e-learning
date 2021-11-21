import React, { useState, useEffect } from 'react'

import '../App.css'
import NavBar from './NavBar'

const App = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleAuth = () => {
      setIsLoggedIn(!isLoggedIn)
    }
  
    useEffect(()=>{
        if(localStorage.getItem('token')){
            handleAuth()
        }
    },[])

    return (
        <div className="container">
            <h1> REACH ACADEMY </h1>
            <NavBar handleAuth = { handleAuth } isLoggedIn = { isLoggedIn } />
        </div>
    )
}

export default App
