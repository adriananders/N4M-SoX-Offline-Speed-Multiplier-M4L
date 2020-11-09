<h1>User Guide</h1>

Offline Speed Multiplier - An example implementation of controling [SoX - Sound Exchange](http://sox.sourceforge.net/) via [N4M (Node For Max](https://docs.cycling74.com/nodeformax/api/) and [Max For Live](https://www.ableton.com/en/live/max-for-live/) for offline audio file manipulation within Ableton Live.

<h2>Why?</h2>
  <ul>Demonstration of using SoX for offline scripted file processing within Ableton</ul>
  <ul>Offer an easy way to speed up files from within Ableton to simulate the memory-saving sampling techniques of 1980-90's producers without opening an external editor</ul>

<h2>Requirements</h2>
  <ul>Ableton Live 10 (tested with Live 10.1.25 on MacOS 10.14.6 Mojave)</ul>
  <ul>Max For Live 8 (made with 8.1.8 on MacOS 10.14.6 Mojave)</ul>

<h2>Node Package Dependencies</h2>
  <ul>[sox-bin](https://www.npmjs.com/package/sox-bin)</ul>
  <ul>[sox-async](https://www.npmjs.com/package/sox-async)</ul>

<h2>Usage</h2>

Add the file [SoX Offline Speed Multiplier.amxd](/devices/SoX Offline Speed Multiplier.amxd) to your preferred Max For Live Audio Effects Path.<br>
Drag and drop the patch into an available empty channel as an audio effect.<br>
Incoming audio is not effected by the device, but is merely a direct audio passthrough.<br>
This device was deigned to be an offline audio effect for existing audio files similar to the offline "Change Speed" effect in Audacity.

<h2>Node & NPM Notes</h2>
 <ul> On first load, if you're loading from the github cloned package that is not bundled with the node dependencies, the node depenencies will automatically download from npm (requires an internet connection).
 <ul> On Windows you may need to delete and reload the patch for proper operation after downloading node dependencies from npm the first time.</ul>

<h2>User Interface Guide</h2>

<h4>Status</h4>
A message window of the current state of Node operations. Used to debug issues with SoX and/or node.

<h4>Source</h4>
Selects the "Source" audio file for the operation. Required field. Must be an existing file.<br>
Refer to the [SoX Documentation](http://sox.sourceforge.net/Docs/Features) for the currently supported file types.<br>
Browse triggers an OS-specific file dialog box for selecting the source file.<br>
Drag + Drop is a drop area for leveraging Ableton's built-in file browser or the OS file browser to drop files to select as the source.<br>
The file path is specified in an editable text box for typing out a source file path (note that a drive name should be included in the path, even on MacOS).

<h4>Destination</h4>
Selects the "Destination" audio file for the operation. Required field. May or may not be an existing file.<br>
Refer to the [SoX Documentation](http://sox.sourceforge.net/Docs/Features) for the currently supported file types.<br>
Browse triggers an OS-specific file dialog box for specifying the destination file.<br>
Drag + Drop is a drop area for leveraging Ableton's built-in file browser or the OS file browser to drop files to select as the destination.<br>
The file path is specified in an editable text box for typing out a destination file path (note that a drive name should be included in the path, even on MacOS).

<h4>Speed Multiplier Buttons</h4>
Ranging from 2x - 8x, the buttons trigger the operation to multiply the speed (equally affecting pitch and tempo in the same way as an old school sampler would) by the specified factor. Triggers the node script to run SoX as an asyncronous operation on the specified source audio file, saving to the destination path.