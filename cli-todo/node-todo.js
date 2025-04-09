import { input } from '@inquirer/prompts';
import { select } from '@inquirer/prompts';
import { stringify } from 'postcss';

const taskArr = [];

console.log("Good day!");

var taskChoice = "";
while (taskChoice != "EXIT") {
    var taskChoice = await select({
        message: "What would you like to do?\n",
        choices: [
            {
                name: 'Create Task',
                value: 'CREATE',
            },
            {
                name: 'View All Tasks',
                value: 'READ',
            },
            {
                name: 'Edit Task',
                value: 'UPDATE',
            },
            {
                name: 'Delete Task',
                value: 'DELETE',
            },
            {
                name: 'Exit',
                value: 'EXIT',
            }
        ]
    })

    console.log();

    if (taskChoice == "CREATE") {
        while (true) {
            const taskName = await input({ message: "Enter task name: " });
            const taskDue = await input({ message: "Enter due date: " });
            const taskPrio = await input({ message: "Enter priority level: " });
            const taskAdd = await input({ message: "Add more task/s (Y/N)? " });
            console.log();
            taskArr.push({ taskName, taskDue, taskPrio });

            if (taskAdd == 'N' || taskAdd == 'n')
                break;
        }
    }

    else if (taskChoice == "READ") {
        console.log("\n[SUMMARY OF TASKS]\n");
        console.log("".padEnd(10) + "[TASK]".padEnd(20) + "[DUE]".padEnd(15) + "[PRIORITY LVL]");
        var index = 1;
        taskArr.forEach((e, index) => {
            console.log(
                "[" + index.toString() +
                "]".padEnd(8) +
                e.taskName.padEnd(20) +
                e.taskDue.padEnd(15) +
                e.taskPrio.padEnd(10)
            );
        })
    }

    console.log();
}
