import React from 'react'

const Avatar = (props) => {
    return(
        <div className='circle-img-outer'>
            <img className="circle-img-inner" src={props.imgUrl} alt="hero" />
        </div>
        
    )
}

export default Avatar