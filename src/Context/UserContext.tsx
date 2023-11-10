import React from 'react';
import useFetch from "../CustomHooks/useFetch.tsx";

type User = {
    id: number;
    nome: string;
    idade: number;
    aulas: number;
    cursos: number;
    preferencias: {
        playback: number;
        volume: number;
        qualidade: string;
    }
}

type IUser = {
    data: User | null;
    loading: boolean;
}

const UserContext = React.createContext<IUser | null>(null);

export const useUser = () => {
    const context = React.useContext(UserContext);
    if (context === null) throw new Error('useContext deve estar dentro do provider')
    return context;
}

export const UserContextProvider = ({children}: React.PropsWithChildren) => {
    const [user, setUser] = React.useState(null);

    const {data, loading} = useFetch<User>('https://data.origamid.dev/usuarios/1')

    return <UserContext.Provider value={{data, loading}}>{children}</UserContext.Provider>
}