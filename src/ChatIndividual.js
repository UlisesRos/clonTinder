import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar';
import './ChatIndividual.css'

function ChatIndividual() {

    const adminEnvio = e => {
        e.preventDefault();
        setMensajes([...mensajes, {mensajes:input}]);
        setInput("");
    }

    const [input, setInput] = useState('');
    const [mensajes, setMensajes] = useState([
        {
            nombre: 'Maria',
            imgPerfil: '',
            mensajes: 'hola!!'
        },
        {
            nombre: 'Maria',
            imgPerfil: '',
            mensajes: 'estas?'
        },
        {
            mensajes: 'Hola! aqui estoy!'
        }
    ]);

    return (
        <div className='chatIndividual'>
            <p className='chatIndividual__timestamp'>CONSEGUISTE UN MATCH EL 25/10/2024</p>
            {mensajes.map(mensaje => (

                mensaje.nombre ? (

                    <div className='chatIndividual__mensaje'>
                        <Avatar className='chatIndividual__avatar' 
                            alt={mensaje.nombre} 
                            src={mensaje.imgPerfil}
                        />
                        <p className='chatIndividual__mensajeTexto'>
                            {mensaje.mensajes}
                        </p>
                    </div>

                ) : (

                    <div className='chatIndividual__mensaje'>
                        <p className='chatIndividual__mensajePropio'>
                            {mensaje.mensajes}
                        </p>
                    </div>

                )
            ))}

            <form className='chatIndividual__input' >
                <input className='chatIndividual__input2' value={input} onChange={ e => setInput(e.target.value)} placeholder='Escribe un mensaje'/>
                <input onClick={adminEnvio } type='submit' value='Enviar' className='chatIndividual__inputsend'/>
            </form>
        </div>
        

    )
}

export default ChatIndividual