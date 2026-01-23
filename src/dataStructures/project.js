
export class Project {
    constructor(name) {
        this._name = name;
        this._id = crypto.randomUUID();
        this._tasks = [];
    }

    get name() {
        return this._name;
    }

    addTask(task) {
        this._tasks.push(task);
    }

    removeTask(taskId) {
        this._tasks = this._tasks.filter( (task) => task.id != taskId );
    }

    get tasks() {
        return this._tasks;
    }
}