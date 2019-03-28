import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import pic03 from '../assets/images/thelabo-v2.png'

const Header = (props) => (
    <header id="header" className="alt">
        <Link to="/" className="logo">
            <span className="image fit"><img src={pic03} alt="" /></span>
        </Link>
        {/* <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>
        </nav> */}
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
