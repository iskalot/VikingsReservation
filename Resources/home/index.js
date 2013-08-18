
homeWindow = function(navController){
	var win = Ti.UI.createWindow({
		title:'Home',
		backgroundColor:'#fff',
		layout:'vertical'
	});
	

	var smmoa = Ti.UI.createButton({
		title:'SM MOA',
		height:'60dp',
		width:'200dp',
		top:'20dp'
	});

	win.add(smmoa);

	smmoa.addEventListener('click', function(e){
		navController.open(new loginWindow(navController));
	});
	
	var smne = Ti.UI.createButton({
		title:'SM North Edsa',
		height:'60dp',
		width:'200dp',
		top:'20dp'
	});

	win.add(smne);

	smne.addEventListener('click', function(e){
		navController.open(new loginWindow(navController));
	});

	var smm = Ti.UI.createButton({
		title:'SM Marikina',
		height:'60dp',
		width:'200dp',
		top:'20dp'
	});

	smm.addEventListener('click', function(e){
		navController.open(new loginWindow(navController));
	});

	win.add(smm);
	
	
	
	return win;
	
};

module.exports = homeWindow;

/*
var dateOfBirth = Ti.UI.createPicker({
    type: Ti.UI.PICKER_TYPE_DATE,
    minDate:new Date(1900,1,1),
    maxDate:new Date(2000,1,1),
    value:new Date(1995,8,1)
  });

var birthDayLine = Titanium.UI.createTextField({
	color:'#336699',
	top:10,
	width:300,
	height:60,
	hintText:'Birthday',
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
  
  var dateUpdated = false; 
  
  birthDayLine.addEventListener('click', function(e) { 
    dateOfBirth.showDatePickerDialog({
      value: new Date(1995,8,1),
      callback: function(e) {
        if (e.cancel) {
          //Ti.API.info('User canceled dialog');
        } else {
          //dateValue.value = e.value;
          //dateValue.text = (e.value.getMonth() + 1) + '/' + e.value.getDate() + '/' + e.value.getFullYear(),
          
          birthDayLine.value = (e.value.getMonth() + 1) + '/' + e.value.getDate() + '/' + e.value.getFullYear(),
          dateUpdated = true;
        }
      }
    });
  });
  */