
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
            projects = JSON.parse(projectsString);
        }
        return projects;
    }
}