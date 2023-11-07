import React from 'react';

const Checkbox = ({label}: { label: string }) => {
    const [value, setValue] = React.useState(false);

    return (
        <label>
            <p>{String(value)}</p>
            <input type='checkbox'
                   checked={value}
                   onChange={({currentTarget}) => setValue(currentTarget.checked)}/>
            {label}
        </label>
    );
};

export default Checkbox;