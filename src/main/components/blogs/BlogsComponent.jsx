import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'
class Blogs extends React.Component{
	constructor(props){
		super(props)
	}

	componentDidMount(){
		var that = this;
		$(window).on('scroll',function(e){
			followScroll(that.ul,e);
		})
	}

	componentWillUnmount(){
		$(window).off('scroll');
	}

	render(){
		return <div className="container container_blogs">
			<ul ref= {el=> this.ul = el}>
				<li className="transition-all-halfs">
					<div className="edit-btn transition-all-halfs"><Link to="/blog-edit">编辑</Link></div>
					<div className="blog-date-wrap">
						<div className="blog-date transition-all-ones">
							<h3><span>11月12日</span></h3>
							<h4>2017年</h4>
						</div>
					</div>
					<div className="blog-descript">
						<h3>通过 PropTypes 进行类型检查</h3>
						<span>随着应用规模的提升，你可以通过类型检测捕获更多的bug。对于部分应用，你可能需要使用类似于 Flow 或者 TypeScript 等 JavaScript 扩展来对你整个应用类型进行类型检测。但即使你不使用这些，React 内置了类型检测的功能。要在组件中进行类型检测，你可以赋值 propTypes 属性。</span>
					</div>
					<ul className="blog-data">
						<li><i className="fa fa-heart"></i><span>(0)</span></li>
						<li><i className="fa fa-heart"></i><span>(0)</span></li>
						<li><i className="fa fa-heart"></i><span>(0)</span></li>
					</ul>
				</li>
				<li className="transition-all-ones">
					<div className="blog-date-wrap">
						<div className="blog-date transition-all-ones">
							<h3><span>11月12日</span></h3>
							<h4>2017年</h4>
						</div>
					</div>
					<div className="blog-descript">
						<h3>通过 PropTypes 进行类型检查</h3>
						<span>随着应用规模的提升，你可以通过类型检测捕获更多的bug。对于部分应用，你可能需要使用类似于 Flow 或者 TypeScript 等 JavaScript 扩展来对你整个应用类型进行类型检测。但即使你不使用这些，React 内置了类型检测的功能。要在组件中进行类型检测，你可以赋值 propTypes 属性。</span>
					</div>
					<ul className="blog-data">
						<li><i className="fa fa-heart"></i><span>(0)</span></li>
						<li><i className="fa fa-heart"></i><span>(0)</span></li>
						<li><i className="fa fa-heart"></i><span>(0)</span></li>
					</ul>
				</li>
				<li className="transition-all-ones">
					<div className="blog-date-wrap">
						<div className="blog-date transition-all-ones">
							<h3><span>11月12日</span></h3>
							<h4>2017年</h4>
						</div>
					</div>
					<div className="blog-descript">
						<h3>通过 PropTypes 进行类型检查</h3>
						<span>随着应用规模的提升，你可以通过类型检测捕获更多的bug。对于部分应用，你可能需要使用类似于 Flow 或者 TypeScript 等 JavaScript 扩展来对你整个应用类型进行类型检测。但即使你不使用这些，React 内置了类型检测的功能。要在组件中进行类型检测，你可以赋值 propTypes 属性。</span>
					</div>
					<ul className="blog-data">
						<li><i className="fa fa-heart"></i><span>(0)</span></li>
						<li><i className="fa fa-heart"></i><span>(0)</span></li>
						<li><i className="fa fa-heart"></i><span>(0)</span></li>
					</ul>
				</li>
				<li className="transition-all-ones"></li>
				<li className="transition-all-ones"></li>
				<li className="transition-all-ones"></li>
			</ul>
		</div>
	}
}


function followScroll(ul,e){
	if(!ul)return;
	var $ul = $(ul);
	var $li = $ul.children();
	var height = $li.height();
	var scrollTop = $(document).scrollTop();
	var isUp = false;
	if(!ul.preScrollTop || ul.preScrollTop-scrollTop<0){
		isUp = true;
	}else{
		isUp = false;
	}
	ul.preScrollTop = scrollTop;
	var upIndex = Math.ceil(scrollTop/height*2);
	for(var i =0,len=$li.length;i<len;i++){
		//console.log(upIndex,$li[i].className)
		if(isUp){
			if(i+1>upIndex)break;
			if($li[i].className.indexOf('up')>-1)continue;
			$li[i].className += ' up';
		}else{
			if(i+1<upIndex)continue;
			if($li[i].className.indexOf('up')<0)continue;
			$li[i].className = $li[i].className.replace('up','');
		}
	}
}

export default Blogs