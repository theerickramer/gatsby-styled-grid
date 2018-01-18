import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const StyledHeader = styled.header`
  grid-area: header;
  background: rebeccapurple;
`;

const StyledLink = styled(Link)`
  color: pink;
  text-decoration: none;
`;

const Header = () => (
  <StyledHeader>
    <h1>
      <StyledLink to="/">Header</StyledLink>
    </h1>
  </StyledHeader>
);

export default Header;
