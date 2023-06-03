import styled from 'styled-components';
import ReactLoading from 'react-loading';

export const StyledLoader = styled(ReactLoading)`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2000;
`;
