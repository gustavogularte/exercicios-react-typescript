import React from 'react'
import Input from './Input'

// 1 - Crie um componente Input
// 2 - Ele deve retornar <label> e <input>, dentro de uma <div>
// 3 - Recebe uma propriedade chamada label
// 4 - A propriedade deve ser usada como htmlFor (label), name (input), id (input) e como conteúdo de <label>
// 5 - Permita o uso de qualquer propriedade de input no componente Input.
// 6 - Adicione 1rem de marginBottom na <div>

const Ex1 = () => {
  return (
    <div>
      <Input id='idade' label='Idade' type='number'/>
    </div>
  )
}

export default Ex1
