let convertXMLToJSON = require('xml2js');

var xmlData = '<?xml version="1.0" encoding="UTF-8"?>' +
    '<Students>' +
    '<Student>' +
    '<PersonalInformation>' +
    '<FirstName>A</FirstName>' +
    '<LastName>B</LastName>' +
    '<Gender>Male</Gender>' +
    '</PersonalInformation>' +
    '</Student>' +
    '<Student>' +
    '<PersonalInformation>' +
    '<FirstName>C</FirstName>' +
    '<LastName>D</LastName>' +
    '<Gender>Male</Gender>' +
    '</PersonalInformation>' +
    '</Student>' +
    '</Students>';

convertXMLToJSON.parseString(xmlData, function (err, results) {
    if (err) {
        console.log('Error: ', err);
    } else {
        console.log(JSON.stringify(results));
    }
});