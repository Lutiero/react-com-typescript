import React from 'react';

type InputProps = React.ComponentProps<'input'> & {
    label: string,
    id: string
}
const Input = ({label, id, ...props}: InputProps) => {
    return (
        <div style={{marginBottom: '1rem'}}>
            <label htmlFor={id}>{label}
            <input
                id={id}
                name={id}
                {...props}
            />
            </label>
        </div>
    );
};

export default Input;