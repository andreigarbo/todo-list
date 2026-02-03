import { TaskCard, CollapsedTaskCard } from "../displayElements/taskCard.js";
import { Task } from "../dataStructures/task.js";
import { Project } from "../dataStructures/project.js";
import { SideBar } from "../displayElements/sideBar.js";
import { Persistence } from "../driverLogic/persistence.js";
import { TaskArea } from "../displayElements/taskArea.js";

export class DisplayController {
    constructor() {
        //container div for all page content
        this._mainHTMLContent = document.querySelector('#content');
        
        //construct the Sidebar
        this._sidebar = new SideBar();

        //construct the Task Area
        this._taskArea = new TaskArea();
        this._taskArea.setCurrentProject("testing");

        // //construct the task card area
        // this._taskArea = document.createElement("div");
        // this._taskArea.id = "task-area";

        // this._mainHTMLContent.append(this._sidebar.getContent());
        // this._mainHTMLContent.append(this._taskArea);
    }

    render() {
        this._mainHTMLContent = document.querySelector('#content');

        const sidebar = this._sidebar.render();
        const taskArea = this._taskArea.render();

        this._mainHTMLContent.innerHTML = "";
        this._mainHTMLContent.append(sidebar);
        this._mainHTMLContent.append(taskArea);
    }
}