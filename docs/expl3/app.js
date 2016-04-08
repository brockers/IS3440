$( document ).ready( function() {
	var authList = {};
	$.getJSON( "data.json", function( data ) {

		$.each( data, function(key,val){
			authlist[key]= val;
		});

	});

	$( "#login_btn" ).click ( function(){
		var x=document.forms["login"]["username"].value;
		var y=document.forms["login"]["password"].value;
		if ( x==null || x=="" || y==null || y=="" ){
			$(".messages").show();
			return false;
		} else {
			if( authList[x][0] === y ) {
				window.location.href = authList[x][1];
			} else {
				alert("Bad username or password... please try again.");
				$(".messages").show();
			}
		}
	});
});
