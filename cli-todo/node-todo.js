import { input } from '@inquirer/prompts';
import { select } from '@inquirer/prompts';

let taskArr = [];

async function CreateTask() {
    do {
        const taskName = await input({ message: "Enter task name: " });
        const taskDue = await input({ message: "Enter due date: " });
        const taskPrio = await select({
            message: "Enter priority level: ",
            choices: [
                { name: 'Immediate', value: 'IMMEDIATE' },
                { name: 'High', value: 'HIGH' },
                { name: 'Medium', value: 'MEDIUM' },
                { name: 'Low', value: 'LOW' }
            ]
        });
        var taskAdd = await input({ message: "Add more task/s (Y/N)? " });
        console.log();
        taskArr.push({ taskName, taskDue, taskPrio });

        if (taskAdd == 'N' || taskAdd == 'n')
            return;
    } while (taskAdd != 'N' && taskAdd != 'n')
}

async function ViewTasks() {
    console.log("\n[SUMMARY OF TASKS]\n");
    console.log("".padEnd(10) + "[TASK]".padEnd(20) + "[DUE]".padEnd(15) + "[PRIORITY LVL]");
    taskArr.forEach((e, index) => {
        console.log(
            "[" + (index + 1).toString() +
            "]".padEnd(8) +
            e.taskName.padEnd(20) +
            e.taskDue.padEnd(15) +
            e.taskPrio.padEnd(10)
        );
    })
    console.log();
}

async function EditTasks() {
    await ViewTasks();
    do {
        var taskNumber = await input({
            message: "Which task would you like to edit?\n Task Number:"
        });
        if (taskNumber < 1 || taskNumber > taskArr.length) {
            console.log("Error! Number entered was out of bounds. Please enter another number.\n");
        }
        else {
            taskArr[taskNumber - 1].taskName = await input({ message: "Enter task name: " });
            taskArr[taskNumber - 1].taskDue = await input({ message: "Enter due date: " });
            taskArr[taskNumber - 1].taskPrio = await select({
                message: "Enter priority level: ",
                choices: [
                    { name: 'Immediate', value: 'IMMEDIATE' },
                    { name: 'High', value: 'HIGH' },
                    { name: 'Medium', value: 'MEDIUM' },
                    { name: 'Low', value: 'LOW' }
                ]
            });
        }
    } while (taskNumber < 1 || taskNumber > taskArr.length);
}

console.log("Good day!");

var taskChoice = "";
while (taskChoice != "EXIT") {
    const taskChoice = await select({
        message: "What would you like to do?\n",
        choices: [
            { name: 'Create Task', value: 'CREATE' },
            { name: 'View All Tasks', value: 'READ' },
            { name: 'Edit Task', value: 'UPDATE' },
            { name: 'Delete Task', value: 'DELETE' },
            { name: 'Exit', value: 'EXIT' }
        ]
    })

    console.log();

    /*evaluate choice*/

    switch (taskChoice) {
        case "CREATE": await CreateTask(); break;
        case "READ": await ViewTasks(); break;
        case "UPDATE": await EditTasks(); break;
        case "DELETE": break;
    }

    console.log();
}
