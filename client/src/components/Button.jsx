import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
  background-color: ${props => props.strong ? props.theme.primary : props.theme.gray_light};
  color: ${props => props.strong ? props.theme.white : props.theme.primary};
  padding: 0.5rem 3rem;
  border-radius: 4px;
  border: none;
`

const Button = ({ value, strong, onClick }) => {
  return (
    <Btn strong={strong} onClick={onClick}>
      {value}
    </Btn>
  )
}

export default Button