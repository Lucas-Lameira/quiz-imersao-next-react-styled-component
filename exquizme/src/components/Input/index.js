import React from 'react'
import styled from "styled-components";
import PropTypes from 'prop-types';


const InputElement = styled.input` 
  width:100%;
  padding: 15px;
  font-size: 14px;
  border: 1px solid ${({theme}) => {theme.colors.primary}};
  color: ${({theme}) => {theme.colors.contrastText}};
  background-color:${({theme}) => {theme.colors.mainBg}};
  border-radius: ${({theme})=>{theme.borderRadius}};
  outline: 0;
  margin-bottom: 25px;
`

export default function Input ({onChange, placeholder, ...props}) {
  return(
    <div>
      <InputElement 
        onChange={onChange}
        placeholder={placeholder} 
        {...props} 
      />
    </div>
  )
}

/* VALIDAÇÃO INTERNA, NÃO DO USUÁRIO*/
InputElement.defaultProps = {
  value: '',
};

InputElement.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};