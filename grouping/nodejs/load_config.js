const fs = require('fs');
const ini = require('ini');
const path = require('path');

// Specify the path to your INI file
const iniFilePath = path.resolve(__dirname, '../config/config.ini')

// Read the INI file
let data = fs.readFileSync(iniFilePath, 'utf-8')
    
// Parse the INI data
const parsedIni = ini.parse(data);

module.exports = parsedIni