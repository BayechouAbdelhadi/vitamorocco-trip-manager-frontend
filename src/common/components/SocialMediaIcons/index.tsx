import { Box, Stack } from '@mui/material'
import Icon from '../Icon/Icon'
import { socialicons } from './constants'
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/FacebookOutlined';
import './SocialMediaIcons.css'

interface ISocialMediaIcons{
  displayColumn?: boolean
}

export default function SocialMediaIcons({ displayColumn = false }: ISocialMediaIcons) {

      
  return (
    <div className={`socialicons-container ${displayColumn && 'column'}`}>
        <InstagramIcon color="error" className="icon instagram-icon"/>
        <YouTubeIcon color="error" className="icon youtube-icon"/>
        <FacebookIcon color="primary" className="icon fa-facebook"/>
    </div>
  )
}
