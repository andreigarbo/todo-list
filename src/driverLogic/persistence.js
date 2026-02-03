import { Project } from "../dataStructures/project";

export class Persistence {
    constructor() {
        if (Persistence._instance) {
            return Persistence._instance;
        }
        Persistence._instance = this;

        this._projects = {};
    }

    save(projects) {
        const projectsString = JSON.stringify(projects);
        localStorage.setItem("projects", projectsString);
    }

    load() {
        const projectsString = localStorage.getItem("projects");
        let projects = {};
        if (projectsString) {
            let projectObj = JSON.parse(projectsString);

            for (const [projectName, project] of Object.entries(projectObj)) {
                const thisProject = new Project(projectName);
                for (const [fieldName, field] of Object.entries(project)) {
                    if (fieldName == "_id") {
                        thisProject.id = field;
                    }
                    if (fieldName == "_tasks") {
                        thisProject.tasks = field;
                    }
                }
                projects[projectName] = thisProject;
            }
        }
        return projects;
    }
}