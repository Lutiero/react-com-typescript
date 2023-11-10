import React from "react";
import Header from "./Components/Header.tsx";
import {UserContextProvider} from "./Context/UserContext.tsx";
import Content from "./Components/Content.tsx";

function App() {

    return (
        <UserContextProvider>
            <Header/>
            <Content/>
        </UserContextProvider>
    );
}

export default App
