
loginWindow = function(navController) {	
	
	var win = Ti.UI.createWindow({
		title:'Login',
		backgroundColor:'#fff',
		layout:'vertical'
	});

	
	var style;
	if(Ti.Platform.name === 'iPhone OS'){
		style = Ti.UI.iPhone.ActivityIndicatorStyle.DARK;
	}else{
		style = Ti.UI.ActivityIndicatorStyle.DARK;
	}
	
	var activityIndicator = Ti.UI.createActivityIndicator({
		color: 'black',
		font: {fontFamily:'Helvetica Neue', fontSize:26, fontWeight:'bold'},
		message: 'Loading...',
		style:style,
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		height:Ti.UI.SIZE,
		width:Ti.UI.SIZE
	});
		
		win.add(activityIndicator);

	
	var create = Ti.UI.createButton({
		title:'Create Account',
		height:'40dp',
		width:'200dp',
		top:'10dp'
	});

	create.addEventListener('click', function(e){
		navController.open(new createWindow(navController));
	});
	
	win.add(create);
	
	var labelOr = Ti.UI.createLabel({
    	color:'#576996',
    	font:{fontFamily:'Arial', fontSize:16, fontWeight:'bold'},
    	text:'or',
    	top: '10dp',
    	width: '200dp',
    	height: '40dp',
    	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
  	});
  	
  	win.add(labelOr);

	var username = Titanium.UI.createTextField({
		color:'#336699',
		height:'40dp',
		width:'200dp',
		top:'10dp',
		hintText: 'Username',
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	win.add(username);

	var password = Titanium.UI.createTextField({
		color:'#336699',
		height:'40dp',
		width:'200dp',
		top:'10dp',
		hintText: 'Password',
		passwordMask:true,
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	win.add(password);


	var login = Ti.UI.createButton({
		title:'Login',
		height:'40dp',
		width:'200dp',
		top:'10dp'
	});
	
	login.addEventListener('click', function(e){
		//todo

		var loginRequest = Ti.Network.createHTTPClient({

		onerror : function(e){
			activityIndicator.hide();
			Ti.API.debug(e.error);
			alert("An error has occured. Please try again.");
			alert(JSON.stringify(e));
		},

		onload : function()
		{
			activityIndicator.hide();
			var json = this.responseText;
			var response = JSON.parse(json).d;
			var JSONobjresponse = JSON.parse(response);
			alert(response);
			//var test = JSON.stringify(response);
			//Ti.API.info(response.d.username);
			//Ti.API.info(response.d.ID);
			//alert("username: " + response.ID + "userid: ");
			
			if (JSONobjresponse.login == "Login Failed.")
			{
				alert(JSONobjresponse.login);
			}
			else
			{
				Ti.App.Properties.setString('username', JSONobjresponse.UserName);
				Ti.App.Properties.setString('userid', JSONobjresponse.ID);
				//alert("username: " + JSONobjresponse.username + "; id" + JSONobjresponse.ID);
				navController.open(new reservationWindow(navController));
			}
		}, timeout:5000
		});

				
		//toast.show();
		if (username.value != '' && password.value != '')
		{
			//var host = "http://10.187.30.21/";
			//var host = "http://192.168.1.122/";
			var host = "http://10.0.1.9/";
			activityIndicator.show();
			loginRequest.open("POST", host + "wp/VikingsWS.asmx/Login");
			var params = {
				username: username.value,
				password: password.value
			};
			loginRequest.setRequestHeader('Content-Type', 'application/json');
			loginRequest.send(JSON.stringify(params));
			/*
			if(Ti.App.name !== 'iPhone OS'){
				var toast = Titanium.UI.createNotification({
					duration: Ti.UI.NOTIFICATION_DURATION_LONG,
					message: host
				});
			

				toast.show();
			}
			*/
		}
		else
		{
/*			if(Ti.App.name !== 'iPhone OS'){
				var toast = Titanium.UI.createNotification({
					duration: Ti.UI.NOTIFICATION_DURATION_LONG,
					message: "Please complete required fields."
				});
	
				toast.show();
			}*/
		}
	});
	
	win.add(login);

	var forgotPassword = Ti.UI.createButton({
		title:'Forgot Password',
		height:'40dp',
		width:'200dp',
		top:'10dp'
	});
	
	forgotPassword.addEventListener('click', function() {
		navController.open(new forgotPassWindow(navController));
	});
	
	win.add(forgotPassword);
	
	return win;
	
};

module.exports = loginWindow;
