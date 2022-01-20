import React from 'react'
import Badge from '../Badge/Badge'
import './Avatar.css'

export default function Avatar() {
    return (
        <div className='avatar-container'>
            
            <div className='avatar-photo'>
                <div className='avatar-photo-set'>
                    
                </div>
            </div>

            <span className='avatar-name'>João Vitor</span>
            <span className='avatar-nickname'>Jovi</span>
            <span className='avatar-curse'>Matemática Aplicada e Computacional</span>

            <div className='line'></div>   

            <div className='avatar-row'>
                <Badge text='Ativo' style='green'/>
                <Badge text='Projeto' style='yellow'/>
            </div>

        </div>
    )
}
