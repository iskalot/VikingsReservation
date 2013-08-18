SettingsController = function() {
	this.windowStack = [];
};

SettingsController.prototype.open = function(/*Ti.UI.Window*/windowToOpen) {
	//add the window to the stack of windows managed by the controller
	this.windowStack.push(windowToOpen);

	//grab a copy of the current nav controller for use in the callback
	var that = this;
	windowToOpen.addEventListener('close', function() {
		if (that.windowStack.length > 1)	// don't pop the last Window, which is the base one
		{
			that.windowStack.pop();
		}
	});
	
	//hack - setting this property ensures the window is "heavyweight" (associated with an Android activity)
	windowToOpen.navBarHidden = windowToOpen.navBarHidden || false;

	//This is the first window
	if(this.windowStack.length === 1) {
		if(Ti.Platform.osname === 'android') {
			windowToOpen.exitOnClose = true;
			windowToOpen.open();
		} else {
			this.navGroup = Ti.UI.iPhone.createSettingsGroup({
				window : windowToOpen
			});
			var containerWindow = Ti.UI.createWindow();
			containerWindow.add(this.navGroup);
			containerWindow.open();
		}
	}
	//All subsequent windows
	else {
		if(Ti.Platform.osname === 'android') {
			windowToOpen.open();
		} else {
			this.navGroup.open(windowToOpen);
		}
	}
};

//go back to the initial window of the SettingsController
SettingsController.prototype.home = function() {
	//store a copy of all the current windows on the stack
	var windows = this.windowStack.concat([]);
	for(var i = 1, l = windows.length; i < l; i++) {
		(this.navGroup) ? this.navGroup.close(windows[i]) : windows[i].close();
	}
	this.windowStack = [this.windowStack[0]]; //reset stack
};

/*
 * This back function came from Matthew Lanham's version on
 * https://github.com/swanify/Titanium-Settings-Controller
 */
SettingsController.prototype.back = function(w) {
		//store a copy of all the current windows on the stack
		if(Ti.Platform.osname === 'android') {
			w.close();
		} else {
			this.navGroup.close(w);
		}
};

module.exports = SettingsController;

/*
 * Author: www.sunfishempire.com
 * This is my version of the SettingsController file
 * Modified from Kevin Whinnery's version on 
 * https://github.com/kwhinnery/SettingsController
 * Uses the commonJS pattern, works on Android 2.3.3, iPhone 5.1, and 
 * Titanium Mobile 2.0 SDK.
 */