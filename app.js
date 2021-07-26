const colors = require('colors');
// const { showMenu, pause } = require('./helpers/messages');
const { showInquirerMenu, inquirerPause } = require('./helpers/inquirer');
console.clear();

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