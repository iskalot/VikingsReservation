var NavigationController = require('NavigationController'),
//SettingsController = require('SettingsController'),
homeWindow = require('home/index'),
loginWindow = require('account/login/index'),
createWindow = require('account/create/index'),
reservationWindow = require('reservation/index'),
forgotPassWindow = require('account/forgotpassword/index');


var controller = new NavigationController();

	if(Ti.App.Properties.getString('username') != null || Ti.App.Properties.getString('userid') != null){
		controller.open(new reservationWindow(controller));
		//alert(Ti.App.Properties.getString('username'));
	}else{
		controller.open(new loginWindow(controller));		
	}


//controller.open(new homeWindow(controller));
//controller.open(new reservationWindow(controller));

//controller.open(new createWindow(controller));
//controller.open(new reservationWindow(controller));