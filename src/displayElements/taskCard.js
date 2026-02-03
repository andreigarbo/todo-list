import { Task } from '../dataStructures/task.js';
// import { scgChevronDown } from "../assets/chevron-down-svgrepo-com.svg";
// import { svgChevronUp } from "../assets/chevron-up-svgrepo-com.svg";

const svgChevronUp = require("../assets/chevron-up-svgrepo-com.svg");
const svgChevronDown = require("../assets/chevron-down-svgrepo-com.svg");

export class TaskCard {
    constructor(task) {
        console.log(task);
        this._mainDiv = document.createElement("div");
        this._mainDiv.classList.add("task-card");

        this._currentState = "full";

        this._taskTitle = task.title;
        this._taskDescription = task.description;
        this._taskDueDate = task.dueDate;
        this._taskPriority = task.priority;
        this._taskNotes = task.notes;
        this._isComplete = task.isComplete;
    }

    render() {
        let mainDiv = document.createElement("div");
        mainDiv.classList.add("task-card-full", "task-card"); 

        //labels
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

        //content
        this._taskTitlePara = document.createElement("p");
        this._taskTitlePara.innerHTML = this._taskTitle;
        this._taskTitlePara.classList.add("task-title-full");

        this._taskDueDatePara = document.createElement("p");
        this._taskDueDatePara.innerHTML = this._taskDueDate;
        this._taskDueDatePara.classList.add("task-duedate-full");

        this._taskDescriptionPara = document.createElement("p");
        this._taskDescriptionPara.innerHTML = this._taskDescription;
        this._taskDueDatePara.classList.add("task-description-full");

        this._taskPriorityPara = document.createElement("p");
        this._taskPriorityPara.innerHTML = this._taskPriority;
        this._taskPriorityPara.classList.add("task-priority-full");

        this._collapseExpandButon = document.createElement("img");
        this._collapseExpandButon.addEventListener(
            "click",
            () => this.toggleState()
        );

        this._collapseExpandButon.src = svgChevronUp;
        this._collapseExpandButon.alt = "up arrow for collapsing card";
        this._collapseExpandButon.classList.add("collapse-expand-button");

        this._taskNotes = this._taskNotes;
        this._taskNoteTextArea = document.createElement("textarea");
        this._taskNoteTextArea.classList.add("task-notes");
        this._taskNoteTextArea.rows = 10;
        this._taskNoteTextArea.cols = 100;


        //containers for label and content pairs
        this._taskPriorityContainer = document.createElement("div");
        this._taskPriorityContainer.classList.add("property-container-full", "priority-container-full");
        this._taskPriorityContainer.append(this._taskPriorityLabel, this._taskPriorityPara);
    
        this._taskDueDateContainer = document.createElement("div");
        this._taskDueDateContainer.classList.add("property-container-full", "duedate-container-full");
        this._taskDueDateContainer.append(this._taskDueDateLabel, this._taskDueDatePara);

        this._taskNoteContainer = document.createElement("div");
        this._taskNoteContainer.classList.add("property-container-full", "notes-container-full");
        this._taskNoteContainer.append(this._taskNoteLabel, this._taskNoteTextArea);

        this._taskDescriptionContainer = document.createElement("div");
        this._taskDescriptionContainer.classList.add("property-container-full", "description-container-full");
        this._taskDescriptionContainer.append(this._taskDescriptionLabel, this._taskDescriptionPara);

        //complete button
        this._taskMarkCompleteButton = document.createElement("button");
        this._taskMarkCompleteButton.classList.add("task-mark-complete-button");
        this._taskMarkCompleteButton.textContent = "mark task as completed";

        mainDiv.append(
            this._taskTitlePara,
            this._taskDescriptionContainer,
            this._taskDueDateContainer,
            this._taskPriorityContainer,
            this._taskNoteContainer,
            this._collapseExpandButon,
            this._taskMarkCompleteButton
        );

        this._mainDiv = mainDiv;
        this.toggleState();
        return mainDiv;
    }

    toggleState() {
        if (this._currentState == "collapsed") {
            this._currentState = "full";

            this._mainDiv.classList.remove("task-card-collapsed");
            this._mainDiv.classList.add("task-card-full");

            this._collapseExpandButon.src = svgChevronUp;

            this._taskTitlePara.classList.remove("task-title-collapsed");
            this._taskTitlePara.classList.add("task-title-full");

            this._taskDescriptionContainer.classList.remove("invisible");

            this._taskDueDateContainer.classList.remove("duedate-container-collapsed", "property-container-collapsed");
            this._taskDueDateContainer.classList.add("property-container-full");

            this._taskPriorityContainer.classList.remove("priority-container-collapsed", "property-container-collapsed");
            this._taskPriorityContainer.classList.add("property-container-full");

            this._taskNoteContainer.classList.remove("invisible");
            this._taskMarkCompleteButton.classList.remove("invisible");


        } else {
            this._currentState = "collapsed";

            this._mainDiv.classList.remove("task-card-full");
            this._mainDiv.classList.add("task-card-collapsed");

            this._collapseExpandButon.src = svgChevronDown;

            this._taskTitlePara.classList.remove("task-title-full");
            this._taskTitlePara.classList.add("task-title-collapsed");

            this._taskDescriptionContainer.classList.add("invisible");

            this._taskDueDateContainer.classList.remove("property-container-full");
            this._taskDueDateContainer.classList.add("duedate-container-collapsed", "property-container-collapsed");

            this._taskPriorityContainer.classList.remove("property-container-full");
            this._taskPriorityContainer.classList.add("priority-container-collapsed", "property-container-collapsed");

            this._taskNoteContainer.classList.add("invisible");
            this._taskMarkCompleteButton.classList.add("invisible");

        }
    }
}