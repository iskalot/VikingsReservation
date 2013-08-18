var win = Titanium.UI.currentWindow;

function randomInt(max){
  return Math.floor(Math.random() * max) + 1;
}

var defaultFontSize = Ti.Platform.name === 'android' ? 16 : 14;

var tableData = [];
var branches = ['SM Mall of Asia', 'SM North Edsa', 'SM Marikina'];
var time = ['Dinner', 'Lunch'];
var occasions = ['Birthday', 'Promotion', 'Christening', 'Despedida'];

for (var i=1; i<=10; i++){
  var row = Ti.UI.createTableViewRow({
    className:'forumEvent', // used to improve table performance
    selectedBackgroundColor:'white',
    rowIndex:i, // custom property, useful for determining the row during events
    height:110
  });
  
  var labelUserName = Ti.UI.createLabel({
    color:'#576996',
    font:{fontFamily:'Arial', fontSize:defaultFontSize+6, fontWeight:'bold'},
    text:branches[randomInt(2)],
    left:70, top: 6,
    width:200, height: 30
  });
  row.add(labelUserName);
  
  var labelDetails = Ti.UI.createLabel({
    color:'#222',
    font:{fontFamily:'Arial', fontSize:defaultFontSize+2, fontWeight:'normal'},
    text: time[randomInt(1)] + ' | ' + occasions[randomInt(3)] + ' | ' + 'Guests: ' + randomInt(10),
    left:70, top:44,
    width:360
  });
  row.add(labelDetails);
  
  
  var labelDate = Ti.UI.createLabel({
    color:'#999',
    font:{fontFamily:'Arial', fontSize:defaultFontSize, fontWeight:'normal'},
    text:'on ' + randomInt(30) + ' July 2013',
    left:105, bottom:10,
    width:200, height:20
  });
  row.add(labelDate);
  
  tableData.push(row);
}

var tableView = Ti.UI.createTableView({
  backgroundColor:'white',
  data:tableData
});

win.add(tableView);