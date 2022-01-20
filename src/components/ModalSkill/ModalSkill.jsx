import React from 'react'
import Button from '../Button/Button'
import './ModalSkill.css'

let json = require('../../data/techs.json')

function closeModal(){
    let modal = document.querySelector('#modal')
    modal.style.display = 'none'
}

export default function ModalSkill(props) {
    return (
        <div className='modal-cape' id='modal'>
            <div className='modal-container'>
                <span className='modal-title'>Skills</span>

                <div className='modal-content'>
                    <div className='modal-select-container'>
                        <label>Nova Skill: </label>

                        <input type="text" name="skills" list="skills" className='modal-select'/>
                        <datalist id="skills">

                        </datalist> 

                    </div>

                    <div className='modal-skills'>

                    </div>

                </div>

                <div className='modal-footer'>
                    <Button text='Cancelar' type='out' classList='mr-2' onClick='closeModal()' onClick={()=>{closeModal()}}/>
                    <Button text='Confirmar Mudanças' type='full'/>
                </div>  

            </div>
        </div>
    )
}
