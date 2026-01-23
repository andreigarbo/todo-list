import { Task } from '../dataStructures/task.js';

export class TaskCard {
    constructor(task) {
        this._taskTitle = task.title;
        this._taskDescription = task.description;
        this._taskDueDate = task.dueDate;
        this._taskPriority = task.priority;
        this._taskNotes = task.notes;
        this._isComplete = task.isComplete;

    }

    renderFull() {
        this._mainDiv = document.createElement("div");
        this._mainDiv.classList.add("task-card"); 

        this._taskTitleLabel = document.createElement("p");
        this._taskTitleLabel.textContent = "Title: ";
        this._taskTitleLabel.classList.add("task-title-label-full");

        this._taskDescriptionLabel = document.createElement("p");
        this._taskDescriptionLabel.textContent = "Description: ";
        this._taskDescriptionLabel.classList.add("task-description-label-full");

        this._taskDueDateLabel = document.createElement("p");
        this._taskDueDateLabel.textContent = "Due Date: ";
        this._taskDueDateLabel.classList.add("task-duedate-label-full");

        this._taskPriorityLabel = document.createElement("p");
        this._taskPriorityLabel.textContent = "Priority: ";
        this._taskPriorityLabel.classList.add("task-priority-label-full");

        this._taskNoteLabel = document.createElement("p");
        this._taskNoteLabel.textContent = "Notes: ";
        this._taskNoteLabel.classList.add("task-notes-label-full");
    }

    renderCollapsed(){
        let mainDiv = document.createElement("div");
        mainDiv.classList.add("task-card-collapsed"); 

        //labels
        this._taskTitleLabel = document.createElement("p");
        this._taskTitleLabel.textContent = "Title: ";
        this._taskTitleLabel.classList.add("task-title-label-collapsed", "label");

        this._taskDueDateLabel = document.createElement("p");
        this._taskDueDateLabel.textContent = "Due Date: ";
        this._taskDueDateLabel.classList.add("task-duedate-label-collapsed", "label");

        this._taskPriorityLabel = document.createElement("p");
        this._taskPriorityLabel.textContent = "Priority: ";
        this._taskPriorityLabel.classList.add("task-priority-label-collapsed", "label");

        //content
        this._taskTitlePara = document.createElement("p");
        this._taskTitlePara.innerHTML = this._taskTitle;
        this._taskTitlePara.classList.add("task-title-collapsed");

        this._taskDueDatePara = document.createElement("p");
        this._taskDueDatePara.innerHTML = this._taskDueDate;
        this._taskDueDatePara.classList.add("task-duedate-collapsed");

        this._taskPriorityPara = document.createElement("p");
        this._taskPriorityPara.innerHTML = this._taskPriority;
        this._taskPriorityPara.classList.add("task-priority-collapsed");

        
        mainDiv.append(
            this._taskTitle,
            this._taskDueDateLabel,
            this._taskDueDate,
            this._taskPriorityLabel,
            this._taskPriority
        );

        return mainDiv;
    }
}