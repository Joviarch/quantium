import React from 'react'
import './Badge.css'

export default function Badge(props) {
    if(props.style == 'green'){
        return (
            <div className='badge-container badge-green'>
                {props.text}
            </div>
        )
    } else if(props.style == 'yellow'){
        return (
            <div className='badge-container badge-yellow'>
                {props.text}
            </div>
        )
    }
}
