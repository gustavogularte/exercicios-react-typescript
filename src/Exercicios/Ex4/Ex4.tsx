import React from 'react';
import useFetch from './useFetch';

// Crie um custom hook chamado useFetch.
// 1 - Este hook deve retornar a interface:
// interface FetchState<T> {
//   data: T | null;
//   loading: boolean;
//   error: string | null;
// }
// Onde T é um valor genérico que deverá ser passado quando o Hook for utilizado.
// 2 - data, loading e error são estados reativos (useState).
// 3 - O hook deve receber a URL e OPTIONS como argumentos (interfaces de fetch).
// 4 - O fetch deve ocorrer em um useEffect, com dependência apenas da URL.
// 5 - Use AbortController para abortar o fetch caso o componente desmonte, antes do fetch ser concluído.
// 6 - Teste o Hook com a api: https://data.origamid.dev/produtos

type Products = {
  descricao: string;
  id: string;
  internacional: boolean;
  nome: string;
  preco: number;
  quantidade: number;
};

const Ex4 = () => {
  const { data, loading, error } = useFetch<Products[]>(
    'https://data.origamid.dev/produtos'
  );
  const [id, setID] = React.useState('p001');
  const produto = useFetch<Products>(
    `https://data.origamid.dev/produtos/${id}`
  );

  function showSelectedProduct() {
    return (
      <div>
        <h2>{produto.data?.nome}</h2>
        <span>{produto.data?.id}</span>
        <p>{produto.data?.descricao}</p>
        <h3>R$ {produto.data?.preco}</h3>
        <p>{produto.data?.quantidade}</p>
      </div>
    );
  }

  function showProducts() {
    return (
      <ul>
        {data?.map(({ id }) => (
          <li key={id}>
            <button onClick={() => setID(id)}>{id}</button>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="flex">
      {data && showProducts()}
      {produto.data && showSelectedProduct()}
    </div>
  );
};

export default Ex4;
