

// this file use LAST.FM data API


$(document).ready(function() {
	

	if ($('#nav-home-tab').hasClass('active')) 
	{
		$('#newReleases').html('');
		newReleases();
	}

	$('#nav-profile-tab').click(function(e) {
		$('#comingSoon').html('');
		newReleases2()
	});
	
	// top10Artist()
});


function newReleases()
{

var api = '446eb41c159860b0ee6b56b098cb693b';
var url = "http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=indonesia&api_key="+api+"&limit=16&format=json";
$.ajax({
  url: url,
  type: 'GET',
  success: function(response)
  		{
  			var data = response.tracks.track;
  			console.log(data);
  			
  			$.each( data, function( key, track ) { 
  				var track = '<div class="col-md-3 mt-2"><img src="'+track.image['2']['#text']+'" class="img-fluid"><h6 class="text-muted m-1">'+track.name+'<br><small>'+track.artist.name+'</small></h6></div>';
  				$('#newReleases').append(track);
  			});

  		},
   error: function(error)
   {
   	console.log(error);
   }
});
}



function newReleases2()
{

	var api = '446eb41c159860b0ee6b56b098cb693b';
	var url = "http://ws.audioscrobbler.com/2.0/?method=chart.getTopTracks&api_key="+api+"&limit=16&format=json";
	$.ajax({
	  url: url,
	  type: 'GET',
	  success: function(response)
	  		{
	  			var data = response.tracks.track;
	  			console.log(data);
	  			$.each( data, function( key, track ) { 
  				var track = '<div class="col-md-3 mt-2"><img src="'+track.image['2']['#text']+'" class="img-fluid"><h6 class="text-muted m-1">'+track.name+'<br><small>'+track.artist.name+'</small></h6></div>';
  				$('#comingSoon').append(track);
  			});


	  		},
	   error: function(error)
	   {
	   	console.log(error);
	   }
	});

}

 