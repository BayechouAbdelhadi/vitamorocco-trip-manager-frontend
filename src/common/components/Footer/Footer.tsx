import { Link } from 'react-router-dom';
import { app } from '../../constants/appConstants';
import SocialMediaIcons from '../SocialMediaIcons';
import './Footer.scss';
import FooterColumns from './FooterColumns';
import { scrollToTop } from '../../utils';

export const Footer = (): JSX.Element => {
    return (
    <footer className="footer">
      <FooterColumns />
      <div className="bottom-content">
        <small className='rights-reserved'>
          All Rights Reserved &#xA9; {new Date().getFullYear()} <Link to="/" onClick={scrollToTop}><strong>{app.name}</strong></Link>,
          Made by {app.developers.map(developer => <a key={developer.fullName} target="__blank" href={developer.linkedInLink}><strong>{developer.fullName}</strong></a>)}
        </small>
        <SocialMediaIcons />
      </div>
    </footer>
  )
};
