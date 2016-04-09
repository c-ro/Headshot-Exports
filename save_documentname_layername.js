// save image with "doc name + layer name".ext

displayDialogs = DialogModes.NO; //suppress dialogs

var	filenameExt = app.activeDocument.name; // Jane Doe Headshot.psd
var filename = filenameExt.replace(/\.(gif|jpg|jpeg|tiff|png|psd)$/i,''); // Jane Doe Headshot
var	layerName = activeDocument.activeLayer.name;
var outputFolderPath = "/Path/To/Your/Folder" + filename + "s";
var jpegOptions = new JPEGSaveOptions();
    jpegOptions.quality = 10;

(function mkdir(path) {  
  var folder = new Folder(path);  
     
  if (!folder.exists) {  
    var parts = path.split('/');  
    parts.pop();  
    mkdir(parts.join('/'));  
    folder.create();  
  }  
}(outputFolderPath));

activeDocument.saveAs(new File(outputFolderPath + "/" + filename + " " + layerName + ".jpg"), jpegOptions);