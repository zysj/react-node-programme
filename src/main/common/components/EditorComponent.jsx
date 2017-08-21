import React from 'react'
import ReactDOM from 'react-dom'
import umeditorConfig from 'src/main/common/config/umeditorConfig.js'
import umeditor from 'src/resources/lib/umeditor/umeditor.js'
import  'src/resources/lib/umeditor/lang/zh-cn/zh-cn.js'

class Editor extends React.Component{
	constructor(props){
		super(props)
		this.state = {eStyle:{width:'800px',height:'450px'}}
	}

	componentWillMount(){
		this.setState({eStyle:$.extend({},this.state.eStyle,this.props.eStyle)});
	}

	componentDidMount(){
		this.editor  = UM.getEditor(this.props.id,umeditorConfig);
	}

	componentWillUnmount(){
		this.editor.destroy();
	}

	render(){
		return <div className="editor-wrap">
			<div id={this.props.id} style={this.state.eStyle}></div>
		</div>
	}
}

export default Editor;