import React from 'react'
import Link from 'gatsby-link'
import FooterWidget from '../components/footer-widget'

const IndexPage = () => (

<div>
    <div className="section pfp-bg">
        <div className="container p-40">
            <div className="row mb0">
                <div className="col s12 center-align">
                    <img src="https://www.fownders.co/hubfs/Fownders%20Logos/PMP-logo.svg" alt="Purpose Meets Profit" height={175}/>
                    <h1 className="f-38 white-text text-uppercase">Purpose Meets Profit </h1>
                    <p className="f-18 white-text justify-text">We have all heard it before, follow your passion! That’s cool, but what if your passion doesn’t pay the bills? Well, who says you have to choose between making a difference and making a profit?</p>
                    <p className="f-18 white-text justify-text"> Welcome to the Purpose Meets Profit podcast! Hosted by two millennial entrepreneurs, Logan Cohen and Gerard Adams, who let their purpose drive them while the profit keeps the lights on!</p>
                    <p className="f-18 white-text justify-text">Gerard is a serial entrepreneur and philanthropist who continues to innovate even with multiple successful exits under his belt. While Logan is a social impact entrepreneur who is sharing her learning experiences while in the pursuit of startup greatness.</p>
                    <p className="f-18 white-text justify-text">Oh, and things get interesting… did we mention that Gerard is an investor in Logan’s company?</p>
                    <p className="f-18 white-text justify-text">Tune in for a refreshing, purpose-driven take on entrepreneurship!<br/></p>
                </div>
            </div>
            <div className="row mb0 p-20">
                <div className="col s6 right-align">
                    {/*<iframe width="100%" height={166} scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/345515317&color=59d8cd" />*/}
                    <a href="https://soundcloud.com/purposemeetsprofit/">
                        <img src="../static/soundcloud-button.png" alt="" height={52}/>
                    </a>

                </div>
                <div className="col s6 left-align">
                    <a href="https://itunes.apple.com/us/podcast/purpose-meets-profit/id1293556525?mt=2">
                        <img src="../static/itunes.png" alt="" height={52}/>
                    </a>

                </div>
            </div>
        </div>
    </div>

    <div className="container">
        <div className="row mb0 p-40">
            <div className="col s12 m4 left-align">
                <img className="img-reverse" src="https://fownders.s3.us-east-2.amazonaws.com/gerard-thumbnail.jpg" alt="Gerard Adams"/>
            </div>
            <div className="col s12 m8 left-align">
                <h3 className="f-32 turquoise-text">Gerard Adams</h3>
                <p className="f-18 turquoise-text justify-text">Gerard, also known as The Millennial Mentor™, is a thought leader, serial entrepreneur, angel investor, and philanthropist. His purpose is simple: to inspire other Millennials to leverage their passion to create the successful lifestyles they dream of. I became a self-made multi-millionaire at 24, but not without overcoming obstacles, fear, and self-doubt. I left college early, after a semester to be exact, to pave my own path.</p>
                <div className="col s1 m1 p0">
                    <a href="https://www.youtube.com/channel/UCTlTCi6PIs1D9BSpC-oA4lQ"><i className="fa fa-youtube-play fa-lg grey-text-2" aria-hidden="true"/></a>
                </div>
                <div className="col s1 m1 p0">
                    <a href="https://twitter.com/iamgerardadams?lang=en"><i className="fa fa-twitter fa-lg grey-text-2" aria-hidden="true"/></a>
                </div>
                <div className="col s1 m1 p0">
                    <a href="https://www.facebook.com/gerard.adams?ref=br_rs"><i className="fa fa-facebook-square fa-lg grey-text-2" aria-hidden="true"/></a>
                </div>
                <div className="col s1 m1 p0">
                    <a href="https://www.instagram.com/gerardadams/?hl=en"><i className="fa fa-instagram fa-lg grey-text-2" aria-hidden="true"/></a>
                </div>
            </div>
        </div>
        <hr className="mb0"/>
        <div className="row mb0 p-40">
            <div className="col s12 m4 left-align">
                <img className="img-reverse" src="https://fownders.s3.us-east-2.amazonaws.com/logan-cohen.jpg" alt="Logan Cohen"/>
            </div>
            <div className="col s12 m8 left-align">
                <h3 className="f-32 turquoise-text">Logan Cohen</h3>
                <p className="f-18 turquoise-text justify-text">Logan is a co-founder and co-CEO of KÜDZOO, the free mobile app that connects brands with Gen. Z through an educational lens. On KÜDZOO, students submit their grades, attendance, grade average improvement, and good habits for KÜDZOO Cash that they can use to go shopping for real rewards.</p>
                <p className="f-18 turquoise-text justify-text">With over half a million students using KÜDZOO, Logan is spearheading an in-class version, KÜDZOOVERIFIED, so that schools can use KÜDZOO’s services as an engagement resource.</p>
                <p className="f-18 turquoise-text justify-text">Logan’s leadership responsibilities include guiding the vision, strategy, and ensuring the execution of value creating milestones for KÜDZOO. She received dual degrees in Finance and International Business from Florida International University. Logan was named to Forbes 30 Under 30 in education for the class of 2016, Magic Johnson’s 32 under 32, and CIO’s Top 20 Female Entrepreneurs to Watch in 2017.</p>
                <p className="f-18 turquoise-text justify-text">Get Logan on her soapbox by asking about gender equality (especially in the funding gap!). She couldn’t agree more with Claire Underwood that flats are only for running, her sarcasm is an acquired taste, and if it were up to her - sriracha would be an accepted food group!</p>
                <div className="col s1 m1 p0">
                    <a href="https://www.youtube.com/channel/UCFiGdBg1DHHsKMQJmPJoh_Q"><i className="fa fa-youtube-play fa-lg grey-text-2" aria-hidden="true"/></a>
                </div>
                <div className="col s1 m1 p0">
                    <a href="https://twitter.com/loganecohen?lang=en"><i className="fa fa-twitter fa-lg grey-text-2" aria-hidden="true"/></a>
                </div>
                <div className="col s1 m1 p0">
                    <a href="https://www.facebook.com/LoganCohen?ref=br_rs"><i className="fa fa-facebook-square fa-lg grey-text-2" aria-hidden="true"/></a>
                </div>
                <div className="col s1 m1 p0">
                    <a href="https://www.instagram.com/logansee/?hl=en"><i className="fa fa-instagram fa-lg grey-text-2" aria-hidden="true"/></a>
                </div>
            </div>
        </div>
    </div>
    <div className="brand-grey-2">
        <div className="container p-40">
            <div className="row mb0">
                <div className="col s12 left-align mobile-center">
                    <h3 className="f-32 turquoise-text m0">Our Latest Podcast <a className="hide-on-small-only" href="https://itunes.apple.com/us/podcast/purpose-meets-profit/id1293556525"><i className="f-22 fa fa-apple grey-text-3 left-align" aria-hidden="true"/></a> <a className="hide-on-small-only" href="https://soundcloud.com/purposemeetsprofit/lets-define-success"><i className="f-22 fa fa-soundcloud grey-text-3 right-align" aria-hidden="true"/></a></h3>
                </div>
                <div className="col s6 right-align hide-on-med-and-up">
                    <a href="https://itunes.apple.com/us/podcast/purpose-meets-profit/id1293556525"><i className="fa fa-apple fa-lg grey-text-3 left-align" aria-hidden="true"/></a>
                </div>
                <div className="col s6 left-align hide-on-med-and-up">
                    <a href="https://soundcloud.com/purposemeetsprofit/lets-define-success"><i className="fa fa-soundcloud fa-lg grey-text-3 right-align" aria-hidden="true"/></a>
                </div>
                <div className="col s12 left-align mobile-center">
                    <p className="f-18 grey-text-5 bold-text">Navigating Fundraising (Getting Scrappy & Making Money!)</p>
                </div>
            </div>
            <div className="row mb0">
                <div className="col s12 center-align">
                    <br/>
                    <iframe className="mb0" width="100%" height={166} scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/345515317&color=%2359d8cd&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
                </div>
            </div>
        </div>
    </div>
    <FooterWidget/>
</div>


)

export default IndexPage
