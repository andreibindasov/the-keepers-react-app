import React from 'react'
import Input from './util/Input'
import {useContext, useState} from 'react'
import {UserContext} from './App'

const Login = () => {
    const user = useContext(UserContext)
    
    const now = new Date().toLocaleTimeString()

    const [timeState, setTimeState] = useState(now)

    const updateTime = () => {
        const newNow = new Date().toLocaleTimeString()
        setTimeState(newNow)
    }

    setInterval(updateTime, 1000)

    return(
        <form className='form'>
            <h3>{timeState}</h3>
            <h2>Provide your credentials to access the content:</h2><br></br>
            <Input type="text" placeholder="Username" />
            <Input type="password" placeholder="Password" />
            <button type="submit"
                    onClick={()=>{
                        user.setIsLoggedIn(true)
                    }}
            >Login</button>
            <br />
            
        </form>
    )
}

export default Login