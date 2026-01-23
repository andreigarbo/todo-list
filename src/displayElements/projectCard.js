import { Task } from "../dataStructures/task.js";
import { Project } from "../dataStructures/project.js";
import { TaskCard } from "./taskCard.js";

export class ProjectCard {
    constructor(project) {
        this._mainDiv = document.createElement("div");
        this._mainDiv.classList.add("project-card");

        for (const task of project.tasks) {
            const taskCard = new TaskCard(task);
            this._mainDiv.append(taskCard);
        }
        return this._mainDiv;
    }
}