// showMenu function
const showMenu = () => {
    return new Promise ((resolve, reject) => {
        console.log('===================='.cyan);
        console.log('  Select an option  ');
        console.log('===================='.cyan);
        console.log(`¿What would you like to do?\n`.bold);
        console.log(`${"1.".cyan} Create task`);
        console.log(`${"2.".cyan} List tasks`);
        console.log(`${"3.".cyan} List completed tasks`);
        console.log(`${"4.".cyan} List pending tasks`);
        console.log(`${"5.".cyan} Complete task(s)`);
        console.log(`${"6.".cyan} Delete task`);
        console.log(`${"0.".red} Exit`);

        const rl = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('Please select an option: ', (option) => {
            option > 6 || option < 0 ? reject('Invalid option, must be between 0 and 6') : resolve(option);
            rl.close();
        });
    });
}

// pause console function
const pause = () => {
    return new Promise((resolve, reject) => {
        const rl = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(`Please press ${"ENTER".green} to continue`, (opt) => {
            rl.close();
            resolve();
        });
    });
}

module.exports = {
    showMenu, 
    pause
};