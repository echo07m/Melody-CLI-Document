import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Style from '../styles/hearder.css'
import headerConfig from '../config/headerConfig'

const navItem = headerConfig.content.map((item)=>{
    return (
      <span className="navItem">
        <Link
          to={item.path}
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {item.label}
        </Link>
      </span>
    )
  }
)

const Header = ({ siteTitle }) => (
  <header className="headerRoot">
    <div className="headerContent">
      <div className="headerLogo">
        <h1>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
      <div className="navContent">
        { navItem }
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
