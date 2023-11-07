import React from 'react';

type ButtonProps = React.ComponentProps<'button'> & {
    total: number;
    setTotal: React.Dispatch<React.SetStateAction<number>>;
}

const ButtonPropsWithChildren = ({total, setTotal}: ButtonProps) => {

    return (
        <button onClick={() => setTotal((t) => t + 1)}>Incrementar {total}</button>
    );
};

export default ButtonPropsWithChildren;