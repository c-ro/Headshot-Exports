var filename = activeDocument.name;

var dlg = new Window(
	'dialog', 
	'Export Headshot',
	[100,100,480,600]
); 

if(filename.toLowerCase().indexOf("headshot") > -1){
	try {
		dlg.btnPnl.testBtn.onClick = doAction("Export", "HEADSHOTS"); // (action, from)
	} finally {
		app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
	}
}


