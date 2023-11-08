import React from 'react';

type ButtonProps = {
    incrementar: React.Dispatch<React.SetStateAction<number>>
}
const ButtonComState = ({incrementar}: ButtonProps) => {
    return (
        <button onClick={() => incrementar((n) => n + 1)}>
            Incrementar
        </button>
    );
};

export default ButtonComState;