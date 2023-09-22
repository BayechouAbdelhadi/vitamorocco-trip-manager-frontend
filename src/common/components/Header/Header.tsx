import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutContainer } from '../LayoutContainer/LayoutContainer';

export const Header = (): JSX.Element => (
  <LayoutContainer role="banner" Tag="header">
    <LayoutContainer role="nav" Tag="nav">
      <Link to="/">Logo</Link>
    </LayoutContainer>
  </LayoutContainer>
);
