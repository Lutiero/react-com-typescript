import React from 'react';
import {useUser} from "../Context/UserContext.tsx";

const Content = () => {
    const data = useUser();
    console.log(data)
    return (
        <div>
            Content
        </div>
    );
};

export default Content;