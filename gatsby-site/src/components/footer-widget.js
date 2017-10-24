/**
 * Created by tayloremolo on 10/20/17.
 */
import React, {Component} from 'react';
import ReactDOM from "react-dom";
// import Vivus from "vivus";


class FooterWidget extends Component {
    constructor() {
        super();

    }
    componentDidMount(){
        new Vivus('carpenter-logo', {
            type: 'delayed',
            duration: 200,
            animTimingFunction: Vivus.EASE_OUT
        });
    }

    render() {

        return (
        <div>
            <div className="row mb0 black p-40">
                <div className="col s12 center-align">
                    <div className="container">
                        <p className="f-16 center-align white-text">Powered By</p>
                        <a href="https://app.fownders.com/" className="brand-logo"><img className="responsive-img" src="https://fowndershub.imgix.net/hubfs/Fownders%20Logos/White-Fownders-Logo-Footer.png" height={55} width={160}/></a>
                    </div>
                </div>
            </div>
        </div>
        )

    }

}

export default FooterWidget;