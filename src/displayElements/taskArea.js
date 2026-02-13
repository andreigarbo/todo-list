import { Persistence } from "../driverLogic/persistence"
import { TaskCard } from "./taskCard";

export class TaskArea {
    constructor() {
        this._persistence = new Persistence();

        this._mainDiv = document.createElement("div");
        this._mainDiv.id="task-area";
        this._currentProject = "general";
    }

    setCurrentProject(projectId) {
        this._currentProject = projectId;
    }

    render() {
        const storage = this._persistence.load();
        const selectedProject = storage[this._currentProject];

        this._mainDiv.innerHTML = '';

        for (const task of selectedProject._tasks) {
            const taskCard = new TaskCard(task);
            this._mainDiv.append(taskCard.render());
        }

        return this._mainDiv;
    }
}