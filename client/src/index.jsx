import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import DetailHead from './components/DetailHead.jsx';
import FollowingContents from './components/FollowingContents.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	data: []
    };
	}

  componentDidMount(){
    this.getOne(1);
  }
  
  getOne(index){
    fetch(`/api/details/index/${index}`)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({
          data: json
        })
      })
  }

	render(){
		return(
			<div>
          <section className="zlw-layout-lg zlw-layout-center">
              <main>
                  <DetailHead data = {this.state.data}/>
                  <div className="detail body main-contents zlw-lg-2-3 zlw-sm-2-2">
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
                  <FollowingContents data = {this.state.data}/>
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