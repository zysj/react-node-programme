import React from 'react'
import ReactDOM from 'react-dom'

export function LanternName(props){
	return <div className="lantern-module">
		<div ref={props.rope} className="lantern-rope"></div>
		<div className="lantern-name ver-mid light-animation animation-mid transition-all-halfs">
			<span className="ver-hori-mid">{props.name}</span>
		</div>
	</div>
}

export function ropeLong(e,rope,parent){
	var ropeHeight;
	var $rope;
	if(!rope.$rope && !(rope.$rope instanceof $)){
		$rope = $(rope);
		ropeHeight = $rope.height();
		rope.originHeight = ropeHeight;
		rope.$rope = $rope;
	}else{
		$rope = rope.$rope;
	}
	var scrollTop = $(document).scrollTop();
	parent = $(parent);
	ropeHeight = rope.originHeight || $rope.height();
	var maxHeight = parent.height()+parseInt(parent.css('border-top-width'))-ropeHeight;
	var newHeight = ropeHeight+scrollTop-parent.offset().top;
	(newHeight<=maxHeight&&newHeight>rope.originHeight)&&$rope.height(newHeight);
	newHeight>maxHeight&&$rope.height(maxHeight);
	newHeight<rope.originHeight&&$rope.height(rope.originHeight);
}

