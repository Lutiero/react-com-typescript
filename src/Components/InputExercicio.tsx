import React from 'react';

type InputProps = React.ComponentProps<'input'> & {
    label: string,
    id: string,
    setState:  React.Dispatch<React.SetStateAction<string>>
}
const InputExercicio = ({label, id, setState, ...props}: InputProps) => {
    return (
        <div style={{marginBottom: '1rem'}}>
            <label htmlFor={id}>{label}
            <input
                id={id}
                name={id}
                onChange={({currentTarget})=> setState(currentTarget.value)}
                {...props}
            />
            </label>
        </div>
    );
};

export default InputExercicio;