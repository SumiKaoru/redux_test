import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

interface Props {
    number: number;
    color: string;
    onIncrement(): void;
    onDecrement(): void;
    onSetColor(): void;
}

const Counter: React.SFC<Props> = ({number, color, onIncrement, onDecrement, onSetColor}) => {
    return (
        <div 
            className="Counter" 
            onClick={onIncrement}
            onContextMenu={
                (e) => {
                    e.preventDefault(); 
                    onDecrement();
                }
            } 
            onDoubleClick={onSetColor}
            style={{backgroundColor: color}}>
                {number}
        </div>
    );
};

export default Counter;