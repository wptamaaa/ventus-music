

// this file use LAST.FM data API




		
	
	$(function () {        
        if (window.location.search.split('?').length > 1) {
            var params  = window.location.search.split('=')[1].split('&');
           	// alert(params);
           	getTagInfo(params);
           	get10PopulerTracks(params);
        }        
    });
   



function getTagInfo(tag)
{

var api = '446eb41c159860b0ee6b56b098cb693b';
var url = "http://ws.audioscrobbler.com/2.0/?method=tag.getinfo&tag="+tag+"&api_key="+api+"&format=json";
$.ajax({
  url: url,
  type: 'GET',
  success: function(response)
  		{
  			var data = response;
  			console.log(data);
  			$('#titleTag').html(data.tag.name);
  			$('#contentTag').html(data.tag.wiki.content);
  		},
   error: function(error)
   {
   	console.log(error);
   }
});
}



function get10PopulerTracks(tag)
{

	var api = '446eb41c159860b0ee6b56b098cb693b';
	var url = "http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag="+tag+"&api_key="+api+"&limit=10&format=json";
	$.ajax({
	  url: url,
	  type: 'GET',
	  success: function(response)
	  		{
	  			var data = response.tracks.track;
	  			console.log(data);

	  			$.each(data, function(index, track) {
	  				var num = index+1;
	  				var list = '<tr><td class="pb-0">'+ num+'. '+'</td><td><i class="fa fa-play"></i></td><td><i class="far fa-heart"></i></td><td><p class="m-0">'+ track.name +'</p></td></tr>';
	  				$('#list10Toptracks').append(list);
	  			});

	  			

  			},
  	  error: function(error)
	   {
	   	console.log(error);
	   }


	  });
	  
	

}

 