import React from "react";
import ChatPrev from "./ChatPrev"

function ListadoChats() {

    return (
        <div className="listadoChats">
            <ChatPrev
                nombre='Maria'
                mensaje='hola como estas?'
                timesTamp='hace 40seg'
                imgPerfil='https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg'
            />
            <ChatPrev
                nombre='Franco'
                mensaje='hola como estas?'
                timesTamp='hace 1min'
                imgPerfil='https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg'
            />
            <ChatPrev
                nombre='Lucas'
                mensaje='hola como estas?'
                timesTamp='hace 10min'
                imgPerfil='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOYJseEJFTWycDwvqI6bpYnBlz8WnmBl1EuQ&s'
            />
            <ChatPrev
                nombre='Carla'
                mensaje='hola como estas?'
                timesTamp='hace 2horas'
                imgPerfil='https://media.istockphoto.com/id/1416048929/es/foto/mujer-trabajando-en-una-computadora-port%C3%A1til-en-l%C3%ADnea-revisando-correos-electr%C3%B3nicos-y.jpg?s=612x612&w=0&k=20&c=wlB4o2PW-oS2UFnFIaloxmDO25t4rCkzBKhGBlJdlKc='
            />
        </div>
    )
}

export default ListadoChats