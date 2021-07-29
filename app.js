const colors = require('colors');
// const { showMenu, pause } = require('./helpers/messages');
const { showInquirerMenu, inquirerPause, readInput } = require('./helpers/inquirer');
const Tasks = require('./models/tasks');
const { storeInDB, readFromDB } = require('./helpers/storeFile');
console.clear();

const main = async() => {
    let userOpt = '';
    const tasks = new Tasks();

    do {
        const { option } = await showInquirerMenu();
        userOpt = option;
        switch(option) {
            case '1':
                const desc = await readInput('Description: ');
                tasks.createTask(desc);
                storeInDB(JSON.stringify(tasks.listArray));
                break;
            case '2':
                console.log(readFromDB());
                break;
        }
        await inquirerPause();
    } while(userOpt !== '0')
    
}

main(); 