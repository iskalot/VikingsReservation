var win = Titanium.UI.currentWindow;

function randomInt(max){
  return Math.floor(Math.random() * max) + 1;
}

var tableData = [];
//var tableView;
var branches = ['SM Mall of Asia', 'SM North Edsa', 'SM Marikina'];
var time = ['Dinner', 'Lunch'];
var occasions = ['Birthday', 'Promotion', 'Christening', 'Despedida'];

var getReservations = Ti.Network.createHTTPClient();

var host = Ti.App.Properties.getString("wshost");
getReservations.setRequestHeader('Content-Type', 'application/json');
getReservations.open("POST", host + "wp/VikingsWS.asmx/GetReservations");
var params = {
	CustomerID: Ti.App.Properties.getString("userid"),
	DateReservationMadeFrom: '1990-01-01', 
	DateReservationMadeTo: '2013-12-12'
};
getReservations.send(JSON.stringify(params));

getReservations.onload = function(){
	var json = this.responseText;
	var response = JSON.parse(json).d;
	var JSONobjresponse = JSON.parse(response);
	//alert(response);


	if(JSONobjresponse instanceof Array){
	//alert("jsonobresponse instance of array");	
		for (var i=0; i < JSONobjresponse.length; i++){
			
		  if(JSONobjresponse[i].branchID == "") continue;
		  
		  var row = Ti.UI.createTableViewRow({
		    selectedBackgroundColor:'white',
		    height:220
		  });
		  
		  var branchLabel = Ti.UI.createLabel({
		    color:'#576996',
		    font:{fontFamily:'Arial', fontSize:34, fontWeight:'bold'},
		    text:branches[JSONobjresponse[i].branchID],
		    left:70, top: 6,
		    width:'100%', height: 50
		  });
		  row.add(branchLabel);
		  
		  var labelDetails = Ti.UI.createLabel({
		    color:'#222',
		    font:{fontFamily:'Arial', fontSize:28, fontWeight:'normal'},
		    text: time[randomInt(1)] + ' | ' + JSONobjresponse[i].Occasion + ' | ' + 'Guests: Senior - ' + JSONobjresponse[i].Senior + ', Adult(s) - ' + JSONobjresponse[i].Adult + ', Children - ' + JSONobjresponse[i].Children,
		    left:70, top:60,
		    width:'100%'
		  });
		  row.add(labelDetails);
		  
		  
		  var labelDate = Ti.UI.createLabel({
		    color:'#999',
		    font:{fontFamily:'Arial', fontSize:28, fontWeight:'normal'},
		    text:'on ' + JSONobjresponse[i].DateReservationMade,
		    left:105, bottom:5,
		    width:'100%', height:20
		  });
		  row.add(labelDate);
		  
		  tableData.push(row);
		}
	}
	
	var tableView = Ti.UI.createTableView({
	  backgroundColor:'white',
	  data:tableData
	});
	
	win.add(tableView);
}
