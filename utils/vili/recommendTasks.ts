import type { Skillstatus } from '../../types/Skillstatus';

function getLevel(threshold: number, skillstatus: Skillstatus) {
	const maxDeep = skillstatus.height - 1;
	let level = 0;
	let nodes;

	for (let i = 0; i <= maxDeep; i++) {
		nodes = skillstatus.nodes.filter((n) => n.deep === i).every((n) => n.status.value >= threshold);
		if (nodes) level = i;
	}
	return level;
}

export default function recommendTasks(threshold: number, skillstatus: Skillstatus) {
	const level = getLevel(threshold, skillstatus);
	const nodes = skillstatus.nodes.filter((n) => n.deep <= level).map((n) => n.id);
	const tasks = skillstatus.nodes
		.filter((n) => n.status.value < threshold && nodes.includes(n.id))
		.map((n) => n.node.data.id);

	return tasks;
}
