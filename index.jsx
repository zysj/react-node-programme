import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import {Router, Route, Link} from 'react-router'
import {hashHistory} from 'react-router'
import 'src/resources/css/base.css'

//初始化jquery
window.$ = $;
window.jquery = $;
window.jQuery = $;

const routes = [
	{
		path:"/",
		getComponents(location, callback){
			require.ensure([],function(require){
				callback(null, require('./src/main/AppComponent.jsx'));
			})
		},
		getIndexRoute(location, callback){
			require.ensure([],function(require){
				callback(null, {
					component:require('./src/main/components/home/HomeComponent.jsx')
				});
			});
		},
		childRoutes:[
			{
				path:'blogs',
				getComponents(location, callback){
					require.ensure([],function(require){
						callback(null, require('./src/main/components/blogs/BlogsComponent.jsx'));
					});
				}
			},
			{
				path:'blog-edit',
				getComponents(location, callback){
					require.ensure([],function(require){
						callback(null, require('./src/main/components/blogs/BlogEditorComponent.jsx'));
					});
				}
			},
			{
				path:'photos',
				getComponents(location, callback){
					require.ensure([],function(require){
						callback(null, require('./src/main/components/photos/PhotosComponent.jsx'));
					});
				}
			}
		]
	},

]

ReactDOM.render(
	(<Router history={hashHistory} routes={routes}/>),
	document.getElementById('root')
	);
