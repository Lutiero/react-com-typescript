import React from 'react';
import useFetch from "../CustomHooks/useFetch.tsx";

type IUiContext = {
    dark: boolean;
    setDark: React.Dispatch<React.SetStateAction<boolean>>;
}
export const UiContext = React.createContext<IUiContext | null>(null);

export const useUi = () => {
    const context = React.useContext(UiContext);
    if (context === null) throw new Error('useContext deve estar dentro do provider')
    return context;
}

export const UiContextProvider = ({children}: React.PropsWithChildren) => {
    const [dark, setDark] = React.useState(false);

    const teste = useFetch('https://data.origamid.dev/usuarios/1')
    console.log(teste);

    return <UiContext.Provider value={{dark, setDark}}>{children}</UiContext.Provider>
}