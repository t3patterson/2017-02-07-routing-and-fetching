var appContainerEl = document.querySelector('#app-container')

// <nav>
//   <a class="route" data_route="home"></a>
//   <a class="route" data_route="about"></a>
//   <a class="route" data_route="contact"></a>
//   <a class="route" data_route="portfolio"></a>

// </nav>

var homePageHtmlStr = `
	<div class="page page_home">
		<h1>Welcome Home!</h1>
	</div>
`

var aboutPageHtmlStr = `
	<div class="page page_about">
		<h1>About Us</h1>
	</div>
`
var contactPageHtmlStr = `
	<div class="page page_contact">
		<h1>Contact Details</h1>
	</div>
`

var portfolioPageHtmlStr = `
	<div class="page page_portfolio">
		<h1>Our Portfolio</h1>
	</div>
`

appContainerEl.innerHTML = homePageHtmlStr