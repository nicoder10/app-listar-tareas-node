const colors = require('colors');
// const { showMenu, pause } = require('./helpers/messages');
const { showInquirerMenu, inquirerPause } = require('./helpers/inquirer');
const { Task } = require('./models/task');
const { Tasks } = require('./models/tasks');

console.clear();

let tasks = new Tasks();
let task = new Task('Buy bread');
tasks.list[task.id] = task;
console.log(tasks);

const main = async() => {
    let opt = '';
    do {
        //opt = await showMenu();
        opt = await showInquirerMenu();
        console.log(opt);
        //await pause();
        await inquirerPause();
    } while(opt !== '0')
}

main(); 