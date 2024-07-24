import React from 'react';
import { useUser } from './UserContext';

const Content = () => {
  const { data, loading } = useUser();

  if (!data) return null;
  if (loading) return <div>Loading...</div>

  return (
    <div>
      <h3>Preferências</h3>
      <p>Volume: {data.preferencias.volume}</p>
      <p>Qualidade: {data.preferencias.qualidade}</p>
      <p>Playback: {data.preferencias.playback}</p>
    </div>
  );
};

export default Content;
