import React from "react"
import { Nav, navLinks, Logo, Underline, mobileNav } from "./styles/Navbar.module.css"
import { Large } from "./styles/Container.module.css"
import logo from "../assets/images/brand.png"
import mobileLogo from "../assets/images/mobile-logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"

const Header = props => {
  return (
    <nav className={ Nav }>
      <div className={ Large }>
        <div className={ navLinks}>
          <Link to="#">
            <img src={logo} width="60px" className={Logo} alt="Jay Jariwala portfolio logo"/>
          </Link>
          <div className={mobileNav}>
            <Link to="#">
              <img
                src={mobileLogo}
                width="90px"
                className={mobileLogo}
                alt="Jay Jariwala portfolio logo"
              />
            </Link>
            <FontAwesomeIcon icon={faBars} size="2x" />
          </div>
          <ul>
            <li>
              <Link to="/abc" className={`${Underline}`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="#" className={`${Underline}`}>
                Work
              </Link>
            </li>
            <li>
              <Link to="#" className={`${Underline}`}>
                Certifications
              </Link>
            </li>
            <li>
              <Link to="#" className={`${Underline}`}>
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
