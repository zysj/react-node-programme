import React from 'react'
import ReactDOM from 'react-dom'

export class PhotoFrame extends React.Component{
	constructor(props){
		super(props)
		this.imgs = props.imgs || [];
		this.state = {
			isShow:props.isShow || false,
			curSrc:props.curSrc || ''
		}
		this.hideWrap = this.hideWrap.bind(this);
	}

	componentWillUpdate(nextProps){
		if(this.state.isShow!=nextProps.isShow||this.state.curSrc!=nextProps.curSrc){
			this.setState({
				isShow:nextProps.isShow,
				curSrc:nextProps.curSrc
			})
		}
	}

	hideWrap(e){
		this.setState({isShow:false})
	}

	backWard(e){
		var curIndex = this.imgs.indexOf(this.state.curSrc);
		curIndex--;
		if(curIndex<0)curIndex=this.imgs.length-1;
		this.setState({curSrc:this.imgs[curIndex]});
	}

	forWard(e){
		var curIndex = this.imgs.indexOf(this.state.curSrc);
		curIndex++;
		if(curIndex>this.imgs.length-1)curIndex=0;
		this.setState({curSrc:this.imgs[curIndex]});
	}

	render(){
		return <div className="photo-frame-wrap" style={{display:this.state.isShow?'block':'none'}}>
				<div className="backdrop" onClick={this.hideWrap}></div>
				<div className="photo-frame ver-hori-mid">
					<img src={this.state.curSrc}/>
					<div className="backward-btn hori-mid"><i className="fa fa-angle-left" onClick={this.backWard.bind(this)}></i></div>
					<div className="forward-btn hori-mid"><i className="fa fa-angle-right" onClick={this.forWard.bind(this)}></i></div>
				</div>
			</div>
	}
}