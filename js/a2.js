//asdf
window.onload = init;
var loaded = false;

function init(){}

function load(){
	if( loaded) return;
	loaded = true;
	//hide form
	$( "#form").css( "display", "none");
	//perform yahoo weather call
	var request = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20location%3D10002&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
	$.get( request, load_weather);
	//perform local xml call
	var request = "http://localhost/prices.php";
	$.get( request, load_prices);
	//load map
	load_map();}

function load_weather( data){
	//parse json
	var title = data.query.results.channel.item.title;
	var desc = data.query.results.channel.item.description;
	//set weather content
	var weather = $( "#weather");
	weather.html(
		"<strong>" + title + "</strong>" +
		"<pre><code>" + desc + "</code></pre>");
	weather.css( "display", "block");}

function load_prices( data){
	//parse xml
	var xml = $( $.parseXML( data));
	var laptops = xml.find( "laptop");
	//create content
	var content = "<table>";
	laptops.each( function(){
		var name = $(this).attr( "name");
		var price = $(this).attr( "price");
		content +=
			"<tr><td>" + name + "</td>" +
			"<td>" + price + "</td></tr>";});
	content += "</table>";
	//set content
	var prices = $( "#prices");
	prices.html( content);
	prices.css( "display", "block");}

function load_map(){
	console.log("loading map");
	var lat = parseInt( $( "#lat").val());
	if( isNaN( lat))
		lat = -34.397;
	var lng = parseInt( $( "#lng").val());
	if( isNaN( lng))
		lng = 150.644;
	var mapOptions = {
		center: {
			lat: lat,
			lng: lng},
		zoom: 8};
	var map = new google.maps.Map(
		document.getElementById( 'map-canvas'),
		mapOptions);
	console.log("done loading map");}
