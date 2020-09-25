import styled from 'styled-components';

const Text = styled.p`
  font-size: ${(props) => props.size || '16px'};
  font-weight: ${(props) => props.weight || 'normal'};
  margin: ${(props) => props.margin || '0 auto'};
  padding: ${(props) => props.padding || 0};
  width: ${(props) => props.width || 'auto'};
  transform: ${(props) => props.transform || 'unset'};
  text-transform: ${(props) => props.textTransform || 'normal'};
  color: ${(props) => (props.active ? 'red' : props.color || 'inherit')};
  line-height: ${(props) => props.lineHeight || 'inherit'};
  cursor: ${(props) => props.cursor || 'normal'};
`;

export default Text;
