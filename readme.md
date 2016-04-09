# Headshot Exports

These scripts streamline the process of editing, cropping, and exporting headshots in Adobe Photoshop CC 2015.  Input is one unretouched image file, output is a folder named after the original image containing three files:

* 1:1 @ 500px 72dpi (common social media profile pic)
* 4:5 @ 480x600px 72dpi (general purpose web)
* 4:5 cropped from native resolution/dimensions ("full" sized)

## Usage

1. Open an image file with the naming convention "___NAME___ Headshot". (__NAME__ can be any number of first, last, and middle names)
2. Start editing the portrait. The photoshop action set HEADSHOTS should be executed from top to bottom. The first action, Matte is triggered upon opening the file.
3. Once you are happy with the look of your portrait, save the file (Command + S)
4. Position the square crop box and hit return.
5. Position the rectangular crop box and hit return.
6. Take a sip of coffee and get back to work.

## Installation

1. Download the project.
2. Open Photoshop and navigate to: File > Scripts > Scripts Event Manager. . .
3. Click "Enable Events to Run Scripts/Actions"
4. Add "Photoshop Event: Open Document" and "Script: begin hs.js" to the list
5. Add "Photoshop Event: Save Document" and "Script: end hs.js" to the list
6. Add HEADSHOTS.atn to your Actions Panel
7. In *save_documentname_layername.js* edit the line `var outputFolderPath = "/Your/Path/Here" + filename + "s";` to reflect whereever you want to save your files.
8. That's probably it, HMU on [twitter](http://www.twitter.com/gnirtsmodnar) if you have any trouble.