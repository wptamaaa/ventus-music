

// this file use LAST.FM data API


$(document).ready(function() {
	
	top10tracks()	
	top10Artist()
});


function top10tracks()
{

var api = '446eb41c159860b0ee6b56b098cb693b';
var url = "http://ws.audioscrobbler.com/2.0/?method=chart.getTopTracks&api_key="+api+"&limit=10&format=json";
$.ajax({
  url: url,
  type: 'GET',
  success: function(response)
  		{
  			var data = response.tracks.track;
  			console.log(data);
  			var topCharts ='<div class="card text-white"><img src="'+ data[0].image['3']['#text'] +'" class="card-img" alt=""><ul class="list-group list-group-flush" id="list-top-chars"></ul></div>'
  			$('#charts-top-tracks').append(topCharts);

  			$.each( data, function( key, track ) { 
  				var num = key + 1;
			  	var listTopCharts = '<li class="list-group-item bg-dark" style="padding: 0.5rem 0.75rem;"><table><tr><td width="40"><h5 class="card-title px-1 m-0">'+ num+"."+'</h5></td><td><img src="'+ track.image['0']['#text'] +'" width="80"></td><td><h5 class="card-title p-0 m-0 ml-2">'+ track.name +'</h5><p class="card-text ml-2">'+ track.artist.name +'</p></td></tr></table></li>';
			  	$('#list-top-chars').append(listTopCharts);				
			});

  		},
   error: function(error)
   {
   	console.log(error);
   }
});
}

function top10Artist()
{

	var api = '446eb41c159860b0ee6b56b098cb693b';
	var url = "http://ws.audioscrobbler.com/2.0/?method=chart.getTopArtists&api_key="+api+"&limit=10&format=json";
	$.ajax({
	  url: url,
	  type: 'GET',
	  success: function(response)
	  		{
	  			var data = response.artists.artist;
	  			console.log(data);
	  			var topCharts ='<div class="card text-white"><img src="'+ data[0].image['3']['#text'] +'" class="card-img" alt=""><ul class="list-group list-group-flush" id="list-top-artist"></ul></div>'
	  			$('#charts-top-artists').append(topCharts);

	  			$.each( data, function( key, artist ) { 
	  				var num = key + 1;
				  	var listTopCharts = '<li class="list-group-item bg-dark" style="padding: 0.5rem 0.75rem;"><table><tr><td width="40"><h5 class="card-title px-1 m-0">'+ num+"."+'</h5></td><td><img src="'+ artist.image['0']['#text'] +'" width="80"></td><td><h5 class="card-title p-0 m-0 ml-2">'+ artist.name +'</h5></td></tr></table></li>';
				  	$('#list-top-artist').append(listTopCharts);				
				});

	  		},
	   error: function(error)
	   {
	   	console.log(error);
	   }
	});

}

 