import React from 'react'
import './Infos.css'

export default function Infos() {
    return (
        <div className='infos-container'>
            
            <div className='info-group'>
                <span className='info-name'>Cargo</span>
                <span className='info-result'>Cientista de dados</span>
            </div>

            <div className='info-group'>
                <span className='info-name'>Squad</span>
                <span className='info-result'>Pesquisa</span>
            </div>

            <div className='info-group'>
                <span className='info-name'>MBTI</span>
                <span className='info-result'>INTJ</span>
            </div>

        </div>
    )
}
