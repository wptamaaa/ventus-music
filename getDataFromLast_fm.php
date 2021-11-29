<?php 

$api = '446eb41c159860b0ee6b56b098cb693b';
// $id = '0OdUWJ0sBjDrqHygGUXeCF';
// $headers = ['Accept: application/json',
// 			'Content-Type: application/json',
// 			'Authorization: Bearer BQDbdTT7hHm2Olys4v4WbZupRyVyWaokZhDku09EPKv7wQjUY6Np6DHIvJ4tgvdaVmn2EYljcNluCq4Lbzf16EINAEH2iH2Ofs5LyLdL1C6Br3W8Ggk2TZDnqqQMyZcQ6EcDU3_Mpg7QOJvvsWo9vqxeJjk3cqRWqyKO1UTKtFFj0HRo377jCL56-R0A2ILnfw-aLyqzRA'
// 			];
$url = "http://ws.audioscrobbler.com/2.0/?method=tag.getTopTracks&tag=rock&api_key=$api&format=json";
	$ch = curl_init(); 
    curl_setopt($ch, CURLOPT_URL, $url); 
    // curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE); 
    // curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    ; 

    echo "<pre>";
    print_r(json_decode(curl_exec($ch)));	
    echo "</pre>";

    if (curl_errno($ch)) {
    	echo "<pre>";
        echo 'Error:' . curl_error($ch);
        echo "</pre>";
    }

    curl_close($ch); 

// $datfile_get_contents("https://api.discogs.com/artists/1/releases?page=2&per_page=5");

   
?>