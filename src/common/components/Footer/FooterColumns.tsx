import { useState } from 'react'
import { FOOTER_LINKS } from './constants'
import FooterColumn from './FooterColumn'


export default function FooterColumns() {
    return (
        <div className="footer-grid">
          {FOOTER_LINKS?.map(column => {
            return <FooterColumn key={column.title} column={column} />
          })}
        </div>
      )
}
