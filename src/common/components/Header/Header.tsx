import { LayoutContainer } from '../LayoutContainer/LayoutContainer';
import Navbar from './NavBar';

export const Header = (): JSX.Element => (
  <LayoutContainer role="banner" Tag="header">
    {
      //Put any thing you want to add in the header Like coordinates(Phone number and email...)
    }
    <Navbar />
  </LayoutContainer>
);
