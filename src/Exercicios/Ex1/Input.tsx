import React from 'react';

type InputProps = React.ComponentProps<'input'> & {
  label: string;
  id: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
};

const Input = ({ label, id, setValue, ...props }: InputProps) => {

  function handleChange({currentTarget}: React.ChangeEvent<HTMLInputElement>) {
    if (setValue) setValue(currentTarget.value);
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor={id}>{label}</label>
      <input type="text" name={id} id={id} onChange={handleChange} {...props} />
    </div>
  );
};

export default Input;
