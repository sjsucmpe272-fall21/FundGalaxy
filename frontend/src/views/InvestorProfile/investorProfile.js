import React from "react";
import "./investorProfile.css"
class Investor extends React.Component {
  constructor(props) {
    super(props);
    this.state;
  }
  render() {

    return (

      <div>
        <div className="main-container">
          <div className="top-container ">

            <div className="profile block">
              <div className="profile-description">
                <h1 className="user-name">*Investor Name</h1>
                <h2 className="user-name"><span>Domain:</span>*Information Technology</h2>
                <span className="hashtag">*#InvestmentDomain</span> <span className="hashtag">*#InvestmentDomain</span>
                <p className="scnd-font-color">*Lorem ipsum dolor sit amet consectetuer adipiscing Lorem ipsum dolor
                  sit
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
                  <h2 className="titular">Invested Companies</h2>
                  <ul className="m-d expand-list">
                    <li data-md-content="200">
                      <label name="tab" >*CompanyName</label>
                      <input type="checkbox" />
                      <span className="open-close-icon">
                        <span className="entypo-plus"></span>
                        <span className="entypo-minus"></span>
                      </span>
                      <div className="content">
                        <ul className="menu-box-menu">
                          <li>
                            <a className="menu-box-tab">Total Funding <div className="menu-box-number">USD
                                                    *60.6M</div></a>
                          </li>
                          <li>
                            <a className="menu-box-tab">Stage <div className="menu-box-number">A</div></a>
                          </li>
                        </ul>
                      </div>
                    </li>

                  </ul>
                </div>
              </div>


              <div className="right-container container">

                <ul className="social block">

                  <li>
                    <a href="*">
                    <div className ="facebook icon"><span className ="zocial-facebook"></span></div>
                    <h2 className ="facebook titular">VISIT FACEBOOK</h2></a>
                  </li>
                <li><a href="*">
                  <div className ="twitter icon"><span className ="zocial-twitter"></span></div>
                  <h2 className ="twitter titular">VISIT TWITTER</h2></a>
                </li>
              <li><a href="*">

                <h2 className ="googleplus titular">VISIT WEBPAGE</h2></a>
              </li>
          </ul>


        </div>
      </div> 
        </div >
    </div >
      </div >

    );
  }
}

export default Investor;