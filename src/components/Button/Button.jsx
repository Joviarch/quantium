import React from 'react'
import './Button.css'

export default function Button(props) {
    if(props.type == 'full'){
        return (
            <button className={`btn btn-full ${props.classList}`} onClick={props.onClick}>
                {props.text}
            </button>
        )
    } else if(props.type == 'out'){
        return (
            <button className={`btn btn-out ${props.classList}`} onClick={props.onClick}>
                {props.text}
            </button>
        )
    }
}
