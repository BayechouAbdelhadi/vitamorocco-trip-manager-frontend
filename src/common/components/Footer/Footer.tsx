import { Link } from 'react-router-dom';
import { app } from '../../constants/appConstants';
import SocialMediaIcons from '../SocialMediaIcons';
import FooterColumns from './FooterColumns';
import { scrollToTop } from '../../utils';
import './Footer.scss';

export const Footer = (): JSX.Element => {
  return (
    <footer className="footer-container">
      <FooterColumns />
      <div className="bottom-content">
        <small className='rights-reserved'>
          All Rights Reserved &#xA9; {new Date().getFullYear()} <Link to="/" onClick={scrollToTop}><strong>{app.name}</strong></Link>
        </small>
        {/* Made by {app.developers.map(developer => <a key={developer.initials} target="__blank" href={developer.linkedInLink}><strong>{developer.initials}</strong></a>)} */}
        <SocialMediaIcons />
      </div>
    </footer>
  )
};
