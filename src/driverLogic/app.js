import { Task } from "../dataStructures/task.js";
import { Persistence } from "./persistence.js";
import { Project } from "../dataStructures/project.js";


export class App {
    constructor() {
        this._persistentStorage = new Persistence();
        this._defaultProject = new Project("general");
        this._archiveProject = new Project("archive");
        this._appData = this.getDynamicStorage();

        this._appData[this._defaultProject.name] = this._defaultProject;
        this._appData[this._archiveProject.name] = this._archiveProject;


        // this.setDynamicStorage(this._appData);
    }

    getDynamicStorage() {
        const dynamicStorage = this._persistentStorage.load();
        this._appData = dynamicStorage;
        return dynamicStorage;
    }

    setDynamicStorage( data ) {
        this._appData = data;
        this._persistentStorage.save(data);
    }

    createTask( title, description, dueDate, priority, project ) {

        if (project == null) {
            project = "general";
        }

        const projects = this.getDynamicStorage();
        const projectObj = projects[project];

        console.log(projectObj);

        const task = Task(title, description, dueDate, priority);
        projectObj.addTask(task);

        projects[project] = projectObj;
        this.setDynamicStorage(projects);
    }

    createProject( name ) {        

        const projects = this.getDynamicStorage();

        if (name in projects) {
            console.log("Project already exists");
        }

        const project = new Project(name);

        projects[name] = project;

        this.setDynamicStorage(projects);

    }

    deleteProject( id ) {

        const projects = this.getDynamicStorage();

        projects = projects.filter( (project) => id != project.id );

        this.setDynamicStorage(projects);

    }

    deleteTask( id, project ) {

        const projects = this.getDynamicStorage();

        if (project in projects) {
            const selectedProject = projects[project];

            selectedProject = selectedProject.filter( (task) => id != task.id );
            
            projects[project] = selectedProject;
            this.setDynamicStorage(projects);
        } else {
            throw new Error("Project from which deletion was attempted does not exist");
        }  
    }

    getCurrentData() {
        const projects = this.getDynamicStorage();
        return projects;
    }

}