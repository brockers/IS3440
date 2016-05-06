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
			var tmp = window.atob( authList[x] );			
			if( tmp === y ) {
				window.location.href = tmp + ".html";
			} else {
				$(".messages").show();
			}
		} else {
			$(".messages").show();
		}
	});
});

