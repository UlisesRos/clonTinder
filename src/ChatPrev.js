import React from 'react'
import './ChatPrev.css'
import Avatar from '@material-ui/core/Avatar'
import { Link, useHistory } from 'react-router-dom'

function ChatPrev( {nombre, mensaje, timesTamp, imgPerfil} ) {
    return (
        <Link to={`/chat/${nombre}`}>
            <div className='chatPrev'>
                <Avatar className='chatPrev__img' alt={nombre} src={imgPerfil} />
                <div className='chatPrev__info'>
                    <h2>{nombre}</h2>
                    <p>{mensaje}</p>
                </div>
                <p className='chatPrev__times'>{timesTamp}</p>
            </div>
        </Link>
    )
}

export default ChatPrev