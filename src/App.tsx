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
    const [id, setId] = React.useState('p001');
    const produtos = useFetch<Produto[]>('https://data.origamid.dev/produtos');
    const produto = useFetch<Produto>(`https://data.origamid.dev/produtos/${id}`);
    return (
        <section className='flex'>
            <div>
                {produtos.data && produtos.data.map((produto) => (
                    <button onClick={() => setId(produto.id)} style={{fontSize: '.75rem'}} key={produto.id}>{produto.id}</button>
                ))}
            </div>
            <div>
                {produto.loading && <div>Carregando...</div>}
                {produto.data && (
                    <ul>
                        <li> ID: {produto.data.id}</li>
                        <li>Nome: {produto.data.nome}</li>
                        <li>Preço: {produto.data.preco}</li>
                        <li>Quantidade: {produto.data.quantidade}</li>
                        <li>Descrição: {produto.data.descricao}</li>
                        <li>Internacional: {produto.data.internacional ? 'Importado' : 'Nacional'}</li>
                    </ul>
                )}
            </div>
        </section>
    );
}

export default App
