import { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import './Columns.scss'


function Columns({ column }: any) {
  const [expanded, setExpanded] = useState(false)

  function determineLink(link: any) {
    // open external link in a new tab
    if (column.blank) {
      return (
        <a href={link.link} className='link-conttainer'>
          <i className={link.icon}></i>
          <span>{link.text}</span>
        </a>
      )
    }

    // internal link (belongs to this website)
    return (
      <HashLink smooth to={link.link + '#top'} className='link-container'>
        <i className={link.icon}></i>
        <p>{column.isLinkTitle ? link.title : link.text}</p>
      </HashLink>
    )
  }

  return (
    <div className="col">
      <div className='column-title' onClick={() => setExpanded(!expanded)}>
        <h3>{column.title}</h3>
        {!column.logo && <i className={`fal fa-arrow-${expanded ? 'right transformed' : 'right'}`}></i>}
      </div>
      <div className={expanded ? "expand expanded" : 'expand'}>
        <div className='columnlinks' > {column.links?.map(
            (link: any) => determineLink(link)
          )}
        </div>
      </div>
    </div>
  )
}

export default Columns