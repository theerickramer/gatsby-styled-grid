import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: pink;
  text-decoration: none;
`;

const Header = ({className}) => (
  <header className={className}> {/* attach passed generated className to DOM */}
    <h1>
      <StyledLink to="/">Header</StyledLink>
    </h1>
  </header>
);

export default Header;
