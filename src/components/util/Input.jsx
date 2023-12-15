import React from 'react'

const Input = (props) => {
    return(
        <input className='input' 
               type={props.type} 
               placeholder={props.placeholder} 
               name={props.name} 
               value={props.value}
               onChange={props.onChange} />
        // <span className='underline'></span>
    )
}

export default Input