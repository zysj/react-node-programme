import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'

 class Header extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return <header>
			<nav className="container nav nav-header transition-all-halfs">
				<ul className="header-ul">
					<li><Link to="/">Home</Link><span className="header-btn transition-all-ones ver-hori-mid animation-mid"></span></li>
					<li><Link to="/blogs">Blogs</Link><span className="header-btn transition-all-ones ver-hori-mid animation-mid"></span></li>
					<li><Link to="/photos">Photos</Link><span className="header-btn transition-all-ones ver-hori-mid animation-mid"></span></li>
				</ul>
			</nav>
		</header>
	}
}

export default Header;