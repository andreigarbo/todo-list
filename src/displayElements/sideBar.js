import { Persistence } from "../driverLogic/persistence";

export class SideBar {
    constructor() {
        this._persistence = new Persistence();

        this._mainDiv = document.createElement("div");
        this._mainDiv.classList.add("side-bar");
        this._projects = Object.keys(this._persistence.load());

        this._projectList = document.createElement("ul");

        this._mainDiv.append(this._projectList);
    }

    addProject(project) {
        this._projects = Object.keys(this._persistence.load());
        this._projects.push(project);

        const projectElement = document.createElement("li");
        projectElement.textContent = project.name;
        this._projectList.append(projectElement);
    }

    getContent() {
        return this._mainDiv;
    }

    render() {
        this._projects = Object.keys(this._persistence.load());
        console.log(this._projects);
        this._mainDiv = document.createElement("div");
        this._mainDiv.classList.add("side-bar");
        this._projectList = document.createElement("ul");

        for (let project of this._projects) {
            console.log(project);
            const projectElement = document.createElement("li");
            projectElement.textContent = project;
            this._projectList.append(projectElement);
        }

        this._mainDiv.append(this._projectList);
        return this._mainDiv;
    }   
}