// Start Headshot Action set
var filename = activeDocument.name;

var dlg = new Window(
	'dialog', 
	'Export Headshot',
	[100,100,480,600]
); 

if(filename.toLowerCase().indexOf("headshot") > -1){
	doAction("Matte", "HEADSHOTS"); // (action, from)
}