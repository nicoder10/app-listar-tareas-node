const colors = require('colors');
// const { showMenu, pause } = require('./helpers/messages');
const { showInquirerMenu, inquirerPause, readInput } = require('./helpers/inquirer');
const Tasks = require('./models/tasks');
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
                break;
            case '2':
                //console.log(tasks._list);
                console.log(tasks.listArray);
                break;
        }
        await inquirerPause();
    } while(userOpt !== '0')
    
}

main(); 