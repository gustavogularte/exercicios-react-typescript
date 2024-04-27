import React from 'react';
import Input from '../Ex1/Input';

// Interface da API: https://data.origamid.dev/vendas/
// <!-- Essa API possui dados de hoje até 90 dias atrás -->

// 1 - Utilize a API: `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`
// 2 - Inicio/Final é uma string do tipo data YYYY-MM-DD (padrão de saída do input tipo date)
// 3 - Crie ou reutilize o componente Input.tsx (Label com Input) das aulas anteriores
// 4 - Crie 3 estados reativos em App.tsx: data, inicio, final
// 5 - Utilize o componente Input.tsx para modificar o estado de inicio/final
// 6 - Crie um efeito que ocorrerá toda vez que inicio/final mudar. Se existir inicio/final, faça o fetch da API e popule o estado de data com o resultado.
// 7 - Caso data seja diferente de null, mostre na tela o nome e o status de cada venda do período selecionado

type Venda = {
  id: string;
  nome: string;
  preco: number;
  status: 'processando' | 'pago' | 'falha';
  pagamento: 'pix' | 'cartao' | 'boleto';
  parcelas: number | null;
  data: string;
};

const Ex2 = () => {
  const [inicio, setInicio] = React.useState('');
  const [final, setFinal] = React.useState('');
  const [data, setData] = React.useState<null | Venda[]>(null);
  const api = `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`;

  function showData() {
    return (
      <ul>
        {data?.map(({ nome, status, id }) => (
          <li key={id}>{nome}: {status}</li>
        ))}
      </ul>
    );
  }

  async function dataFetch() {
    try {
      const response = await fetch(api);
      const json = await response.json();
      setData(json as Venda[]);
    } catch (error) {
      console.error('Erro ao carregar a API:', error);
    }
  }

  function datesExists() {
    return inicio && final ? true : false;
  }

  React.useEffect(() => {
    if (datesExists()) {
      dataFetch();
    }
  }, [inicio, final]);

  return (
    <div>
      <Input
        label="Início"
        id="inicio"
        type="date"
        value={inicio}
        setValue={setInicio}
      />
      <Input
        label="Final"
        id="final"
        type="date"
        value={final}
        setValue={setFinal}
      />
      {data && showData()}
    </div>
  );
};

export default Ex2;
