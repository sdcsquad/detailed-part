import React from 'react';
import ReactDOM from 'react-dom';
import DetailHead from './components/DetailHead.jsx';
import FollowingContents from './components/FollowingContents.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	data: null
    };
	}

  componentDidMount(){
    let idx = Math.floor(Math.random() * (101 - 1)) + 1;
    this.getOne(idx);
  }
  
  getOne(index){
    fetch(`/api/details/index/${index}`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          data: json
        })
      })
  }

  render(){
    console.log(this.state.data);
		return(
			<div>
          <section className="zlw-layout-lg zlw-layout-center">
              <main>
              {
                !this.state.data ? <div>loading...</div> :
                  <div>
                    <DetailHead data = {this.state.data}/>
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