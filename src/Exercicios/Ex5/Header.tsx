import React from 'react';
import { useUser } from './UserContext';

const Header = () => {
  const { data } = useUser();

  if (!data) return null;

  return (
    <div>
      <h2>{data.nome}</h2>
    </div>
  );
};

export default Header;
