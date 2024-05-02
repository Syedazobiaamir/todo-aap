import inquirer from "inquirer";
let todolist = [];
let condition = true;
const main = async () => {
    while (condition) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option you want to do",
                choices: ["addtask", "deletetask", "viewtodolist", "updatetask", "exit"],
            }
        ]);
        if (option.choice === "addtask") {
            await add();
        }
        else if (option.choice === "viewtodolist") {
            view();
        }
        else if (option.choice === "exit") {
            condition = false;
        }
    }
};
const add = async () => {
    let task = await inquirer.prompt([
        {
            name: "taskadd",
            type: "input",
            message: "Enter your new task"
        }
    ]);
    todolist.push(task.taskadd);
    console.log(`${task.taskadd} added successfully to the to-do list.`);
};
const view = () => {
    console.log("Your to-do list is:");
    todolist.forEach((taskadd, index) => {
        console.log(`${index + 1}. ${taskadd}`);
    });
};
main();
