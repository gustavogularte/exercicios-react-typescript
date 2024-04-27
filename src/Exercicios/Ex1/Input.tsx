import React from 'react';

type InputProps = React.ComponentProps<'input'> & {
  label: string;
  id: string;
}

const Input = ({ label, id, ...props }: InputProps) => {
  return (
    <div style={{marginBottom: '1rem'}}>
      <label htmlFor={id}>{label}</label>
      <input type="text" name={id} id={id} {...props}/>
    </div>
  );
};

export default Input;
