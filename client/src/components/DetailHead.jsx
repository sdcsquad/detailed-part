import React from 'react';
import ReactDOM from 'react-dom';
import PopupCal from './PopupCal.jsx';

const DetailHead = (props) => (
    <div>
        <div className="detail head">
            <div className="title zlw-lg-2-3 zlw-sm-2-2">
                <div className="main-title title">{props.data.address}</div>
                <div className="sub-title title">{props.data.subTitle}</div>
            </div>
            <div className="floater zlw-lg-1-3 zlw-sm-2-2">
                <div className="price-area">
                    <div className="status">
                        <i className="fas fa-circle"></i>
                        New Construction
                    </div>
                    <div className="price">${props.data.price.toLocaleString()}</div>
                    <div className="zestimate">
                        <span className="tooltip">Zestimate</span><sup>®</sup>
                        : ${Math.floor(props.data.price * 1.73).toLocaleString()}
                    </div>
                </div>
                <div className="calculator">
                    <div className="cal-head">Est. Mortgage</div>
                    <PopupCal 
                        price={props.data.price} 
                        handleClick = {props.handleClick}
                        isCal = {props.isCal}/>
                    <div className="cal-btn">
                        <a href="#"><i className="fas fa-dollar-sign"></i> Get pre-qualified</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default DetailHead;