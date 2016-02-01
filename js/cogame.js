var difficulty;

function $(id)
	{
   //gets an element by the id passed to it.
   	return document.getElementById(id);
	}

var you = {};
var map = {};

function setDiff1()
    {
    difficulty = 7;
    }

function setDiff2()
    {
    difficulty = 8;
    }

function setDiff3()
    {
    difficulty = 9;
    }

function setDiff4()
    {
    difficulty = 10;
    }

function setDiff5()
    {
    difficulty = 11;
    }

function getLoc() 
	{
    var latitude = (Math.random() * 4) + 37;
    var longitude = (Math.random() * -7) - 102; 
	var gps = navigator.geolocation;
	gps.getCurrentPosition(function(position)
		{
		var latLng = new google.maps.LatLng(latitude, longitude);
		var opts = {zoom:difficulty, center:latLng, mapTypeId: google.maps.MapTypeId.ROADMAP};
		map = new google.maps.Map($("map_canvas"), opts);
		you = new google.maps.Marker(
				{
				position: latLng,
				map: map,
				title: "Your current location"
				});
		var infowindow = new google.maps.InfoWindow(
			{
			map: map,
			position: latLng,
			content: 'You be here'
			});
		});
	}

//position.coords.latitude,position.coords.longitude
       