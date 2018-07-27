$(document).ready(function(){
	loadJSONfile(function(response){
		data = JSON.parse(response);
  });
});

function loadJSONfile(callback) {
	var request = new XMLHttpRequest();
	request.overrideMimeType("application/json");
	request.open('GET', 'data.json', true);
	request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200) {
			callback(request.responseText);
		}
	}

	request.send(null);
}
