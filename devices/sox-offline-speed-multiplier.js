const maxAPI = require('max-api');
var soxPath = require('sox-bin');
const SoxAsync = require('sox-async');
const sox = new SoxAsync(soxPath);

maxAPI.addHandler('SoX', (os, source, destination, ratio) => {
    if (os && source && destination && ratio) {
        if (os == 'macintosh') {
            source = source.substring(source.indexOf(':')+1);
            destination = destination.substring(destination.indexOf(':')+1);
        }
        sox.run({
            inputFile: source,
            outputFile: destination,
            effects: ['speed', ratio]
        })
        .then(outputFilePath => {
            const msg = 'Job Complete! - ' + outputFilePath;
            console.log(msg);
            maxAPI.outlet(msg);
        })
        .catch(err => {
            console.log(err);
            maxAPI.outlet(err);
        });
    } else {
        const msg = 'Error! Missing Argument!';
        console.log(msg);
        maxAPI.outlet(msg);
    }
});