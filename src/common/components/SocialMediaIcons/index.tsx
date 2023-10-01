import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/FacebookOutlined';
import './SocialMediaIcons.scss'

interface ISocialMediaIcons{
  displayColumn?: boolean,
  float?: boolean
}

export default function SocialMediaIcons({ displayColumn = false, float = false }: ISocialMediaIcons) {

      
  return (
    <div className={`social-media-icons-container ${displayColumn && 'column'} ${float && 'float-container'}`}>
        <InstagramIcon color="error" fontSize="large" className="icon instagram-icon"/>
        <YouTubeIcon color="error" fontSize="large" className="icon youtube-icon"/>
        <FacebookIcon color="primary" fontSize="large" className="icon facebook-icon"/>
    </div>
  )
}
