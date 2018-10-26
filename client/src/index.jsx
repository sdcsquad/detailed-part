import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	isCal: false
    };
	}
  showCal(){
    this.setState({
      isCal : !this.state.isCal
    })
  }
	render(){
		return(
			<div>
          <section class="zlw-layout-lg zlw-layout-center">
              <main>
                  <div class="detail head">
                      <div class="title zlw-lg-2-3 zlw-sm-2-2">
                          <div class="main-title title">300 STATE ROUTE 28 Crystal Bay, NV 89402</div>
                          <div class="sub-title title">8 beds 11 baths 16,232 sqft</div>
                      </div>
                      <div class="floater zlw-lg-1-3 zlw-sm-2-2">
                          <div class="price-area">
                              <div class="status">
                                  <i class="fas fa-circle"></i>
                                  New Construction
                              </div>
                              <div class="price">$75,000,000</div>
                              <div class="zestimate">
                                  <span class="tooltip">Zestimate</span><sup>®</sup>
                                  :$95,397,060
                              </div>
                          </div>
                          <div class="calculator">
                              <div class="cal-head">Est. Mortgage</div>
                              <div class="estimate">$306,727/mo</div>
                              <div class="launch" onClick={this.showCal.bind(this)}>
                                  <i class="fas fa-calculator"></i>
                                  <span class="arrow"></span>
                                  {
                                    this.state.isCal ? <div class="popup-cal">
                                        <div class="cal-title">
                                            Estimated Monthly Payment
                                        </div>
                                        <div class="cal-body">
                                            <div class="banner">
                                                <div class="banner-text">
                                                    Your payment:
                                                    <b><span class="cal-payment">$310,498</span>/mo</b>
                                                </div>
                                                <div class="cal-btn">
                                                    <a href="#">
                                                            Get pre-qualified
                                                          </a>
                                                </div>
                                            </div>
                                            <div class="sub-text">
                                                Estimated taxes & insurance of $56,317 are not included.
                                            </div>
                                        </div>
                                        <div class="cal-form">
                                            <div class="inner-cal-form">
                                                <div class="acol">
                                                    <div class="form-field">
                                                        <label for="homePrice">Home Price</label>
                                                        <div class="cal-each-input">
                                                            <div class="text-left">$</div>
                                                            <input class="left-type" type="text" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="bcol">
                                                    <div class="form-field split">
                                                        <label for="homePrice">Home Price</label>
                                                        <div class="cal-each-input">
                                                            <div class="text-left">$</div>
                                                            <input class="left-type" type="text" />
                                                        </div>
                                                        <div class="cal-each-input">
                                                            <div class="text-right">%</div>
                                                            <input class="right-type" type="text" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="acol">
                                                    <div class="form-field">
                                                        <label for="homePrice">Home Price</label>
                                                        <div class="cal-each-input">
                                                            <div class="text-right triangle"></div>
                                                            <input class="right-type" type="text" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="bcol">
                                                    <div class="form-field">
                                                        <label for="homePrice">Home Price</label>
                                                        <div class="cal-each-input">
                                                            <div class="text-right">%</div>
                                                            <input class="right-type" type="text" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="advanced">Advanced</div>
                                        </div></div> : ''
                                  }
                              </div>
                              <div class="cal-btn">
                                  <a href="#">
                                    <i class="fas fa-dollar-sign"></i>
                                    Get pre-qualified
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="detail body main-contents zlw-lg-2-3 zlw-sm-2-2">
                      Lake Tahoe's Crown Jewel is offered for sale for the first time. This is the first of Tahoe's next generation of properties. Built with creativity, ingenuity and love, Crystal Pointe is an epic lakefront masterpiece cradling the contour of the land on 5.14 private acres with two lakefront parcels. 525' of lakefront, 4 buoys, seasonal 32' barge and 16,232 total square feet of living space. Main residence, guest house and beach house.
                      525 Feet of Lakefront
                      5.14 Acres - 2 Lakefront Parcels
                      4 Buoys - Seasonal 32' Barge
                      Utmost Privacy - Adjoining Forest Service Land
                      Private Gated Drive - Entry Pavilion
                      Main Residence with attached Guest House
                      Beach House with Terraced Beach
                      Caretaker Apartment
                      16,232 Square Feet of Total Living Space
                      13 Fireplaces
                      10 Seat Theatre
                      1,687 Bottle Wine Cellar
                      8 Bedrooms
                      10 Full Bathrooms
                      2 Half Bathrooms
                      4-Car Oversized Garage
                      2 Funiculars
                      2 Elevators
                      Magical Gardens
                      Ponds and Waterfalls
                      Nevada Tax Advantages
                  </div>
                  <div class="following-contents">
                      <div class="follow-fact">
                          <div class="features">
                              <div class="title sub-title">Facts and Features</div>
                              <div class="body">
                                  <div class="facts module-group">
                                      <div class="feature-module zlw-lg-1-3 zlw-sm-1-2">
                                          <div class="module-img">
                                              <i class="far fa-building"></i>
                                          </div>
                                          <div class="module-text">
                                              <div class="label">type</div>
                                              <div class="body">Single Family</div>
                                          </div>
                                      </div>
                                      <div class="feature-module zlw-lg-1-3 zlw-sm-1-2">
                                          <div class="module-img">
                                              <i class="far fa-sticky-note"></i>
                                          </div>
                                          <div class="module-text">
                                              <div class="label">Year Built</div>
                                              <div class="body">1997</div>
                                          </div>
                                      </div>
                                      <div class="feature-module zlw-lg-1-3 zlw-sm-1-2">
                                          <div class="module-img">
                                              <i class="fas fa-thermometer-three-quarters"></i>
                                          </div>
                                          <div class="module-text">
                                              <div class="label">Heating</div>
                                              <div class="body">Other</div>
                                          </div>
                                      </div>
                                      <div class="feature-module zlw-lg-1-3 zlw-sm-1-2">
                                          <div class="module-img">
                                              <i class="far fa-snowflake"></i>
                                          </div>
                                          <div class="module-text">
                                              <div class="label">Cooling</div>
                                              <div class="body">No Data</div>
                                          </div>
                                      </div>
                                      <div class="feature-module zlw-lg-1-3 zlw-sm-1-2">
                                          <div class="module-img">
                                              <i class="fas fa-parking"></i>
                                          </div>
                                          <div class="module-text">
                                              <div class="label">Parking</div>
                                              <div class="body">No Data</div>
                                          </div>
                                      </div>
                                      <div class="feature-module zlw-lg-1-3 zlw-sm-1-2">
                                          <div class="module-img">
                                              <i class="fas fa-expand"></i>
                                          </div>
                                          <div class="module-text">
                                              <div class="label">Lot</div>
                                              <div class="body">5.14 acres</div>
                                          </div>
                                      </div>
                                      <div class="feature-module zlw-lg-1-3 zlw-sm-1-2">
                                          <div class="module-img">
                                              <i class="far fa-clock"></i>
                                          </div>
                                          <div class="module-text">
                                              <div class="label">Days on Zillow</div>
                                              <div class="body">208 Days</div>
                                          </div>
                                      </div>
                                      <div class="feature-module zlw-lg-1-3 zlw-sm-1-2">
                                          <div class="module-img">
                                              <i class="fas fa-dollar-sign"></i>
                                          </div>
                                          <div class="module-text">
                                              <div class="label">Price/sqft</div>
                                              <div class="body">$4,621</div>
                                          </div>
                                      </div>
                                      <div class="feature-module zlw-lg-1-3 zlw-sm-1-2">
                                          <div class="module-img">
                                              <i class="fas fa-users"></i>
                                          </div>
                                          <div class="module-text">
                                              <div class="label">Saves</div>
                                              <div class="body">501</div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="follow-details">
                          <div class="details">
                              <div class="detail-title">
                                  interior features
                              </div>
                              <div class="body">
                                  <div class="details module-group">
                                      <div class="feature-module zlw-lg-1-2 zlw-sm-1-2">
                                          <div class="module-text">
                                              <div class="label">Bedsrooms</div>
                                              <div class="body">
                                                  <span class="detail-module-title">beds:</span>
                                                  8
                                              </div>
                                          </div>
                                      </div>
                                      <div class="feature-module zlw-lg-1-2 zlw-sm-1-2">
                                          <div class="module-text">
                                              <div class="label">Bedsrooms</div>
                                              <div class="body">
                                                  <span class="detail-module-title">beds:</span>
                                                  8
                                              </div>
                                          </div>
                                      </div>
                                      <div class="feature-module zlw-lg-1-2 zlw-sm-1-2">
                                          <div class="module-text">
                                              <div class="label">Bedsrooms</div>
                                              <div class="body">
                                                  <span class="detail-module-title">beds:</span>
                                                  8
                                              </div>
                                          </div>
                                      </div>
                                      <div class="feature-module zlw-lg-1-2 zlw-sm-1-2">
                                          <div class="module-text">
                                              <div class="label">Bedsrooms</div>
                                              <div class="body">
                                                  <span class="detail-module-title">beds:</span>
                                                  8
                                              </div>
                                          </div>
                                      </div>
                                      <div class="feature-module zlw-lg-1-2 zlw-sm-1-2">
                                          <div class="module-text">
                                              <div class="label">Bedsrooms</div>
                                              <div class="body">
                                                  <span class="detail-module-title">beds:</span>
                                                  8
                                              </div>
                                          </div>
                                      </div>
                                      <div class="feature-module zlw-lg-1-2 zlw-sm-1-2">
                                          <div class="module-text">
                                              <div class="label">Bedsrooms</div>
                                              <div class="body">
                                                  <span class="detail-module-title">beds:</span>
                                                  8
                                              </div>
                                          </div>
                                      </div>
                                      <div class="feature-module zlw-lg-1-2 zlw-sm-1-2">
                                          <div class="module-text">
                                              <div class="label">Bedsrooms</div>
                                              <div class="body">
                                                  <span class="detail-module-title">beds:</span>
                                                  8
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="follow-details">
                          <div class="details">
                              <div class="detail-title">
                                  interior features
                              </div>
                              <div class="body">
                                  <div class="details module-group">
                                      <div class="feature-module zlw-lg-1-2 zlw-sm-1-2">
                                          <div class="module-text">
                                              <div class="label">Bedsrooms</div>
                                              <div class="body">
                                                  <span class="detail-module-title">beds:</span>
                                                  8
                                              </div>
                                          </div>
                                      </div>
                                      <div class="feature-module zlw-lg-1-2 zlw-sm-1-2">
                                          <div class="module-text">
                                              <div class="label">Bedsrooms</div>
                                              <div class="body">
                                                  <span class="detail-module-title">beds:</span>
                                                  8
                                              </div>
                                          </div>
                                      </div>
                                      <div class="feature-module zlw-lg-1-2 zlw-sm-1-2">
                                          <div class="module-text">
                                              <div class="label">Bedsrooms</div>
                                              <div class="body">
                                                  <span class="detail-module-title">beds:</span>
                                                  8
                                              </div>
                                          </div>
                                      </div>
                                      <div class="feature-module zlw-lg-1-2 zlw-sm-1-2">
                                          <div class="module-text">
                                              <div class="label">Bedsrooms</div>
                                              <div class="body">
                                                  <span class="detail-module-title">beds:</span>
                                                  8
                                              </div>
                                          </div>
                                      </div>
                                      <div class="feature-module zlw-lg-1-2 zlw-sm-1-2">
                                          <div class="module-text">
                                              <div class="label">Bedsrooms</div>
                                              <div class="body">
                                                  <span class="detail-module-title">beds:</span>
                                                  8
                                              </div>
                                          </div>
                                      </div>
                                      <div class="feature-module zlw-lg-1-2 zlw-sm-1-2">
                                          <div class="module-text">
                                              <div class="label">Bedsrooms</div>
                                              <div class="body">
                                                  <span class="detail-module-title">beds:</span>
                                                  8
                                              </div>
                                          </div>
                                      </div>
                                      <div class="feature-module zlw-lg-1-2 zlw-sm-1-2">
                                          <div class="module-text">
                                              <div class="label">Bedsrooms</div>
                                              <div class="body">
                                                  <span class="detail-module-title">beds:</span>
                                                  8
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="follow-details">
                          <div class="details">
                              <div class="detail-title">
                                  interior features
                              </div>
                              <div class="body">
                                  <div class="details module-group">
                                      <div class="feature-module zlw-lg-1-2 zlw-sm-1-2">
                                          <div class="module-text">
                                              <div class="label">Bedsrooms</div>
                                              <div class="body">
                                                  <span class="detail-module-title">beds:</span>
                                                  8
                                              </div>
                                          </div>
                                      </div>
                                      <div class="feature-module zlw-lg-1-2 zlw-sm-1-2">
                                          <div class="module-text">
                                              <div class="label">Bedsrooms</div>
                                              <div class="body">
                                                  <span class="detail-module-title">beds:</span>
                                                  8
                                              </div>
                                          </div>
                                      </div>
                                      <div class="feature-module zlw-lg-1-2 zlw-sm-1-2">
                                          <div class="module-text">
                                              <div class="label">Bedsrooms</div>
                                              <div class="body">
                                                  <span class="detail-module-title">beds:</span>
                                                  8
                                              </div>
                                          </div>
                                      </div>
                                      <div class="feature-module zlw-lg-1-2 zlw-sm-1-2">
                                          <div class="module-text">
                                              <div class="label">Bedsrooms</div>
                                              <div class="body">
                                                  <span class="detail-module-title">beds:</span>
                                                  8
                                              </div>
                                          </div>
                                      </div>
                                      <div class="feature-module zlw-lg-1-2 zlw-sm-1-2">
                                          <div class="module-text">
                                              <div class="label">Bedsrooms</div>
                                              <div class="body">
                                                  <span class="detail-module-title">beds:</span>
                                                  8
                                              </div>
                                          </div>
                                      </div>
                                      <div class="feature-module zlw-lg-1-2 zlw-sm-1-2">
                                          <div class="module-text">
                                              <div class="label">Bedsrooms</div>
                                              <div class="body">
                                                  <span class="detail-module-title">beds:</span>
                                                  8
                                              </div>
                                          </div>
                                      </div>
                                      <div class="feature-module zlw-lg-1-2 zlw-sm-1-2">
                                          <div class="module-text">
                                              <div class="label">Bedsrooms</div>
                                              <div class="body">
                                                  <span class="detail-module-title">beds:</span>
                                                  8
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="follow-details">
                          <div class="details">
                              <div class="detail-title">
                                  interior features
                              </div>
                              <div class="body">
                                  <div class="details module-group">
                                      <div class="feature-module zlw-lg-1-2 zlw-sm-1-2">
                                          <div class="module-text">
                                              <div class="label">Bedsrooms</div>
                                              <div class="body">
                                                  <span class="detail-module-title">beds:</span>
                                                  8
                                              </div>
                                          </div>
                                      </div>
                                      <div class="feature-module zlw-lg-1-2 zlw-sm-1-2">
                                          <div class="module-text">
                                              <div class="label">Bedsrooms</div>
                                              <div class="body">
                                                  <span class="detail-module-title">beds:</span>
                                                  8
                                              </div>
                                          </div>
                                      </div>
                                      <div class="feature-module zlw-lg-1-2 zlw-sm-1-2">
                                          <div class="module-text">
                                              <div class="label">Bedsrooms</div>
                                              <div class="body">
                                                  <span class="detail-module-title">beds:</span>
                                                  8
                                              </div>
                                          </div>
                                      </div>
                                      <div class="feature-module zlw-lg-1-2 zlw-sm-1-2">
                                          <div class="module-text">
                                              <div class="label">Bedsrooms</div>
                                              <div class="body">
                                                  <span class="detail-module-title">beds:</span>
                                                  8
                                              </div>
                                          </div>
                                      </div>
                                      <div class="feature-module zlw-lg-1-2 zlw-sm-1-2">
                                          <div class="module-text">
                                              <div class="label">Bedsrooms</div>
                                              <div class="body">
                                                  <span class="detail-module-title">beds:</span>
                                                  8
                                              </div>
                                          </div>
                                      </div>
                                      <div class="feature-module zlw-lg-1-2 zlw-sm-1-2">
                                          <div class="module-text">
                                              <div class="label">Bedsrooms</div>
                                              <div class="body">
                                                  <span class="detail-module-title">beds:</span>
                                                  8
                                              </div>
                                          </div>
                                      </div>
                                      <div class="feature-module zlw-lg-1-2 zlw-sm-1-2">
                                          <div class="module-text">
                                              <div class="label">Bedsrooms</div>
                                              <div class="body">
                                                  <span class="detail-module-title">beds:</span>
                                                  8
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </main>
          </section>
      </div>
		)
	}
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);