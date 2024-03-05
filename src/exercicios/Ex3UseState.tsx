import React from 'react';
import Input from './Input';
// Interface da API: https://data.origamid.dev/vendas/
// <!-- Essa API possui dados de hoje até 90 dias atrás -->

// 1 - Utilize a API: `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`
// 2 - Inicio/Final é uma string do tipo data YYYY-MM-DD (padrão de saída do input tipo date)
// 3 - Crie ou reutilize o componente Input.tsx (Label com Input) das aulas anteriores
// 4 - Crie 3 estados reativos em App.tsx: data, inicio, final
// 5 - Utilize o componente Input.tsx para modificar o estado de inicio/final
// 6 - Crie um efeito que ocorrerá toda vez que inicio/final mudar. Se existir inicio/final, faça o fetch da API e popule o estado de data com o resultado.
// 7 - Caso data seja diferente de null, mostre na tela o nome e o status de cada venda do período selecionado

type Data = {
  data: string;
  nome: string;
  id: string;
  pagamento: 'cartao' | 'pix' | 'boleto';
  parcelas: number;
  preco: number;
  status: 'pago' | 'processando' | 'falha';
};

const Ex3UseState = () => {
  const [inicio, setInicio] = React.useState('');
  const [final, setFinal] = React.useState('');
  const [data, setData] = React.useState<null | Data[]>(null);

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`
      );
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, [inicio, final]);

  return (
    <>
      <Input
        label="Início"
        id="inicio"
        type="date"
        onChange={({ target }) => setInicio(target.value)}
      />
      <Input
        label="Final"
        id="final"
        type="date"
        onChange={({ target }) => setFinal(target.value)}
      />
      <ul>
        {data &&
          inicio &&
          final &&
          data.map((item) => (
            <li key={item.id}>
              {item.nome}: {item.status}
            </li>
          ))}
      </ul>
    </>
  );
};

export default Ex3UseState;
