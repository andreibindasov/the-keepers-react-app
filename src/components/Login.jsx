import React from 'react'
import Input from './util/Input'
import {useContext, useState} from 'react'
import {UserContext} from './App'

const Login = () => {
    const user = useContext(UserContext)

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    
    const now = new Date().toLocaleTimeString()

    const [timeState, setTimeState] = useState(now)

    const [title, setTitle] = useState('Provide your credentials to access the content:')

    const updateTime = () => {
        const newNow = new Date().toLocaleTimeString()
        setTimeState(newNow)
    }

    setInterval(updateTime, 1000)

    const handleInputChange = (e) => {
        const {name, value} = e.target
        
        if (name === "username") {
            const pref = 'Welcome, '
            setUsername(value)
            value !== '' ? setTitle(pref + value) : setTitle('Provide your credentials to access the content:')
         } else {
            setPassword(value) 
         }
    }

    const handleSubmit = ()=> {
        if (username.trim() !=='' && password.trim() !=='') { 
            user.setIsLoggedIn(true) 
        } 
    }

    return(
        <form className='form' onSubmit={handleSubmit}>
            <h3>{timeState}</h3>
            <h2>{title}</h2><br></br>
            <Input onChange={handleInputChange} type="text" placeholder="Username" name="username" value={username} />
            <Input onChange={handleInputChange} type="password" placeholder="Password" name="password" value={password} />
            <button type="submit">Login</button>
            <br />
            
        </form>
    )
}

export default Login