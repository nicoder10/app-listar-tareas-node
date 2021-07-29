// logic to store in file
const fs = require('fs');

const storeInDB = async (taskList) => {
    await fs.writeFile('./database/taskList.json', taskList, err => {
        console.log(err);
    })
}

module.exports = {
    storeInDB
}