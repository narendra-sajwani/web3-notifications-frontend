import React from 'react';
import './index.scss';

interface ButtonProps {
    text: String,
    handleClick: () => void;
}

const Button = ({ handleClick, text }: ButtonProps) => {
    return(
        <button className='button' onClick={handleClick}>
            {text}
        </button>
    )
}

export default Button;