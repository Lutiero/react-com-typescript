import React from "react";

function App() {

    React.useEffect(() => {
        console.log('montou');
        return () => {
            console.log('demontou');
        }

    }, [])
    return (
        <div>
        </div>
    );
}

export default App
