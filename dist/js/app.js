(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var appContainerEl = document.querySelector('#app-container');

// <nav>
//   <a class="route" data_route="home"></a>
//   <a class="route" data_route="about"></a>
//   <a class="route" data_route="contact"></a>
//   <a class="route" data_route="portfolio"></a>

// </nav>

var homePageHtmlStr = '\n\t<div class="page page_home">\n\t\t<h1>Welcome Home!</h1>\n\t</div>\n';

var aboutPageHtmlStr = '\n\t<div class="page page_about">\n\t\t<h1>About Us</h1>\n\t</div>\n';
var contactPageHtmlStr = '\n\t<div class="page page_contact">\n\t\t<h1>Contact Details</h1>\n\t</div>\n';

var portfolioPageHtmlStr = '\n\t<div class="page page_portfolio">\n\t\t<h1>Our Portfolio</h1>\n\t</div>\n';

appContainerEl.innerHTML = homePageHtmlStr;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLGlCQUFpQixTQUFTLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQXJCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsSUFBSSw0RkFBSjs7QUFNQSxJQUFJLHlGQUFKO0FBS0EsSUFBSSxvR0FBSjs7QUFNQSxJQUFJLHNHQUFKOztBQU1BLGVBQWUsU0FBZixHQUEyQixlQUEzQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgYXBwQ29udGFpbmVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwLWNvbnRhaW5lcicpXG5cbi8vIDxuYXY+XG4vLyAgIDxhIGNsYXNzPVwicm91dGVcIiBkYXRhX3JvdXRlPVwiaG9tZVwiPjwvYT5cbi8vICAgPGEgY2xhc3M9XCJyb3V0ZVwiIGRhdGFfcm91dGU9XCJhYm91dFwiPjwvYT5cbi8vICAgPGEgY2xhc3M9XCJyb3V0ZVwiIGRhdGFfcm91dGU9XCJjb250YWN0XCI+PC9hPlxuLy8gICA8YSBjbGFzcz1cInJvdXRlXCIgZGF0YV9yb3V0ZT1cInBvcnRmb2xpb1wiPjwvYT5cblxuLy8gPC9uYXY+XG5cbnZhciBob21lUGFnZUh0bWxTdHIgPSBgXG5cdDxkaXYgY2xhc3M9XCJwYWdlIHBhZ2VfaG9tZVwiPlxuXHRcdDxoMT5XZWxjb21lIEhvbWUhPC9oMT5cblx0PC9kaXY+XG5gXG5cbnZhciBhYm91dFBhZ2VIdG1sU3RyID0gYFxuXHQ8ZGl2IGNsYXNzPVwicGFnZSBwYWdlX2Fib3V0XCI+XG5cdFx0PGgxPkFib3V0IFVzPC9oMT5cblx0PC9kaXY+XG5gXG52YXIgY29udGFjdFBhZ2VIdG1sU3RyID0gYFxuXHQ8ZGl2IGNsYXNzPVwicGFnZSBwYWdlX2NvbnRhY3RcIj5cblx0XHQ8aDE+Q29udGFjdCBEZXRhaWxzPC9oMT5cblx0PC9kaXY+XG5gXG5cbnZhciBwb3J0Zm9saW9QYWdlSHRtbFN0ciA9IGBcblx0PGRpdiBjbGFzcz1cInBhZ2UgcGFnZV9wb3J0Zm9saW9cIj5cblx0XHQ8aDE+T3VyIFBvcnRmb2xpbzwvaDE+XG5cdDwvZGl2PlxuYFxuXG5hcHBDb250YWluZXJFbC5pbm5lckhUTUwgPSBob21lUGFnZUh0bWxTdHIiXX0=
