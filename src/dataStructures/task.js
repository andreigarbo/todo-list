
export function Task(title, description, dueDate, priority) {
    const id = crypto.randomUUID();
    let notes = [];
    let isComplete = false;
    return { id, title, description, dueDate, priority, notes, isComplete };
}

// class Todo {
//     constructor(title, description, dueDate, priority) {
//         this._title = title;
//         this._description = description;
//         this._dueDate = dueDate;
//         this._priority = priority;
//         this._id = crypto.randomUUID();
//     }

//     set priority(priority) {
//         this._priority = priority;
//     }

//     set title(title) {
//         this._title = title;
//     }

//     set dueDate(dueDate) {
//         this._dueDate = dueDate;
//     }

//     set description(description) {
//         this._description = description;
//     }

//     get priority() {
//         return this._priority;
//     }

//     get title() {
//         return this._title;
//     }

//     get dueDate() {
//         return this._dueDate;
//     }

//     get description() {
//         return this._description;
//     }

// }