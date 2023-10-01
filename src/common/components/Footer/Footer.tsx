import { app } from '../../constants';
 import { LayoutContainer } from '../LayoutContainer/LayoutContainer';

// export const Footer = (): JSX.Element => (
//   <LayoutContainer role="contentinfo" Tag="footer">
//     <p>Copyright &#xA9; {`${new Date().getFullYear()} ${app.name}`}</p>
// <p>Developed by {app.developers.map(developer=> <span>{developer}</span>)}</p>
//   </LayoutContainer>
// );


import Columns from './Columns'
import './Footer.css'
import { contactboxes, services } from '../../constants'
import SocialMediaIcons from '../SocialMediaIcons';

export const Footer = (): JSX.Element => {

  const columns = [
    {
      title: <img 
        src="https://vitamarruecos.com/wp-content/uploads/2023/07/logo-horiz-morocc-800.png" width="200" height="70"
        style={{objectFit: "contain", backgroundColor: "black"}}
      />,
      logo: true
    },
    {
      title: 'Features',
      links: services,
      isLinkTitle: true
    },
    {
      title: 'Contact Me',
      links: contactboxes,
    },
    {
      title: 'Portfolio',
      links: [
        {
          text: 'Github',
          icon: 'fab fa-github',
          link: 'https://github.com/'
        },
        {
          text: 'Dribbble',
          icon: 'fab fa-dribbble',
          link: 'https://dribbble.com/'
        }
      ],
      blank: true
    },
    {
      title: 'Policies',
      links: [
        {
          text: 'Privacy Policy',
          link: '/website/privacy',
          icon: 'fad fa-shield'
        },
        {
          text: 'Terms and Conditions',
          link: '/website/terms',
          icon: 'fad fa-file'
        },
        {
          text: 'Learn More',
          link: '/website/about',
          icon: 'fad fa-info-circle'
        }
      ]
    }
  ]


  const columnsrow = columns?.map(column => {
    return <Columns key={column.title} column={column} />
  })


  return (
    <footer className="footer">
      <div className="footer-grid">
        {columnsrow}
      </div>
      <div className="bottomcontent">
        <div className="rightsreserved">
          <small className='graytext'>
            All Rights Reserved &#xA9; {new Date().getFullYear()} <strong>{app.name}</strong>,
            Made by {app.developers.join(" - ")}
          </small>
        </div>
        <SocialMediaIcons/>
      </div>
    </footer>
  )
}