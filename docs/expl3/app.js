$( document ).ready( function() {
	var authList = {};
	$.getJSON( "data.json", function( data ) {

		$.each( data, function(key,val){
			authlist[key]= val;
		});
		
	});

	var validateForm = function(){
		var x=document.forms["login"]["username"].value;
		var y=document.forms["login"]["password"].value;
		if ( x==null || x=="" || y==null || y=="" ){
			alert("Username or password was left blank...");
			return false;
		} else {
			if( authList[x][0] === y ) {
				window.location.href = authList[x][1];
			} else {
				alert("Bad username or password... please try again.");
			}
		}
	}
});
