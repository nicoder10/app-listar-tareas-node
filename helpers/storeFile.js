// logic to store in file
const fs = require('fs');

const filePath = './database/taskList.json';

const storeInDB = (taskList) => {
    fs.writeFile(filePath, taskList, err => {
        console.log(err);
    })
};

const readFromDB = () => {
    if(!fs.existsSync(filePath)) return 'File does not exist';
    const data = fs.readFileSync(filePath, { encoding: 'utf-8' });
    return JSON.parse(data);
}

module.exports = {
    storeInDB,
    readFromDB
}