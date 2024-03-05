import React from 'react'

const Button = ({ total, setTotal }: {total: number, setTotal: React.Dispatch<React.SetStateAction<number>>}) => {
  return (
    <button onClick={() => setTotal((t) => t + 1)}>Incrementar {total}</button>
  );
};

export default Button
