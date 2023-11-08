import React from 'react';

type ButtonProps = React.ComponentProps<'button'> & {
    fontSize?: string;
}
const Button = ({children, fontSize, ...props}: ButtonProps) => {


    return (
        <button
            style={{fontSize}}
            {...props}
        >{children}
        </button>
    );
};

export default Button;