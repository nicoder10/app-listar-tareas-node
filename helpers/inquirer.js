const inquirer = require('inquirer');

const showInquirerMenu = async () => {
    return await inquirer
            .prompt([
                {
                    name: 'option',
                    type: 'list',
                    message: 'Select an option: ',
                    choices: [
                        { value: '1', name: `${'1'.cyan} Create task` }, 
                        { value: '2', name: `${'2'.cyan} List tasks` },
                        { value: '3', name: `${'3'.cyan} List completed tasks` }, 
                        { value: '4', name: `${'4'.cyan} List pending tasks` },
                        { value: '5', name: `${'5'.cyan} Complete task(s)`}, 
                        { value: '6', name: `${'6'.cyan} Delete task`}, 
                        { value: '7', name: `${'0'.red} Exit\n` },
                    ]
                }
            ])
};

const inquirerPause = async () => {
    await inquirer
        .prompt([
            {
                name: 'pause',
                type: 'input',
                message: `Press ${'ENTER'.green} to continue`,
            }
        ])
};

const readInput = async (message) => {
    const question = [
      {
        type: 'input',
        name: 'desc',
        message,
        validate(value) {
          if (value.length === 0) {
            return 'Please enter a description';
          }
          return true;
        },
      },
    ];
  
    const { desc } = await inquirer.prompt(question);
    return desc;
  };

module.exports = {
    showInquirerMenu,
    inquirerPause,
    readInput
}