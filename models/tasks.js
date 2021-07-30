const Task = require('./task');

class Tasks {
    _list = '';

    constructor() {
        this._list = {}
    }

    loadTasksfromArray(tasks) {
        tasks.forEach((task) => {
            this._list[task.id] = task;
        });
    }

    completeList(){
        this.listArray.forEach((task, index) => {
            const { completedIn, desc } = task;
            const taskNumber = index + 1;
            const state = completedIn !== null ? 'Completed'.green : 'Pending'.red;
            console.log(`${taskNumber}`.green + ` ${desc} :: ${state}`);
        })
    }

    createTask(desc) {
        const task = new Task(desc);
        this._list[task.id] = task;
    }

    get listArray() {
        const list = [];
        Object.keys(this._list).forEach((key) => {
            const task = this._list[key];
            list.push(task);
        });
        return list;
    }
}

module.exports = Tasks;