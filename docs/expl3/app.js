$( document ).ready( function() {
	$.getJSON( "data.json", function( data ) {

		var authList = {};
		$.each( data, function(key,val){
			authlist[key]= val;
		});
		
	}
		function validateForm(){
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

	if ( "login_success" in args ) {
		if ( args["login_success"] === 'NO' ) {
			console.log("Bad username or password.  try again");
			$(".messages").show();
		} else {
			window.location.href = "./22_" + args['login_success'] + "2.html";
		}
	}
});
