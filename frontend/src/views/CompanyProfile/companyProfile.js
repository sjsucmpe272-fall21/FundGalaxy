import React from "react";
import "./companyProfile.css"

class Company extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div className="main-container">
                    <div className="top-container">

                        <div className="profile block">
                            <div className="profile-description">
                                <h1 className="user-name">*Company Name</h1>
                                <h4><span>Domain:</span>*Information Technology</h4>
                                <span className="hashtag">*#InvestmentDomain</span> <span className="hashtag">*#InvestmentDomain</span>
                                <p className="scnd-font-color">*Lorem ipsum dolor sit amet consectetuer adipiscing Lorem ipsum dolor sit
                                    amet consectetuer adipiscing Lorem ipsum dolor sit amet consectetuer adipiscing Lorem ipsum
                                    dolor sit amet consectetuer adipiscing Lorem ipsum dolor sit amet consectetuer adipiscing </p>
                            </div>
                            <div className="bottom">
                                <a href="*link" className="btn"><span>Visit website</span></a>
                            </div>

                        </div>
                    </div>
                    <div>

                        <div className="">

                            <div className="left-container container">
                                <div className="menu-box block">

                                    <h2 className="titular">Contact Info</h2>
                                    <div className="vcard">
                                        <div className="bottom">
                                            <address className="vertical">*1031 19th Street N, Bessemer, AL 35020</address>

                                            <div className="vcontact">
                                                <span className="phone">Phone: *(205) 429-8046</span> <br />
                                                <span className="mobile">Mobile: *(205) 123-4567</span> <br />
                                                <span className="email">Email: *bJones@fastenal.com</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="middle-container container">
                                <div className="menu-box block">

                                    <h2 className="titular">Info</h2>
                                    <ul className="menu-box-menu">

                                        <li>
                                            <a className="menu-box-tab" href="#8"><span
                                                className="icon entypo-cc-by scnd-font-color"></span>Employee Count<div
                                                    className="menu-box-number">*11-50</div></a>
                                        </li>
                                        <li>
                                            <a className="menu-box-tab" href="#10"><span
                                                className="icon entypo-calendar scnd-font-color"></span>Founded<div
                                                    className="menu-box-number">*2019</div></a>
                                        </li>
                                        <li>
                                            <a className="menu-box-tab" href="#6"><span
                                                className="icon entypo-info-circled scnd-font-color"></span>Number of Funding Rounds: <div
                                                    className="menu-box-number">*2</div></a>
                                        </li>
                                        <li>
                                            <a className="menu-box-tab" href="#6"><span
                                                className="icon entypo-right-open scnd-font-color"></span>Total Funding: <div className="menu-box-number">USD
                                        *60.6M</div></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>


                            <div className="right-container container">
                                <div>
                                    <ul className="people-list">
                                        <li className="people-li">*John&nbsp;Smith</li>
                                        <li className="people-li">*John&nbsp;Smith</li>
                                        <li className="people-li">*John&nbsp;Smith</li>
                                    </ul>
                                </div>
                                <ul className="social block">

                                    <li><a href="*">
                                        <div className="facebook icon"><span className="zocial-facebook"></span></div>
                                        <h2 className="facebook titular">VISIT FACEBOOK</h2></a>
                                    </li>
                                    <li><a href="*">
                                        <div className="twitter icon"><span className="zocial-twitter"></span></div>
                                        <h2 className="twitter titular">VISIT TWITTER</h2></a>
                                    </li>
                                    <li><a href="*">

                                        <h2 className="googleplus titular">VISIT WEBPAGE</h2></a>
                                    </li>
                                </ul>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Company;