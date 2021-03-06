const colors = require('colors');
// const { showMenu, pause } = require('./helpers/messages');
const { 
    showInquirerMenu, 
    inquirerPause, 
    readInput, 
    deleteTaskList, 
    confirm,
    showListCheckList 
} = require('./helpers/inquirer');
const Tasks = require('./models/tasks');
const { storeInDB, readFromDB } = require('./helpers/storeFile');
console.clear();

const main = async() => {
    let userOpt = '';
    const tasks = new Tasks();

    // load tasks from file
    const dbTasks = readFromDB();
    if(dbTasks) tasks.loadTasksfromArray(dbTasks); 

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
                tasks.completeList();
                break;
            case '3':
                tasks.listPendingCompleted(true);
                break;
            case '4':
                tasks.listPendingCompleted(false);
                break;
            case '5':
                const ids = await showListCheckList(tasks.listArray);
                tasks.toggleCompleted(ids);
                storeInDB(tasks.listArray);
                break;
           case '6':
               const id = await deleteTaskList(tasks.listArray)
               const ok = await confirm('Are you sure you want to delete?')
               if(ok) tasks.deleteTask(id)
               else storeInDB(tasks.listArray)
               break;
        }
        await inquirerPause();
    } while(userOpt !== '0')
    
}

main(); 