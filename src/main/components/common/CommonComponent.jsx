import React from 'react'
import ReactDOM from 'react-dom'

export function CenterTitle(props){
	return <div className="center-title">
		<h2 className={props.titleClass}>{props.title}</h2>
		{props.children}
	</div>
}