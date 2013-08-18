createWindow = function(navController){
	var win = Ti.UI.createWindow({
		title:'Create Account',
		backgroundColor:'#fff',
		layout:'vertical'
	});
	
	var scrollView = Titanium.UI.createScrollView({
	    contentWidth: 'auto',
	    contentHeight: 'auto',
	    top: 0,
	    bottom: 0,
	    showVerticalScrollIndicator: true,
	    showHorizontalScrollIndicator: true,
	    height: '100%',
	    width: '100%',
	    layout: 'vertical'
	});
	
	win.add(scrollView);	
	
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
		
	scrollView.add(activityIndicator);
	
	
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
	scrollView.add(username);

	var password = Titanium.UI.createTextField({
		color:'#336699',
		height:'40dp',
		width:'200dp',
		top:'10dp',
		hintText: 'Password',
		passwordMask: true,
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	scrollView.add(password);
	
	var confirmPassword = Titanium.UI.createTextField({
		color:'#336699',
		height:'40dp',
		width:'200dp',
		top:'10dp',
		hintText: 'Confirm password',
		passwordMask: true,
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	scrollView.add(confirmPassword);

	var firstname = Titanium.UI.createTextField({
		color:'#336699',
		height:'40dp',
		width:'200dp',
		top:'10dp',
		hintText: 'First Name',
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	scrollView.add(firstname);

	var lastname = Titanium.UI.createTextField({
		color:'#336699',
		height:'40dp',
		width:'200dp',
		top:'10dp',
		hintText: 'Last Name',
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	scrollView.add(lastname);

	var birthdate = Titanium.UI.createTextField({
		color:'#336699',
		height:'40dp',
		width:'200dp',
		top:'10dp',
		hintText: 'Birthdate',
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	scrollView.add(birthdate);

	var address1 = Titanium.UI.createTextField({
		color:'#336699',
		height:'40dp',
		width:'200dp',
		top:'10dp',
		hintText: 'Address 1',
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	scrollView.add(address1);

	var address2 = Titanium.UI.createTextField({
		color:'#336699',
		height:'40dp',
		width:'200dp',
		top:'10dp',
		hintText: 'Address 2',
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	scrollView.add(address2);

	var city = Titanium.UI.createTextField({
		color:'#336699',
		height:'40dp',
		width:'200dp',
		top:'10dp',
		hintText: 'City',
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	scrollView.add(city);

	var email = Titanium.UI.createTextField({
		color:'#336699',
		height:'40dp',
		width:'200dp',
		top:'10dp',
		hintText: 'Email',
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	scrollView.add(email);

	var mobilephone = Titanium.UI.createTextField({
		color:'#336699',
		height:'40dp',
		width:'200dp',
		top:'10dp',
		hintText: 'Mobile Phone',
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	scrollView.add(mobilephone);
	
	var workphone = Titanium.UI.createTextField({
		color:'#336699',
		height:'40dp',
		width:'200dp',
		top:'10dp',
		hintText: 'Work Phone',
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	scrollView.add(workphone);
	
	var homephone = Titanium.UI.createTextField({
		color:'#336699',
		height:'40dp',
		width:'200dp',
		top:'10dp',
		hintText: 'Home Phone',
		keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
		returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	scrollView.add(homephone);
	
	var create = Ti.UI.createButton({
		title:'Create Account',
		height:'40dp',
		width:'200dp',
		top:'10dp'
	});

	scrollView.add(create);
	
	create.addEventListener('click', function(e){
		//todo

		var createAccount = Ti.Network.createHTTPClient();

		createAccount.onerror = function(){
			activityIndicator.hide();
			alert("An error has occured. Please try again.");
		}
		
		createAccount.onload = function()
		{
			activityIndicator.hide();
			var json = this.responseText;
			var response = JSON.parse(json).d;
			var JSONobjresponse = JSON.parse(response);
			alert(JSONobjresponse[0].error);


			/*
				Ti.App.Properties.setString('username', JSONobjresponse.UserName);
				Ti.App.Properties.setString('userid', JSONobjresponse.ID);
				//alert("username: " + JSONobjresponse.username + "; id" + JSONobjresponse.ID);
				navController.open(new reservationWindow(navController));			
						
			if (response.status == "success")
			{
				navController.open(new forgotPassWindow(navController));
				alert("Status: " + response.status);
				//alert("Welcome " + response.name + ". Your email is: " + response.email);
			}
			else
			{
				alert(response.message);
			}
			*/
		};
				
		//toast.show();
		if (username.value != '' && password.value != '')
		{
			//var host = "http://192.168.1.122/";
			var host = "http://10.0.1.9/";			
			activityIndicator.show();
			//createAccount.open("POST","http://192.168.1.73/vikings.ph/create.php");
			createAccount.setRequestHeader('Content-Type', 'application/json');
			createAccount.open("POST", host + "wp/VikingsWS.asmx/CreateAccount");
			var params = {
				username: username.value,
				password: password.value,
				firstname: firstname.value,
				lastname: lastname.value,
				birthdate: birthdate.value,
				address1: address1.value,
				address2: address2.value,
				city: city.value,
				email: email.value,
				mobilephone: mobilephone.value,
				workphone: workphone.value,
				homephone: homephone.value
			};
			//createAccount.send(params);
			//alert(JSON.stringify(params));
			createAccount.send(JSON.stringify(params));
		}
		else
		{
			/*
			if(Ti.App.name !== 'iPhone OS'){
				toast = Titanium.UI.createNotification({
					duration: Ti.UI.NOTIFICATION_DURATION_LONG,
					message: "Please complete required fields."
				});
	
				toast.show();
			}
			*/
		}
		
		/*
		var toast = Titanium.UI.createNotification({
			duration: Ti.UI.NOTIFICATION_DURATION_LONG,
			message: "username: " + username.value + "\n" +
					"password: " + password.value + "\n" +
					"confirm password: " + confirmPassword.value + "\n" +
					"firstname: " + firstname.value + "\n" +
					"lastname: " + lastname.value + "\n" +
					"address1: " + address1.value + "\n" +
					"address2: " + address2.value + "\n" +
					"city: " + city.value + "\n" +
					"email: " + email.value + "\n" +
					"mobilephone: " + mobilephone.value + "\n" +
					"homephone: " + homephone.value + "\n" +
					"workphone: " + workphone.value
		});
		toast.show();
		*/
		
		/*
		Ti.API.info("username: " + username.value);
		Ti.API.info("password: " + password.value);
		Ti.API.info("confirm password: " + confirmPassword.value);
		Ti.API.info("firstname: " + firstname.value);
		Ti.API.info("lastname: " + lastname.value);
		Ti.API.info("address1: " + address1.value);
		Ti.API.info("address2: " + address2.value);
		Ti.API.info("city: " + city.value);
		Ti.API.info("email: " + email.value);
		Ti.API.info("mobilephone: " + mobilephone.value);
		Ti.API.info("workphone: " + workphone.value);
		Ti.API.info("homephone: " + homephone.value);
		*/
	});
	
	return win;
	
}

module.exports = createWindow;

