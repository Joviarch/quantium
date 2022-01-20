import React from 'react'
import './Skills.css'
import { AiOutlinePlus } from 'react-icons/ai'

function teste(){
    let modal = document.querySelector('#modal')
    modal.style.display = 'block'
}

export default function Skills(props) {
    if(props.pos == 'last'){
        return (
            <div className='skillField-skills-last'>
                <span className='skillField-skills-title'>{props.name}</span>
                <div className='skills'>
    
                    <div className='skill' onClick={() => {teste()}}>
                        <div className='add-skill' onClick={() => {teste()}}>
                            <AiOutlinePlus/>
                        </div>
                    </div>
    
                </div>
            </div>
        )
    } else{
        return (
            <div className='skillField-skills'>
                <span className='skillField-skills-title'>{props.name}</span>
                <div className='skills'>
                    <div className='skill-teste'></div>
                    <div className='skill'>
                        <div className='add-skill' onClick={() => {teste()}}>
                            <AiOutlinePlus/>
                        </div>
                    </div>
    
                </div>
            </div>
        )
    }
}
