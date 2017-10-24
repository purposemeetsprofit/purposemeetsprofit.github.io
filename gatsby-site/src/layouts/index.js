import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import '../../bower_components/materialize/dist/css/materialize.min.css'
import './fonts/MyFontsWebfontsKit.css'
import './index.css'
import './font-awesome.css'

let divStyle = {
    backgroundColor:'white',
    boxShadow:'none',
    padding:'0 60px'
};

const Header = () => (
    <nav style={divStyle}>
        <div className="nav-wrapper">
            <a href="#" className="brand-logo turquoise-text-1 f-18 text-uppercase bold-text"><img src="https://fownders.s3.us-east-2.amazonaws.com/PMP-profile.png" alt="Purpose Meets Profit" width={40}/></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="https://www.youtube.com/channel/UColDe80cdpOMHn3d7ecJxVg"><i className="fa fa-youtube-play turquoise-text-1" aria-hidden="true"/></a></li>
                <li><a href="https://twitter.com/Fownders?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i className="fa fa-twitter turquoise-text-1" aria-hidden="true"/></a></li>
                <li><a href="https://www.facebook.com/fowndersnewark/"><i className="fa fa-facebook-square turquoise-text-1" aria-hidden="true"/></a></li>
                <li><a href="https://www.instagram.com/fownders/?hl=en"><i className="fa fa-instagram turquoise-text-1" aria-hidden="true"/></a></li>
            </ul>
        </div>
    </nav>
)

const TemplateWrapper = ({ children }) => (
    <div>
        <Helmet
            title="Gatsby Default Starter"
            meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
            ]}
        />
        <Header />
        <div
            style={{
                // margin: '0 auto',
                // maxWidth: 960,
                // padding: '0px 1.0875rem 1.45rem',
                // paddingTop: 0,
            }}
        >
            {children()}
        </div>
    </div>
)

TemplateWrapper.propTypes = {
    children: PropTypes.func,
}

export default TemplateWrapper