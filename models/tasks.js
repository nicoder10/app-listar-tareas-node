const Task = require('./task');

class Tasks {
    _list = '';

    constructor() {
        this._list = {}
    }

    createTask(desc) {
        const task = new Task(desc);
        this._list[task.id] = task;
    }

    listPendingCompleted(completed = true) {
        const list = this.listArray.filter((task, index) => {
            completed ? task.completedIn : !task.completedIn
        });
        list.forEach((task, index) => {
            const { completedIn, desc } = task;
            const taskNumber = index + 1;
            const state = completedIn !== null ? 'Completed'.green : 'Pending'.red;
            console.log(`${taskNumber} ${desc} :: ${state}`);
        });
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
        });
    }

    toggleCompleted(ids){
        ids.forEach((id) => {
            const task = this._listado[id]
            if( !task.completedEn ){
                task.completedEn = new Date().toISOString()
            }
        });

        this.listArray.forEach((task) => {
            const { id } = task;
            if (!ids.includes(id)) {
                this._list[id].completedIn = null
            }
        });
    }


    deleteTask(id) {
        if(this._list[id]) {
            delete this._list[id]
            console.log('Task deleted'.orange);
        }
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