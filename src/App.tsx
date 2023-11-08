import React from "react";
import useFetch from "./CustomHooks/useFetch.tsx";

type Produto = {
    id: string;
    nome: string;
    preco: number;
    quantidade: number;
    descricao: string;
    internacional: boolean;
}

function App() {
    //const produtos = useFetch<Produto[]>('https://data.origamid.dev/produtos');
    return (
        <div>

        </div>
    );
}

export default App
