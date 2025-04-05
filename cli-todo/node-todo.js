import { input } from '@inquirer/prompts';

const taskArr = [];

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

console.log("[SUMMARY OF TASKS]\n");
console.log("[TASK]".padEnd(30) + "[DUE]".padEnd(15) + "[PRIORITY LVL]");
taskArr.forEach((e) => {
    console.log(e.taskName.padEnd(30) + e.taskDue.padEnd(15) + e.taskPrio.padEnd(10));
})

console.log();
