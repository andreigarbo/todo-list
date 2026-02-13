import { App } from "./app.js";
import { DisplayController } from './displayController.js';

import { Project } from "../dataStructures/project.js"
import { Task } from "../dataStructures/task.js"

import "../styles/taskCard.css";
// import "../styles/projectCard.css"
import "../styles/sideBar.css";
import "../styles/main.css"
import "../styles/taskArea.css"
import "../styles/colors.css"

const app = new App();
const displayController = new DisplayController();

//populate data for test
// let testProject = new Project("testing");
// let testProject2 = new Project("another project");

// app.createProject("testing");
// app.createProject("another project");

// let testTask1 = Task("i need to do x y z", "this is a somewhat longer description", "March 12", "high");
// testTask1.notes = ["testnote1", "testnote2", "testnote3"]
// testProject.addTask(testTask1);

// app.createTask("i need to do x y z", "this is a somewhat longer description", "March 12", "high", "general");
// app.createTask("i need to do x y z", "this is a somewhat longer description", "March 12", "high", "general");
// app.createTask("i need to do x y z", "this is a somewhat longer description", "March 12", "high", "general");


// let testTask2 = Task("i also need to do some other, waaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaay longer thing", "this is a somewhat longer description", "December 22", "high");
// testTask2.notes = ["testnote1", "testnote2", "testnote3"]
// testProject.addTask(testTask2);

// testTask2 = Task("i also need to do some other, waaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaay longer thing", "this is a somewhat longer description", "December 22", "high");
// testTask2.notes = ["testnote1", "testnote2", "testnote3"]
// testProject.addTask(testTask2);

// testTask2 = Task("i also need to do some other, waaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaay longer thing", "this is a somewhat longer description", "December 22", "high");
// testTask2.notes = ["testnote1", "testnote2", "testnote3"]
// testProject.addTask(testTask2);

// testTask2 = Task("i also need to do some other, waaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaay longer thing", "this is a somewhat longer description", "December 22", "high");
// testTask2.notes = ["testnote1", "testnote2", "testnote3"]
// testProject.addTask(testTask2);

// testTask2 = Task("i also need to do some other, waaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaay longer thing", "this is a somewhat longer description", "December 22", "high");
// testTask2.notes = ["testnote1", "testnote2", "testnote3"]
// testProject.addTask(testTask2);

// testTask2 = Task("i also need to do some other, waaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaay longer thing", "this is a somewhat longer description", "December 22", "high");
// testTask2.notes = ["testnote1", "testnote2", "testnote3"]
// testProject.addTask(testTask2);

// testTask2 = Task("i also need to do some other, waaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaay longer thing", "this is a somewhat longer description", "December 22", "high");
// testTask2.notes = ["testnote1", "testnote2", "testnote3"]
// testProject.addTask(testTask2);

// testTask2 = Task("i also need to do some other, waaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaay longer thing", "this is a somewhat longer description", "December 22", "high");
// testTask2.notes = ["testnote1", "testnote2", "testnote3"]
// testProject.addTask(testTask2);

// testTask2 = Task("i also need to do some other, waaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaay longer thing", "this is a somewhat longer description", "December 22", "high");
// testTask2.notes = ["testnote1", "testnote2", "testnote3"]
// testProject.addTask(testTask2);

// testTask2 = Task("i also need to do some other, waaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaay longer thing", "this is a somewhat longer description", "December 22", "high");
// testTask2.notes = ["testnote1", "testnote2", "testnote3"]
// testProject.addTask(testTask2);

// testTask2 = Task("i also need to do some other, waaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaay longer thing", "this is a somewhat longer description", "December 22", "high");
// testTask2.notes = ["testnote1", "testnote2", "testnote3"]
// testProject.addTask(testTask2);

// testTask2 = Task("i also need to do some other, waaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaay longer thing", "this is a somewhat longer description", "December 22", "high");
// testTask2.notes = ["testnote1", "testnote2", "testnote3"]
// testProject.addTask(testTask2);


displayController.render();