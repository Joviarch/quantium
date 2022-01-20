import React from 'react'
import '../assets/pages.css'
import Avatar from '../components/Avatar/Avatar'
import Infos from '../components/Infos/Infos'
import ModalSkill from '../components/ModalSkill/ModalSkill'
import SkillsField from '../components/SkillsField/SkillsField'


export default function Perfil() {
    return (
        <div className='perfil-container'>
            <ModalSkill/>
            <Avatar />
            <Infos />
            <SkillsField type='techs'/>
            <SkillsField type='softs'/>
        </div>
    )
}
