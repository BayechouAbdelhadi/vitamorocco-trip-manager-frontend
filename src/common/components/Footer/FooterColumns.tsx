import FooterColumn from './FooterColumn'
import { FOOTER_LINKS } from './constants'


export default function FooterColumns() {
    return (
        <div className="footer-grid">
          {FOOTER_LINKS?.map((footerLink, i) => {
            return <FooterColumn key={`${footerLink.title}-${i}`} {...footerLink} />
          })}
        </div>
      )
}
