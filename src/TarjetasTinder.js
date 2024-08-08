import React, { useEffect, useState } from 'react'
import './TarjetasTinder.css'
import TarjetaPersona from 'react-tinder-card'
import { database } from './firebase';

const TarjetasTinder = () => {

    // const [persona, setPersona] = useState([
    //     {
    //         nombre: 'Ulises Ros',
    //         url: 'https://scontent.faep7-1.fna.fbcdn.net/v/t39.30808-6/434250942_7042543012540607_5832923785606173195_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG0h532LYPfQZK2OeyrNPci3YUbNRctv2ndhRs1Fy2_aUhY1OEB9gEyKKbaVSdWf9E1Pi6s82SzaugxlSSzvYBZ&_nc_ohc=jIH8AOTO-DQQ7kNvgFxnXrg&_nc_ht=scontent.faep7-1.fna&oh=00_AYCEr3T3b5U6CtwBdcbP3_k74X9uA19X3-g-BLmQTF8C6Q&oe=66A89E70'
    //     },
    //     {
    //         nombre: 'Micaela Palavecino',
    //         url: 'https://scontent.faep7-1.fna.fbcdn.net/v/t39.30808-6/432930459_10232144287898537_4840660384797181260_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFVsSGMEuDXyQL_zIAgeuYQ9VfFXbhN1Hb1V8VduE3UdmCbxG9r0WmcdyiA2EEhnxIhh8fN8Hgu_kyfi6vAD9ex&_nc_ohc=yULcLVLnkjUQ7kNvgGKdOaX&_nc_ht=scontent.faep7-1.fna&oh=00_AYArmNj8jHk1z91j0V3ijeiztGpTxKBmCnzT3tkd0pp2ig&oe=66A883F9'
    //     },
    //     {
    //         nombre: 'Tobias Ros',
    //         url: 'https://scontent.faep7-1.fna.fbcdn.net/v/t39.30808-6/423715471_3038864199577363_1942994915696232845_n.jpg?stp=dst-jpg_p720x720&_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFLbhGiXnkeSAYHXrHlvp-CebZ8CEfOaMZ5tnwIR85oxq-sePcxQwJw8Pk7-r9mtpEs1A-oXeSVLuZn22_iUg-L&_nc_ohc=LmlTkQ5fPTMQ7kNvgFPw-HP&_nc_ht=scontent.faep7-1.fna&oh=00_AYAPNTTpiPRC6lcVNpRSPqlV0U4Kz_abBMjhlG73niEoYw&oe=66A895CE'
    //     }

    // ]);

    const [persona, setPersona] = useState([]);

    useEffect(() => {
        
        const desuscribirse = database.collection('personas').onSnapshot(snapshot => (
            setPersona(snapshot.docs.map( doc => doc.data()))
        ))

        return () => {
            desuscribirse();
        }
    }, [])

    return (

        <div className='tarjetasTinder'>
            <div className='tarjetasTinder__contenedor'>
                {persona.map(p => (

                    <TarjetaPersona 
                    className='swipe'
                    ket={p.nombre}
                    preventSwipe={['up', 'down']}
                    >
                        <div 
                        className='tarjeta'
                        style={{backgroundImage:`url(${p.url})`}}
                        >
                            <h2>{p.nombre}</h2>
                        </div>

                    </TarjetaPersona>

                ))}
            </div>
        </div>

    )
}

export default TarjetasTinder