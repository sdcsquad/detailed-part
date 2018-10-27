import React from 'react';
import ReactDOM from 'react-dom';
import PopupCal from './PopupCal.jsx';

class DetailHead extends React.Component {
	constructor(props){
		super(props);
		this.state = {
            isCal: false
		}
	}
    
    showCal(){
        this.setState({
          isCal : !this.state.isCal
        })
      }

	render(){
		return (
            <div>
    			<div className="detail head">
                    <div className="title zlw-lg-2-3 zlw-sm-2-2">
                        <div className="main-title title">{this.props.data.address}</div>
                        <div className="sub-title title">8 beds 11 baths 16,232 sqft</div>
                    </div>
                    <div className="floater zlw-lg-1-3 zlw-sm-2-2">
                        <div className="price-area">
                            <div className="status">
                                <i className="fas fa-circle"></i>
                                New Construction
                            </div>
                            <div className="price">$75,000,000</div>
                            <div className="zestimate">
                                <span className="tooltip">Zestimate</span><sup>®</sup>
                                :${this.props.data.price}
                            </div>
                        </div>
                        <div className="calculator">
                            <div className="cal-head">Est. Mortgage</div>
                            <div className="estimate">$306,727/mo</div>
                            <div className="launch" onClick={this.showCal.bind(this)}>
                                <i className="fas fa-calculator"></i>
                                <span className="arrow"></span>
                                {
                                  this.state.isCal ? <PopupCal /> : ''
                                }
                            </div>
                            <div className="cal-btn">
                                <a href="#">
                                  <i className="fas fa-dollar-sign"></i>
                                  Get pre-qualified
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		)
	}
}

export default DetailHead;