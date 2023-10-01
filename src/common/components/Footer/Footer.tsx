import { app } from '../../constants'
import { Link } from 'react-router-dom'
import FooterColumns from './FooterColumns'
import SocialMediaIcons from '../SocialMediaIcons'
import './Footer.scss'


export const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
      <FooterColumns/>
      <div className="bottom-content">
        <small className='rights-reserved'>
          All Rights Reserved &#xA9; {new Date().getFullYear()} <Link to="/"><strong>{app.name}</strong></Link>,
          Made by {app.developers.map(developer => <a key={developer.fullName} target="__blank" href={developer.linkedInLink}><strong>{developer.fullName}</strong></a>)}
        </small>
        <SocialMediaIcons />
      </div>
    </footer>
  )
}