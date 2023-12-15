import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import Login from './Login'

import { useState, createContext } from 'react'

export const UserContext = createContext()


function App() {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false)

        
    return <div>
        <UserContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
            <Header />
            {isLoggedIn ? <Main /> : <Login />}
            <Footer />
        </UserContext.Provider>
    </div>
}

export default App