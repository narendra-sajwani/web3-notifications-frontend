import React from 'react';
import './index.scss';

interface ChannelProps {
    name: String,
    description: String,
    address: String,
    id: String,
    handleClick: () => void;
}

const Channel = ({name, description, address, id, handleClick} : ChannelProps) => {

    const handleSubscribe = () => {

    }

    return(
        <div className='channel-wrapper'>
            <div className='channel-info'>
                <p>{name}</p>
                <p>About: {description}</p>
                <p>Address: {address}</p>
            </div>
            <button onClick={handleSubscribe}>Subscribe</button>
        </div>
    )
}

export default Channel;