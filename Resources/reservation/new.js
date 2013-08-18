var win = Titanium.UI.currentWindow;

var loginWindow = require('account/login/index');

var navController = win.navigation;

alert(Ti.App.Properties.getString('username') + ' ' + Ti.App.Properties.getString('userid'));

var branchDialog = Ti.UI.createOptionDialog({
	options: ['SM Mall of Asia', 'SM North EDSA', 'SM Marikina'],
	title: 'Select Branch',
});

var scheduleDialog = Ti.UI.createOptionDialog({
	options: ['Lunch', 'Dinner'],
	title: 'Select Schedule',
});

var seniorDialog = Ti.UI.createOptionDialog({
	options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
	title: 'Select Number of Senior Guests',
});

var adultDialog = Ti.UI.createOptionDialog({
	options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
	title: 'Select Number of Adults',
});

var childrenDialog = Ti.UI.createOptionDialog({
	options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
	title: 'Select Number of Children',
});

var occasionDialog = Ti.UI.createOptionDialog({
	options: ['Birthday', 'Promotion', 'Christening', 'Despedida'],
	title: 'Select Occasion',
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
		
var tableData = [];

var spacerRow = Ti.UI.createTableViewRow({
	className: 'grid',
	layout: 'horizontal',
	height: '50dp'
});

var spacerRowView = Ti.UI.createView({
	objName:"grid-view",
	objIndex: 1,
	backgroundColor: '#ffffff',
	left: 1,
	height: '50dp',
	width: '150dp'
});

var spacerRowLabel = Ti.UI.createLabel({
	color:"black",
	font:{fontSize:34,fontWeight:'bold'},
	text:'',
	touchEnabled:false,
	left: 1
});

var spacerRowViewValue = Ti.UI.createView({
	objName:"grid-view",
	objIndex: 0,
	backgroundColor: '#ffffff',
	//left: ySpacer,
	height: '50dp',
	width: '120dp'
});

var spacerRowValue = Ti.UI.createLabel({
	color:"black",
	font:{fontSize:34,fontWeight:'normal'},
	text:'',
	touchEnabled:false,
	left: 0
});


spacerRowView.add(spacerRowLabel);
spacerRow.add(spacerRowView);
spacerRowViewValue.add(spacerRowValue);
spacerRow.add(spacerRowViewValue);



var branchesRow = Ti.UI.createTableViewRow({
	className: 'grid',
	layout: 'horizontal',
	height: '50dp'
});

var branchesRowView = Ti.UI.createView({
	objName:"grid-view",
	objIndex: 1,
	backgroundColor: '#ffffff',
	left: 1,
	height: '50dp',
	width: '150dp'
});

var branchesRowLabel = Ti.UI.createLabel({
	color:"black",
	font:{fontSize:34,fontWeight:'bold'},
	text:'Branch',
	touchEnabled:false,
	left: 1
});

var branchesRowViewValue = Ti.UI.createView({
	objName:"grid-view",
	objIndex: 0,
	backgroundColor: '#ffffff',
	//left: ySpacer,
	height: '50dp',
	width: '120dp'
});

var branchesRowValue = Ti.UI.createLabel({
	color:"black",
	font:{fontSize:34,fontWeight:'normal'},
	text:'SM Mall of Asia',
	touchEnabled:false,
	left: 0
});


branchesRowView.add(branchesRowLabel);
branchesRow.add(branchesRowView);
branchesRowViewValue.add(branchesRowValue);
branchesRow.add(branchesRowViewValue);



var dateRow = Ti.UI.createTableViewRow({
	className: 'grid',
	layout: 'horizontal',
	height: '50dp'
});

var dateRowView = Ti.UI.createView({
	objName:"grid-view",
	objIndex: 1,
	backgroundColor: '#ffffff',
	left: 1,
	height: '50dp',
	width: '150dp'
});

var dateRowLabel = Ti.UI.createLabel({
	color:"black",
	font:{fontSize:34,fontWeight:'bold'},
	text:'Date',
	touchEnabled:false,
	left: 1
});

var dateRowViewValue = Ti.UI.createView({
	objName:"grid-view",
	objIndex: 0,
	backgroundColor: '#ffffff',
	//left: ySpacer,
	height: '50dp',
	width: '120dp'
});

var dateRowValue = Ti.UI.createLabel({
	color:"black",
	font:{fontSize:34,fontWeight:'normal'},
	text:'Thursday, Aug 12, 2013',
	touchEnabled:false,
	left: 0
});


dateRowView.add(dateRowLabel);
dateRow.add(dateRowView);
dateRowViewValue.add(dateRowValue);
dateRow.add(dateRowViewValue);



var scheduleRow = Ti.UI.createTableViewRow({
	className: 'grid',
	layout: 'horizontal',
	height: '50dp'
});

var scheduleRowView = Ti.UI.createView({
	objName:"grid-view",
	objIndex: 1,
	backgroundColor: '#ffffff',
	left: 1,
	height: '50dp',
	width: '150dp'
});

var scheduleRowLabel = Ti.UI.createLabel({
	color:"black",
	font:{fontSize:34,fontWeight:'bold'},
	text:'Schedule',
	touchEnabled:false,
	left: 1
});

var scheduleRowViewValue = Ti.UI.createView({
	objName:"grid-view",
	objIndex: 0,
	backgroundColor: '#ffffff',
	//left: ySpacer,
	height: '50dp',
	width: '120dp'
});

var scheduleRowValue = Ti.UI.createLabel({
	color:"black",
	font:{fontSize:34,fontWeight:'normal'},
	text:'Lunch',
	touchEnabled:false,
	left: 0
});


scheduleRowView.add(scheduleRowLabel);
scheduleRow.add(scheduleRowView);
scheduleRowViewValue.add(scheduleRowValue);
scheduleRow.add(scheduleRowViewValue);



var seniorRow = Ti.UI.createTableViewRow({
	className: 'grid',
	layout: 'horizontal',
	height: '50dp'
});

var seniorRowView = Ti.UI.createView({
	objName:"grid-view",
	objIndex: 1,
	backgroundColor: '#ffffff',
	left: 1,
	height: '50dp',
	width: '150dp'
});

var seniorRowLabel = Ti.UI.createLabel({
	color:"black",
	font:{fontSize:34,fontWeight:'bold'},
	text:'Senior',
	touchEnabled:false,
	left: 1
});

var seniorRowViewValue = Ti.UI.createView({
	objName:"grid-view",
	objIndex: 0,
	backgroundColor: '#ffffff',
	//left: ySpacer,
	height: '50dp',
	width: '120dp'
});

var seniorRowValue = Ti.UI.createLabel({
	color:"black",
	font:{fontSize:34,fontWeight:'normal'},
	text:'1',
	touchEnabled:false,
	left: 0
});



seniorRowView.add(seniorRowLabel);
seniorRow.add(seniorRowView);
seniorRowViewValue.add(seniorRowValue);
seniorRow.add(seniorRowViewValue);




var adultRow = Ti.UI.createTableViewRow({
	className: 'grid',
	layout: 'horizontal',
	height: '50dp'
});

var adultRowView = Ti.UI.createView({
	objName:"grid-view",
	objIndex: 1,
	backgroundColor: '#ffffff',
	left: 1,
	height: '50dp',
	width: '150dp'
});

var adultRowLabel = Ti.UI.createLabel({
	color:"black",
	font:{fontSize:34,fontWeight:'bold'},
	text:'Adults',
	touchEnabled:false,
	left: 1
});

var adultRowViewValue = Ti.UI.createView({
	objName:"grid-view",
	objIndex: 0,
	backgroundColor: '#ffffff',
	//left: ySpacer,
	height: '50dp',
	width: '120dp'
});



var adultRowValue = Ti.UI.createLabel({
	color:"black",
	font:{fontSize:34,fontWeight:'normal'},
	text:'1',
	touchEnabled:false,
	left: 0
});


adultRowView.add(adultRowLabel);
adultRow.add(adultRowView);
adultRowViewValue.add(adultRowValue);
adultRow.add(adultRowViewValue);


var childrenRow = Ti.UI.createTableViewRow({
	className: 'grid',
	layout: 'horizontal',
	height: '50dp'
});

var childrenRowView = Ti.UI.createView({
	objName:"grid-view",
	objIndex: 1,
	backgroundColor: '#ffffff',
	left: 1,
	height: '50dp',
	width: '150dp'
});

var childrenRowLabel = Ti.UI.createLabel({
	color:"black",
	font:{fontSize:34,fontWeight:'bold'},
	text:'Children',
	touchEnabled:false,
	left: 1
});

var childrenRowViewValue = Ti.UI.createView({
	objName:"grid-view",
	objIndex: 0,
	backgroundColor: '#ffffff',
	//left: ySpacer,
	height: '50dp',
	width: '120dp'
});



var childrenRowValue = Ti.UI.createLabel({
	color:"black",
	font:{fontSize:34,fontWeight:'normal'},
	text:'1',
	touchEnabled:false,
	left: 0
});


childrenRowView.add(childrenRowLabel);
childrenRow.add(childrenRowView);
childrenRowViewValue.add(childrenRowValue);
childrenRow.add(childrenRowViewValue);





var occasionRow = Ti.UI.createTableViewRow({
	className: 'grid',
	layout: 'horizontal',
	height: '50dp'
});

var occasionRowView = Ti.UI.createView({
	objName:"grid-view",
	objIndex: 1,
	backgroundColor: '#ffffff',
	left: 1,
	height: '50dp',
	width: '150dp'
});

var occasionRowLabel = Ti.UI.createLabel({
	color:"black",
	font:{fontSize:34,fontWeight:'bold'},
	text:'Occasion',
	touchEnabled:false,
	left: 1
});

var occasionRowViewValue = Ti.UI.createView({
	objName:"grid-view",
	objIndex: 0,
	backgroundColor: '#ffffff',
	//left: ySpacer,
	height: '50dp',
	width: '120dp'
});

var occasionRowValue = Ti.UI.createLabel({
	color:"black",
	font:{fontSize:34,fontWeight:'normal'},
	text:'Birthday',
	touchEnabled:false,
	left: 0
});


occasionRowView.add(occasionRowLabel);
occasionRow.add(occasionRowView);
occasionRowViewValue.add(occasionRowValue);
occasionRow.add(occasionRowViewValue);

tableData.push(spacerRow);
tableData.push(branchesRow);
tableData.push(dateRow);
tableData.push(scheduleRow);
tableData.push(seniorRow);
tableData.push(adultRow);
tableData.push(childrenRow);
tableData.push(occasionRow);

var tableView = Ti.UI.createTableView({
    data:tableData,
    width: '300dp',
    top: '10dp',
    separatorColor: 'gray'
});

var scrollView = Titanium.UI.createScrollView({
    contentWidth: 'auto',
    contentHeight: 'auto',
    top: 0,
    bottom: 0,
    showVerticalScrollIndicator: true,
    showHorizontalScrollIndicator: true,
    height: '90%',
    width: '100%',
    layout: 'vertical'
});

scrollView.add(activityIndicator);

scrollView.add(tableView);

var submit = Ti.UI.createButton({
	title:'Submit Reservation',
	height:'50dp',
	width:'300dp',
	top: '5dp'
});

scrollView.add(submit);

var logout = Ti.UI.createButton({
	title:'Logout',
	height:'50dp',
	width:'300dp',
	top: '5dp'
});

scrollView.add(logout);

logout.addEventListener('click', function(e){
	Ti.App.Properties.setString('username', null);
	Ti.App.Properties.setString('userid', null);
	navController.open(new loginWindow(navController));
});


submit.addEventListener('click', function(e){
	var addReservation = Ti.Network.createHTTPClient({

	onload : function()
	{
		activityIndicator.hide();
		var json = this.responseText;
		var response = JSON.parse(json).d;
		alert(response);
		var JSONobjresponse = JSON.parse(response);
		/*
		if (JSONobjresponse.AddReservation == "Reservation Created")
		{
			//navController.open(new forgotPassWindow(navController));
			alert("New reservation has been created under your account.");
			//alert("Welcome " + response.name + ". Your email is: " + response.email);
		}
		else
		{
			alert("Reservation creation failed.");
			//alert(response.message);
		}
		*/
	},
	onerror:function(e){
		alert(JSON.stringify(e));
	},timeout:5000});
	
	activityIndicator.show();
	
	var occasion = occasionDialog.getOptions();
	
	addReservation.open("POST","http://10.0.1.9/wp/VikingsWS.asmx/AddReservation");
	//alert(Ti.App.Properties.getString('username') + Ti.App.Properties.getString('userid'));
	var params = {
		ID: Ti.App.Properties.getString('userid'),
		//branchid: branchDialog.getOptions().indexOf(branchesRowValue.text),
		branchid: branchDialog.getOptions().indexOf(branchesRowValue.text),
		DateReservationMade: ' ',
		senior: seniorRowValue.text,
		children: childrenRowValue.text,
		adult: adultRowValue.text,
		occasion: 'Bday'
		/*
		branchid: Math.floor(Math.random() * 3),
		senior: Math.floor(Math.random() * 20) + 1,
		children: Math.floor(Math.random() * 20) + 1,
		adult: Math.floor(Math.random() * 20) + 1,
		occasion: 'Birthday'
		//occasion: occasion[Math.floor(Math.random() * 4)]
		*/
	};
	alert(JSON.stringify(params));
	addReservation.setRequestHeader('Content-Type', 'application/json');
	addReservation.send(JSON.stringify(params));
		/*
	var toast = Titanium.UI.createNotification({
		duration: Ti.UI.NOTIFICATION_DURATION_LONG,
		message: "branch: " + branchesRowViewValue.children[0].text + "\n" +
				 "date: " + dateRowViewValue.children[0].text + "\n" +
				 "schedule: " + scheduleRowViewValue.children[0].text + "\n" +
				 "guests: " + guestRowViewValue.children[0].text + "\n" +
				 "occasion: " + occasionRowViewValue.children[0].text
	});

	toast.show();
	*/
});

win.add(scrollView);
//win.add(submit);

branchesRow.addEventListener('click', function(e){

	branchDialog.show();

	branchDialog.addEventListener('click', function(ex){
		var branch = branchDialog.getOptions();
		branchesRowValue.text = branch[ex.index];
		//alert(ex.index);
		//alert(branchDialog.getOptions().indexOf('SM Mall of Asia'));
	});

	//alert('branch click');
});

scheduleRow.addEventListener('click', function(e){

	scheduleDialog.show();

	scheduleDialog.addEventListener('click', function(ex){
		var schedule = scheduleDialog.getOptions();
		scheduleRowValue.text = schedule[ex.index];
		//alert(ex.index);
		//alert(branchDialog.getOptions().indexOf('SM Mall of Asia'));
	});
	

	//alert('branch click');
});


seniorRow.addEventListener('click', function(e){

	seniorDialog.show();

	seniorDialog.addEventListener('click', function(ex){
		var senior = seniorDialog.getOptions();
		seniorRowValue.text = senior[ex.index];
		//alert(ex.index);
		//alert(branchDialog.getOptions().indexOf('SM Mall of Asia'));
	});
	

	//alert('branch click');
});

adultRow.addEventListener('click', function(e){

	adultDialog.show();

	adultDialog.addEventListener('click', function(ex){
		var adult = adultDialog.getOptions();
		adultRowValue.text = adult[ex.index];
		//alert(ex.index);
		//alert(branchDialog.getOptions().indexOf('SM Mall of Asia'));
	});
	

	//alert('branch click');
});

childrenRow.addEventListener('click', function(e){

	childrenDialog.show();

	childrenDialog.addEventListener('click', function(ex){
		var children = childrenDialog.getOptions();
		childrenRowValue.text = children[ex.index];
		//alert(ex.index);
		//alert(branchDialog.getOptions().indexOf('SM Mall of Asia'));
	});
	

	//alert('branch click');
});


occasionRow.addEventListener('click', function(e){

	occasionDialog.show();

	occasionDialog.addEventListener('click', function(ex){
		var occasion = occasionDialog.getOptions();
		occasionRowValue.text = occasion[ex.index];
		//alert(ex.index);
		//alert(branchDialog.getOptions().indexOf('SM Mall of Asia'));
	});
	

	//alert('branch click');
});


dateRow.addEventListener('click', function(e){
/*
	occasionDialog.show();

	occasionDialog.addEventListener('click', function(ex){
		var occasion = occasionDialog.getOptions();
		dateRowValue.text = occasion[ex.index];
		//alert(ex.index);
		//alert(branchDialog.getOptions().indexOf('SM Mall of Asia'));
	});
	
*/
	//alert('branch click');
});