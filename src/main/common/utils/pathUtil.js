
var host = location.host;

var hash = location.hash;

var hostname = location.hostname;

var href = location.href;

var origin = location.origin;

var pathname = location.pathname;

var port = location.port;

var protocol = location.protocol;

var basePath = origin;


export default {
	getBasePath:function(){
		return basePath;
	}
}