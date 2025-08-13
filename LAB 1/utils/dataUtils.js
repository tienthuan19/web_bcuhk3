const fs = require('fs');
const path = require('path');

const readData = () => {
  try {
    const dataPath = path.join(__dirname, '..', 'data', 'data.json');
    const jsonData = fs.readFileSync(dataPath, 'utf8');
    return JSON.parse(jsonData);
  } catch (error) {
    console.error('Error reading data:', error);
    return [];
  }
};

const writeData = (data) => {
  try {
    const dataPath = path.join(__dirname, '..', 'data', 'data.json');
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error('Error writing data:', error);
    return false;
  }
};

module.exports = { readData, writeData };