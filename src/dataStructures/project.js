
export class Project {
    constructor(name) {
        this._name = name;
        this._id = crypto.randomUUID();
        this._tasks = [];
    }

    get name() {
        return this._name;
    }

    set id(id) {
        this._id = id;
    }

    set tasks(tasks) {
        this._tasks = tasks;
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