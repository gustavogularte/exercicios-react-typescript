import React from 'react';
import Button from './exercicios/Button';
import Input from './exercicios/Input';
import Ex3UseState from './exercicios/Ex3UseState';

function App() {
  const [total, setTotal] = React.useState(0);

  return (
    <main>
      <article>
        <h1>Exercício 1</h1>
        <Input label="Nome" id="nome" />
      </article>
      <article>
        <h1>Exercício 2</h1>
        <p>Total: {total}</p>
        <Button total={total} setTotal={setTotal} />
      </article>
      <article>
        <h1>Exercício 3</h1>
        <Ex3UseState />
      </article>
    </main>
  );
}

export default App;
