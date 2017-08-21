import React from 'react'
import ReactDOM from 'react-dom'

export default class LoadingBar extends React.Component{
	constructor(props){
		super(props);
		this.bar;
	}

	componentWillUpdate(nextProps){
	}

	componentDidUpdate(preProps){
		if(this.props.progress==100){
			setTimeout(function(){
				$(this.bar).css('display','none');
			}.bind(this),1500);
		}
		if(this.props.progress ==0){
			$(this.bar).css('display','block');
		}
	}

	componentDidMount(){
	}

	render(){
		return <div className="loading-bar-wrap">
			{typeof this.props.showBar != 'undefined' && this.props.showBar ===false?'':<div className="loading-bar transition-all-ones" style={{width:this.props.progress+'%',backgroundColor:this.props.bcolor}} ref={(el) => {this.bar = el}}></div>}
			{Boolean(this.props.showSpin) === false?'':<div className="loading-spin" ref={el=> this.bar = el}></div>}
		</div>
	}
}