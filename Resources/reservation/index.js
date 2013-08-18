reservationWindow = function(navController){
	var tabGroup = Titanium.UI.createTabGroup({navBarHidden:true, tabsAtBottom: true});
	
	var newreservationwindow = Titanium.UI.createWindow({  
	    title: 'New Reservation',
	    backgroundColor: '#fff',
	    navBarHidden: true,
	    url: 'reservation/new.js',
	    navigation: navController
	});
	
	var newreservationtab = Titanium.UI.createTab({  
	    //icon:'KS_nav_ui.png',
	    title: 'New Reservation',
	    window: newreservationwindow
	});
	
	var listreservationswindow = Titanium.UI.createWindow({  
	    title: 'My Reservations',
	    backgroundColor: '#fff',
	    navBarHidden: true,
	    url: 'reservation/list.js',
	    navigation: navController
	});
	var listreservationstab = Titanium.UI.createTab({  
	    //icon:'KS_nav_ui.png',
	    title: 'My Reservations',
	    window: listreservationswindow
	});
	
	tabGroup.addTab(newreservationtab);
	tabGroup.addTab(listreservationstab);
	tabGroup.setActiveTab(0);
	
	return tabGroup;
};

module.exports = reservationWindow;