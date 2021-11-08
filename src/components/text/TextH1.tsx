import React from 'react';
import './TextH1.css';

interface ITextH1 {
    text: string
}

const TextH1: React.FC<ITextH1> = ({ text }) => {
    return (
        <div className='container'>
            <h1 className='text-color'>
                {text}
            </h1>
        </div>
    );
}

export default TextH1;