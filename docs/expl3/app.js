$( document ).ready( function() {
	var authList = {};
	$.getJSON( "data.json", function( data ) {

		$.each( data, function(key,val){
			authList[key]= val;
		});

	});

	$( "#login_btn" ).click ( function(){
		var x=document.forms["login"]["username"].value;
		var y=document.forms["login"]["password"].value;
		if ( x==null || x=="" || y==null || y=="" ){
			$(".messages").show();
			return false;
		} else if ( x in authList ) {
			if( authList[x][0] === y ) {
				window.location.href = authList[x][1];
			} else {
				$(".messages").show();
			}
		} else {
			$(".messages").show();
		}
	});
});
