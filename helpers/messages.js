const showMenu = () => {
    console.log('===================='.cyan);
    console.log('  Select an option  ');
    console.log('===================='.cyan);
    console.log(`¿What would you like to do?\n`.bold);
    console.log('1. '.cyan + 'Create task');
    console.log('2. '.cyan + 'List tasks');
    console.log('3. '.cyan + 'List completed tasks');
    console.log('4. '.cyan + 'List pending tasks');
    console.log('5. '.cyan + 'Complete task(s)');
    console.log('6. '.cyan + 'Delete task');
    console.log('0. '.cyan + 'Exit');


}

module.exports = {
    showMenu
}