import $ from 'jquery';

var forEach = function(arr,cb){for(var i = 0; i < arr.length; i++){ cb(arr[i], i, arr)  } }


function controllerRouter (){
	var currentRoute = window.location.hash.slice(1)
 	
	if(currentRoute === 'technology'){
		$.getJSON('https://api.nytimes.com/svc/topstories/v1/technology.json?api-key=12e8922b74134ddabb5c1f2c5e866001')
			.then(function(serverRes){
				var htmlTemplate = createArticlePageTemplate( serverRes.results, "Technology" )
				appContainerEl.innerHTML = htmlTemplate
		})
		return
	}

	if(currentRoute === 'sports'){
		$.getJSON('https://api.nytimes.com/svc/topstories/v1/sports.json?api-key=12e8922b74134ddabb5c1f2c5e866001')
			.then(function(serverRes){
				var htmlTemplate = createArticlePageTemplate( serverRes.results, "Sports" )
				appContainerEl.innerHTML = htmlTemplate
		})
		return
	}

	$.getJSON('https://api.nytimes.com/svc/topstories/v1/world.json?api-key=12e8922b74134ddabb5c1f2c5e866001')
		.then(function(serverRes){
			console.log(serverRes)
			var htmlTemplate = createArticlePageTemplate( serverRes.results, "World News" )
			appContainerEl.innerHTML = htmlTemplate
	})

}


function createArticlePageTemplate(dataArray, title){
	var bigHTMLStr = ''
	
	forEach(dataArray, function(articleObj){
		var imgLink = ''
		if( typeof articleObj.multimedia  === 'object' ) {
			imgLink = articleObj.multimedia[1].url
		}

		bigHTMLStr += `
			<div class="story">
				<img src="${imgLink}">
				<h3>${articleObj.title}</h3>
				<p>${articleObj.byline}</p>
			</div>
		`
	})
	
	return `
		<h1 class="">${title}</h1>

		<div class="stories-container">
			${bigHTMLStr}
		</div>
	`
}


var appContainerEl = document.querySelector('#app-container')
window.addEventListener('hashchange', controllerRouter )
controllerRouter()


