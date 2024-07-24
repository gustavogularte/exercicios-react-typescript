import React from 'react';
import useFetch from '../Ex4/useFetch';

type IUserPreferencias = {
  playback: number;
  volume: number;
  qualidade: string;
};

type IUser = {
  id: number;
  nome: string;
  idade: number;
  aulas: number;
  cursos: number;
  preferencias: IUserPreferencias;
};

type IContext = {
  data: IUser | null;
  loading: boolean;
  error: string | null;
};

const UserContext = React.createContext<IContext | null>(null);

export const useUser = () => {
  const context = React.useContext(UserContext);
  if (!context) throw new Error('UserContext deve estar dentro do provider');
  return context;
};

export const ContextProvider = ({ children }: React.PropsWithChildren) => {
  const { data, loading, error } = useFetch<IUser>(
    'https://data.origamid.dev/usuarios/2'
  );

  return (
    <UserContext.Provider value={{ data, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};
