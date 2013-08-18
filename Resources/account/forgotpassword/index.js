
forgotPassWindow = function(){
	var win = Ti.UI.createWindow({
		title:'Forgot Password',
		backgroundColor:'#fff',
		layout:'vertical'
	});
	
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
	win.add(email);

	var submit = Ti.UI.createButton({
		title:'Submit',
		height:'40dp',
		width:'200dp',
		top:'10dp'
	});

	win.add(submit);
	
	return win;
	
};

module.exports = forgotPassWindow;
