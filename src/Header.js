import React from 'react'
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import { IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { Link, useHistory } from 'react-router-dom'


const Header = ( { botonRetroceder } ) => {

    const historial = useHistory();

    return (
        <div className='header'>

            {botonRetroceder ? (

                <IconButton onClick={() => historial.replace(botonRetroceder)}>
                    <ArrowBackIosIcon fontSize='large' className='header__botonRetroceder' />
                </IconButton>

            ) : (

                <IconButton>
                    <PersonIcon className='header__icon' fontSize='large'/>
                </IconButton>

            )}

            <Link to="/">
                <img src='https://static.vecteezy.com/system/resources/previews/018/910/781/original/tinder-app-logo-tinder-app-icon-free-free-vector.jpg' 
                className='header__logo'
                alt='logo' />
            </Link>

            <Link to="/chats">
                <IconButton>
                    <ForumIcon className='header__icon' fontSize='large' />
                </IconButton>
            </Link>
        </div>
    )
};

export default Header