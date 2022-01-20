import React from 'react'
import Skills from '../Skills/Skills'
import './SkillsField.css'

export default function SkillsField(props) {
    if(props.type == 'techs'){
        return (
            <div className='skillField-container' id='skillField-techs'>
                
                <span className='skillField-title'>Tecnologias</span>
    
                <div className='skills-fields'>
    
                    <Skills name='Experiente' pos='first'/>
                    <Skills name='Estudando' pos='second'/>
                    <Skills name='Quero aprender' pos='last'/>
    
                </div>
    
            </div>
        )
    } else if(props.type == 'softs'){
        return (
            <div className='skillField-container' id='skillField-lights'>
                
                <span className='skillField-title'>Light Skills</span>
    
                <div className='skills-fields'>
    
                    <Skills name='Graduação' pos='first'/>
                    <Skills name='Próprias' pos='second'/>
                    <Skills name='Empresariais' pos='last'/>
    
                </div>
    
            </div>
        )
    }
}
