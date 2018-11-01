import React from 'react';
import ReactDOM from 'react-dom';
import DetailHead from './components/DetailHead.jsx';
import FollowingContents from './components/FollowingContents.jsx';
import '../dist/style.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	data: null,
      isCal: false,
      overlay: false,
      opacityBool: false,
      opacity: 0,
      tooltip: false
    };

    // this.handleOutSide = this.handleOutSide.bind(this);
    this.showCal = this.showCal.bind(this);
	}

  componentDidMount(){
    let idx = Math.floor(Math.random() * (101 - 1)) + 1;
    this.getOne(idx);
  }

  showCal(){
    this.setState({
      isCal : !this.state.isCal,
      overlay: !this.state.overlay,
      opacityBool: !this.state.opacityBool
    }, () => this.opacity())
  }

  opacity(){
    if(this.state.opacityBool){
      this.setState({
        opacity: 0.1
      })
    } else {
      this.setState({
        opacity: 0
      })
    }
  }

  getOne(index){
    fetch(`/api/homes/${index}/detail-information`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          data: json
        })
      })
  }

  render(){
    let style = {
      opacity: this.state.opacity
    }
		return(
			<div>
          {
           this.state.isCal ? <div className="overlay" onClick={this.showCal} style={style}></div> : ''
          }
          <section className="zlw-layout-lg zlw-layout-center">
              <main>
              {
                !this.state.data ? <div>loading...</div> :
                  <div>
                    <DetailHead 
                      data = {this.state.data} 
                      handleClick = {this.showCal}
                      isCal = {this.state.isCal}/>
                    <div className="detail body main-contents zlw-lg-2-3 zlw-sm-2-2">
                        {this.state.data.body}
                    </div>
                    <FollowingContents data = {this.state.data}/>
                  </div>
              }
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