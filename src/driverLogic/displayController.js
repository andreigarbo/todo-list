import { TaskCard, CollapsedTaskCard } from "../displayElements/taskCard.js";
import { ProjectCard } from "../displayElements/projectCard.js";
import { Task } from "../dataStructures/task.js";
import { Project } from "../dataStructures/project.js";
import { SideBar } from "../displayElements/sideBar.js";

export class DisplayController {
    constructor() {

        //construct the Sidebar
        this._mainHTMLContent = document.querySelector('#content');

        this._sidebar = new SideBar();
        this._taskArea = document.createElement("div");
        this._taskArea.id = "task-area";

        //TEST BELOW
        this._testProject = new Project("testing");

        this._testTask = Task("title", "this is a somewhat longer description", "March 12", "high");
        this._testTask.notes = ["testnote1", "testnote2", "testnote3"]
        this._testProject.addTask(this._testTask);
        this._testTaskCard = new TaskCard(this._testTask);
        this._taskArea.append(this._testTaskCard.renderCollapsed());

        this._testTask = Task("title", "this is a somewhat longer description", "April 3", "high");
        this._testTask.notes = ["testnote1", "testnote2", "testnote3"]
        this._testProject.addTask(this._testTask);
        this._testTaskCard = new TaskCard(this._testTask);
        this._taskArea.append(this._testTaskCard.renderCollapsed());

        this._sidebar.addProject(this._testProject);
        this._sidebar.addProject(this._testProject);

        this._mainHTMLContent.append(this._sidebar.getContent());
        this._mainHTMLContent.append(this._taskArea);
    }
}