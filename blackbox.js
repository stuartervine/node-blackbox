'use strict';
const fs = require('fs');
const execSync = require('child_process').execSync;

const loadEncryptedContent = (fileName) => {
    var content =  execSync('blackbox_cat ' + fileName).toString().split('\r\n').join('\n');
    return content.substring(0, content.indexOf("shred_file: WARNING:"));
};

const loadEncryptedProperty = (fileName, propertyName) => {
    return loadEncryptedContent(fileName)
        .split('\n')
        .reduce((acc, line) => {
            let parts = line.split("=");
            acc[parts[0]] = parts[1];
            return acc;
        }, {})[propertyName];
};

module.exports = {
    loadEncryptedContent: loadEncryptedContent,
    loadEncryptedProperty: loadEncryptedProperty
};