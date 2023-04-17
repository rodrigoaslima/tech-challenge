import React from 'react';

import { StyledLink } from './styles';

function LinkButton({link, name}) {
  return(
    <StyledLink  to={link}>{name}</StyledLink >
  );
}

export default LinkButton;