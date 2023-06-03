import React from 'react';
import { StyledLoader } from './Loader.styled';

const Loading = ({
  type = 'spin',
  color = 'cyan',
  height = '50px',
  width = '50px',
}) => <StyledLoader type={type} color={color} height={height} width={width} />;

export default Loading;
