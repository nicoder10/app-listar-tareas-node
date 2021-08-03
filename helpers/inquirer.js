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

const deleteTaskList = async (tasks) => {
    const tasksList = tasks.map((task, index) => {
        const taskNumber = index + 1;
        const { id, desc } = task;
        return {
          value: id,
          name:  `${taskNumber} ${desc}`
        }
    });

    tasksList.unshift({
        value: '0',
        name: `${'0'.green} Cancelar` 
    });

    const question = [
        {
            type: 'list',
            name: 'id',
            message: 'Delete task',
            choices: tasksList
        }
    ];

    const { id } = await inquirer.prompt(question);
    return id;
};

const confirm = async(message) => {
  const question = [
      {
          type: 'confirm',
          name: 'ok',
          message: message   
      }
  ];

  const { ok } = await inquirer.prompt(question);
  return ok;
}

module.exports = {
    showInquirerMenu,
    inquirerPause,
    readInput,
    deleteTaskList,
    confirm
}