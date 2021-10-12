import React from 'react';
import './SwipedButtons.scss';
import ReplayIcon from '@mui/icons-material/Replay';
import ClearIcon from '@mui/icons-material/Clear';
import StarsIcon from '@mui/icons-material/Stars';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';
const Swipebuttons = () => {
    return (
        <div className="swipe__buttons__container">
            <IconButton>
                <ReplayIcon fontSize="large" className="swipe__buttons__replay"/>
            </IconButton>
            <IconButton>
                <ClearIcon fontSize="large" className="swipe__buttons__clear"/>
            </IconButton>
            <IconButton>
                <FavoriteIcon fontSize="large" className="swipe__buttons__favorite"/>
            </IconButton>
            <IconButton>
                <StarsIcon fontSize="large" className="swipe__buttons__stars"/>
            </IconButton>
            <IconButton>
                <FlashOnIcon fontSize="large" className="swipe__buttons__flashIcons"/>
            </IconButton>
        </div>
    );
}

export default Swipebuttons;
