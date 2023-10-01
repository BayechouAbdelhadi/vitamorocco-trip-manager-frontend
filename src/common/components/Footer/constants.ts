const CONTACT_BOXES = [
  {
    title: 'Call Me',
    text: '(+212) 634234556',
    link: 'tel:212634234556',
    icon: 'fad fa-phone',
  },
  {
    title: 'Email Me',
    text: 'vitamorocco@gmail.com',
    link: 'mailto:vitamorocco@gmail.com',
    icon: 'fad fa-envelope'
  },
  {
    title: 'Visit Me',
    text: '48 bis Rue des fleurs, 62100 Calais',
    link: 'https://www.google.com/maps',
    icon: 'fad fa-map-marker-alt'
  }
]

const SERVICES = [
  {
    text: 'Powerful, simple and modern websites!',
    title: 'Web Design',
    icon: 'fad fa-browser',
    link: '/services'
  },
  {
    text: 'Websites are made with   love and creativity!',
    title: 'Creativity',
    icon: 'fad fa-pencil-paintbrush',
    link: '/services'
  },
  {
    text: 'Modern and stylistic designs to your website!',
    title: 'Modern',
    icon: 'fad fa-sparkles',
    link: '/services'
  },
  {
    text: 'User and device friendly websites!',
    title: 'Responsive',
    icon: 'fad fa-mobile-android',
    link: '/services'
  },
  {
    text: 'Designs made with you in mind! ',
    title: 'Stunning Design',
    icon: 'fad fa-layer-group',
    link: '/services'
  },
  {
    text: 'Clear, neat and organized code!',
    title: 'Organization',
    icon: 'fad fa-broom',
    link: '/services'
  },
  {
    title: 'More!',
    icon: 'fad fa-th',
    link: '/services'
  }
]

export const FOOTER_LINKS = [
    {
      logo: true,
    },
    {
      title: 'Features',
      links: SERVICES,
      isLinkTitle: true
    },
    {
      title: 'Contact Me',
      links: CONTACT_BOXES,
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

  