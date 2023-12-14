import React from 'react'
import Note from './Note'

import heroes from '../heroes'

const CreateNote = (hero) => {
    return <Note
        key = {hero.id}
        name = {hero.name}
        imgUrl = {hero.imgUrl}
        infl = {hero.infl}
    />
}

const Main = () => {
    return (
        <div className='main'>
            {heroes.map(CreateNote)}
        </div>   
    )
  }

export default Main  

