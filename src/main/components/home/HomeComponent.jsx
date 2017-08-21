import React from 'react'
import ReactDOM from 'react-dom'
import BlogList from './BlogListComponent.jsx'
import PhotoList from './PhotoListComponent.jsx'

class Home extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return <div className="container_home">
			<BlogList/>
			<PhotoList/>
		</div>
	}
}

export default Home