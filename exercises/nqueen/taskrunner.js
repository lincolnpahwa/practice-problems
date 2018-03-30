// seq process AAABBAABBB 
// every process takes 1 turn
// process with same TYPE takes 2 turn cool down
// e.g

// AA   = A--A
// ABA  = AB-A
// ABAB = AB-AB
// AABB = A--AB--B
// ABBA = AB--BA


const taskRunnerWithCoolDown = function(taskList, cooldown) {
	const taskListArr = taskList.split('');

	const taskListRunIndexMap = {};

	const taskRunOrder = [];

	for (let i = 0; i < taskListArr.length; i++) {
		console.log(taskRunOrder, taskListRunIndexMap)

		const currentTask = taskListArr[i];

		if (!taskListRunIndexMap[currentTask]) {
			taskListRunIndexMap[currentTask] = taskRunOrder.length;
			taskRunOrder.push(currentTask);
		} else if (i >= (taskListRunIndexMap[currentTask] + cooldown)) {
			taskListRunIndexMap[currentTask] = taskRunOrder.length;
			taskRunOrder.push(currentTask);
		} else {
			taskRunOrder.push('-');
		}
	}

	return taskRunOrder.join('');
}

console.log(taskRunnerWithCoolDown('AA', 2))

module.exports = taskRunnerWithCoolDown;