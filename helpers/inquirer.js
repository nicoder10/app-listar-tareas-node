const inquirer = require('inquirer');

const showInquirerMenu = () => {
    inquirer
        .prompt([
            {
                name: 'menu',
                type: 'list',
                message: 'Select an option: ',
                choices: [`${'1'.cyan} Create task`, `${'2'.cyan} List tasks`,
                     `${'3'.cyan} List completed tasks`, `${'4'.cyan} List pending tasks)`,
                     `${'5'.cyan} Complete task(s)`, `${'6'.cyan} Delete task`, `${'0'.red} Exit`]
            }
        ])
        .then((answer) => {
            console.log(`You chose: ${answer}`)
        });
};

module.exports = {
    showInquirerMenu
}