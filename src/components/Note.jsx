import React from 'react'
import Avatar from './Avatar'

const Note = (props) => {
  return (
    <div className='note'>
      <h1>{props.name}</h1>
      <Avatar imgUrl = {props.imgUrl}/>
      <p>{props.infl}</p>
    </div>
  )
}

export default Note
