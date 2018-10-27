import React from 'react';

class PopupCal extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			data: []
		}
	}

	render(){
		return (
			<div>
				<div className="popup-cal">
			    <div className="cal-title">
			        Estimated Monthly Payment
			    </div>
			    <div className="cal-body">
			        <div className="banner">
			            <div className="banner-text">
			                Your payment:
			                <b><span className="cal-payment">$310,498</span>/mo</b>
			            </div>
			            <div className="cal-btn">
			                <a href="#">Get pre-qualified</a>
			            </div>
			        </div>
			        <div className="sub-text">
			            Estimated taxes & insurance of $56,317 are not included.
			        </div>
			    </div>
			    <div className="cal-form">
			        <div className="inner-cal-form">
			            <div className="acol">
			                <div className="form-field">
			                    <label for="homePrice">Home Price</label>
			                    <div className="cal-each-input">
			                        <div className="text-left">$</div>
			                        <input className="left-type" type="text" />
			                    </div>
			                </div>
			            </div>
			            <div className="bcol">
			                <div className="form-field split">
			                    <label for="homePrice">Home Price</label>
			                    <div className="cal-each-input">
			                        <div className="text-left">$</div>
			                        <input className="left-type" type="text" />
			                    </div>
			                    <div className="cal-each-input">
			                        <div className="text-right">%</div>
			                        <input className="right-type" type="text" />
			                    </div>
			                </div>
			            </div>
			            <div className="acol">
			                <div className="form-field">
			                    <label for="homePrice">Home Price</label>
			                    <div className="cal-each-input">
			                        <div className="text-right triangle"></div>
			                        <input className="right-type" type="text" />
			                    </div>
			                </div>
			            </div>
			            <div className="bcol">
			                <div className="form-field">
			                    <label for="homePrice">Home Price</label>
			                    <div className="cal-each-input">
			                        <div className="text-right">%</div>
			                        <input className="right-type" type="text" />
			                    </div>
			                </div>
			            </div>
			        </div>
			        <div className="advanced">Advanced</div>
			    </div>
		    </div>
	    </div>
		)
	}
}

export default PopupCal;