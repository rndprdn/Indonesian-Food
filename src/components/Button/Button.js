import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: ${(props) => props.padding || '8px 16px'};
  margin: ${(props) => props.margin || '0'};
  font-size: ${(props) => props.size || '16px'};
  box-shadow: ${(props) => props.shadow || 'none'};
  background-color: ${(props) => props.color || 'unset'};
  color: ${(props) => props.textColor || 'inherit'};
  border-radius: ${(props) => props.radius || '5px'};
  border: ${(props) => props.border || `1px solid ${props.color}`};
  cursor: pointer;
`;

export default Button;
