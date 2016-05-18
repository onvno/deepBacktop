/**
 * @authors     Li Weidong (https://github.com/onvno)
 * @email       leewei2020@gmail.com
 * @contributer
 * @company     Deep (www.deeping.cn) 
 * @date        2016-05
 * @version     0.1
 * @commit      This is first time to build some components , just want to get a more easy way for working . Before do this, most time work with jQuery, so i'm a worse JSer , please give us more confidence , more time & suggestions , thx !
 * Released under the MIT license.
 */

function deepBackTop ( options ) {

	var defaults = {
		background : 'red',
		content : '',
		flow : true,
		stepsize : 30,
		hide : true,
		showDistance : 150,
		animate : 'easeOutQuad'
	};

	var options,content,stepsize,distance,steptime;

	// change default config
	function inputArguments(source,attribute) {
		var attr;
		for (attr in attribute) {
			if (attribute.hasOwnProperty(attr)) {
				source[attr] = attribute[attr];
			}
		}
		return source;
	}

	// change default
	if(arguments[0] && typeof arguments[0] === 'object') {
		options = inputArguments(defaults,arguments[0]);
	}else if(!arguments[0]){
		options = defaults;
	}

	content = options.content;

	content.addEventListener('click' , function(){
		if (options.flow === false) {
			document.body.scrollTop = document.documentElement.scrollTop = 0; //body-chrome, documentElement-ff&ie
		} else {
			// 原动画效果，已经由新的ease库取代
			/*stepsize = options.stepsize;
			steptime = parseInt( distance / stepsize);
			var scrollbar = setInterval(function(){
				if((document.body.scrollTop + document.documentElement.scrollTop)==0 ){
					clearInterval(scrollbar);
				}else{
					document.body.scrollTop -= stepsize;
					document.documentElement.scrollTop -= stepsize;	
				}
			},steptime);*/

			// 新动画 
			var ele = document.body.scrollTop > 0 ? document.body : document.documentElement;
			deepEase(ele , {scrollTop : 0} , 500 , options.animate);
		}
	})

	content.style.display = 'none'
	var showDistance = options.showDistance 
	window.addEventListener('scroll',function(){
		distance = document.body.scrollTop + document.documentElement.scrollTop
		if(options.hide === true){
			if(distance > showDistance){
				content.style.display = 'block'
			} else {
				content.style.display = 'none'
			}			
		}
	});



	content.style.background = options.background;
}
