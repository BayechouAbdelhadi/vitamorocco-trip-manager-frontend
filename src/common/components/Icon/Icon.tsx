import './Icon.css'
import './Socialicon.css'

function Icon({socialicon}: any) {

  return (
    <a href={socialicon.link} target='__blank'>
      <i className={socialicon.icon +' icon'}></i>
    </a>
  )
}
export default Icon