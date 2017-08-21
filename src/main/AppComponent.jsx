import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/common/HeaderComponent.jsx'
import {Footer} from './components/common/FooterComponent.jsx'
import LoadingBar from 'src/main/common/components/LoadingComponent.jsx'

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {progress:0};
		this.timer;
		this.start = this.start.bind(this);
		this.loading = this.loading.bind(this);
		this.loadEnd = this.loadEnd.bind(this);
	}

	start(){
		this.setState({progress:0});
		if(this.timer)clearTimeout(this.timer);
		this.timer = setTimeout(function(){
			this.setState({progress:Math.random()*3+1});
			this.loading();
		}.bind(this),250)
	}

	loading(){
		if(this.timer)clearTimeout(this.timer);
		this.timer = setTimeout(function(){
			var i = this.state.progress;
			if(i<60){
				i += Math.random()*3+1;
			}else if(i<70 && i>=60){
				i += Math.random()*2+1;
			}else if(i<80 && i>=70){
				i += Math.random()*1.5+1;
			}else if(i<95 && i>=80){
				i += Math.random()*1+1;
			}
			this.setState({progress:i})
			this.loading();
		}.bind(this),250)
	}

	loadEnd(){
		if(this.timer)clearTimeout(this.timer);
		this.timer = setTimeout(function(){
			this.setState({progress:100});
		}.bind(this),100)
	}

	componentDidMount(){
		
	}

	render(){
		return <div>
			<LoadingBar progress={this.state.progress}/>
			<Header/>
			<div className="container container_index">
				{this.props.children}
			</div>
			<Footer/>
		</div>
	}
}


export default App;