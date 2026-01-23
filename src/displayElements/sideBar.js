export class SideBar {
    constructor() {
        this._mainDiv = document.createElement("div");
        this._mainDiv.classList.add("side-bar");
        this._projects = [];

        this._projectList = document.createElement("ul");


        this._mainDiv.append(this._projectList);
    }

    addProject(project) { 
        this._projects.push(project);
        const projectElement = document.createElement("li");
        projectElement.textContent = project.name;
        this._projectList.append(projectElement);
    }

    getContent() {
        return this._mainDiv;
    }
}