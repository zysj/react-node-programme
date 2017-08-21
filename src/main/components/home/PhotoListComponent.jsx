import React from 'react'
import ReactDOM from 'react-dom'
import {LanternName,ropeLong} from './LanternComponent.jsx'
import {PhotoFrame} from 'src/main/common/components/uiComponent.jsx'

class PhotoList extends React.Component{
	constructor(props){
		super(props);
		this.imgs = ["src/resources/img/head-banner1.jpg","src/resources/img/head-banner.jpg","src/resources/img/head-banner1.jpg","src/resources/img/head-banner.jpg","src/resources/img/head-banner1.jpg"];
		this.state = {curSrc:"src/resources/img/head-banner.jpg",imgs:this.imgs};
	}

	componentDidMount(){
		var that = this;
		$(window).on('scroll',function(e){
			ropeLong(e,that.rope,that.parent);
		})
	}

	componentWillUnmount(){
		$(window).off('scroll');
	}

	ShowFrame(item,e){
		this.setState({
			isShow:true,
			curSrc:item
		})
	}

	render(){
		var that = this;
		return <div className="photo-list-container lantern-parent" ref={(parent) => {this.parent = parent;}}>
			<LanternName rope = {el => this.rope=el} name="PHOTOS"/>
			<PhotoFrame isShow={this.state.isShow} curSrc={this.state.curSrc} imgs={this.state.imgs}/>
			{this.imgs.map((item)=>{
				return <div className="photo-wrap">
						<img src={item} className="transition-all-halfs" onClick={that.ShowFrame.bind(that,item)}/>
						<div class="photo-text"></div>
					</div>
			})}
		</div>
	}
}

export default PhotoList