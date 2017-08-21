import React from 'react'
import ReactDOM from 'react-dom'
import Editor from 'src/main/common/components/EditorComponent.jsx'
import {CenterTitle} from 'src/main/components/common/CommonComponent.jsx'

class BlogEditor extends React.Component{
	constructor(props){
		super(props)
		//this.eStyle= {width:'500px'}
	}

	componentDidMount(){

	}

	componentWillUnmount(){
	}

	render(){
		return <div className="container_blog_edit">
			<CenterTitle title="编辑博客"/>
			<Editor id="editor" eStyle={this.eStyle}/>
		</div>
	}
}

export default BlogEditor;