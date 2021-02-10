import styled from 'styled-components';

const MaxWidth = styled.div`
  max-width: ${props => props.max || 1500}px;
`;

export default MaxWidth;