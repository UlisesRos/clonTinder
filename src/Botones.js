import React from 'react'
import './Botones.css'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { IconButton } from '@material-ui/core';

function Botones() {
    return (

        <div className='botones'>
            <IconButton className='botones__replay'>
                <ReplayIcon font='large' />
            </IconButton>

            <IconButton className='botones__close'>
                <CloseIcon font='large' />
            </IconButton>

            <IconButton className='botones__star'>
                <StarRateIcon font='large' />
            </IconButton>

            <IconButton className='botones__fav'>
                <FavoriteIcon font='large' />
            </IconButton>

            <IconButton className='botones__flash'>
                <FlashOnIcon font='large' />
            </IconButton>

        </div>
    )
}

export default Botones