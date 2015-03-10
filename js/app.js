var taskInput = document.getElementById("new-task");  //new task
var addButton = document.getElementsByTagName("button")[0]; //firstbutton
var incompleteTasksHolder = document.getElementById("incomplete-tasks");
var completedTasksHolder = document.getElementById("completed-tasks");


var addTask = function() {
	console.log("Add task...");
}
var deleteTask = function() {
	console.log("delete task");
}

var editTask = function(){
	console.log("edit task");
}

var taskComplete = function() {
	console.log("complete task");
}

var taskIncomplete = function() {
	console.log("incomplete tasks");
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {

	console.log("bind list item events.. ")
	//select children
	//bind editTask and deleteTask to buttons, checkBoxEventHandler to checkbox.
}

addButton.onclick = addTask;  // when user interacts and click button it should execute. 
//if you say addTask();  the program will start interacting then and there.


for(var i = 0; i < incompleteTasksHolder.children.length; i++) {
	bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

//cycle over incompleteTasksHolder and completedTaskHolder ul list items. 
	//for each list item, select its children. 

for(var i = 0; i < completedTasksHolder.children.length; i++) {
	bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}

