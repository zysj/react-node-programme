import React from 'react'
import ReactDOM from 'react-dom'
import WaterFlow from 'src/main/common/utils/WaterFlow.js'

class PhotosComponent extends React.Component{
	constructor(props){
		super(props);
		this.imgs = ["src/resources/img/head-banner1.jpg","src/resources/img/head-banner.jpg","src/resources/img/head-banner1.jpg","src/resources/img/head-banner.jpg","src/resources/img/head-banner1.jpg","src/resources/img/head-banner.jpg","src/resources/img/head-banner1.jpg","src/resources/img/head-banner1.jpg","src/resources/img/head-banner.jpg","src/resources/img/head-banner1.jpg"];
	}

	componentDidMount(){
		WaterFlow(this.wrap,this.imgs);
	}

	render(){
		return <div className="container_photos">
			<div className="photo-box-warp" ref={el=> this.wrap = el}>
				{this.imgs.map(function(item){
					return <div className="photo-box">
								<img className="flow-img" src={item}/>
						     </div>
				})}
			</div>
		</div>
	}
}

export default PhotosComponent;