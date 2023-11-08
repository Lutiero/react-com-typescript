import React from "react";
import InputExercicio from "./Components/InputExercicio.tsx";

type Venda = {
    id: string;
    nome: string;
    preco: number;
    status: string;
    pagamento: string;
    parcelas: number;
    data: Date;
}

function App() {
    const [dataInicio, setDataInicio] = React.useState("");
    const [dataFinal, setDataFinal] = React.useState("");
    const [data, setData] = React.useState<null | Venda[]>(null);

    React.useEffect(() => {
        if (dataInicio !== '' && dataFinal !== '') {
            fetch(`https://data.origamid.dev/vendas/?inicio=${dataInicio}&final=${dataFinal}`)
                .then(r => r.json())
                .then((json) => setData(json as Venda[]))
                .catch((erro) => console.log(erro));
        }
        console.log(data);
    }, [dataInicio, dataFinal])

    return (
        <div>
            <InputExercicio label='Início'
                            id='data-inicio'
                            type='date'
                            value={dataInicio}
                            setState={setDataInicio}
            />
            <InputExercicio label='Final'
                            id='data-final'
                            type='date'
                            value={dataFinal}
                            setState={setDataFinal}
            />
            <ol>{data && (
                data.filter((venda) => venda.status == 'processando').map((venda) => (
                    <li key={venda.id}>{venda.nome} : {venda.status}</li>
                ))

            )}</ol>

        </div>
    );
}

export default App
