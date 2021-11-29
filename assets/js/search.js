

// this file use LAST.FM data API


$(document).ready(function() {
	
	$('#keyword').keyup(function(event) {		
		var val = $(this).val();
		search(val);
	});
	

	if($('#keyword').val() == '')
	{
		$('#resultHere').html('');
	}

});


function search(keyword)
{

var api = '446eb41c159860b0ee6b56b098cb693b';
var url = "http://ws.audioscrobbler.com/2.0/?method=track.search&track="+keyword+"&api_key="+api+"&format=json";
$.ajax({
  url: url,
  type: 'GET',
  success: function(response)
  		{	
  			$('#resultHere').html('');
  			if(response.lenght == 0)
  			{
  				console.log('No data');
  				$('#resultHere').html();
  			}else{
	  			var data = response.results.trackmatches.track;
	  			console.log(data);  

	  			$.each( data, function( key, track ) {
	  				var num = key + 1;
	  				var name = '<a href="viewTrack.html?track='+encodeURI(track.name)+'&artist='+encodeURI(track.artist)+'">'+track.name+'</a>';
	  				var artist = '<a href="viewArtist.html?artist='+encodeURI(track.artist)+'">'+track.artist+'</a>'
	  				var list = '<tr><td>'+ num+'. '+'</td><td>'+ name +'</td><td>'+ artist +'</td><td><i class="far fa-heart"></i></td><td><i class="fa fa-play"></i></td><td>'+track.listeners+' listeners</td></tr>';

	  				$('#resultHere').append(list);

	  			});
	  		}

  		},
   error: function(error)
   {
   	console.log(error);
   }
});
}



 