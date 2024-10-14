import type { Skillstatus } from '../../types/Skillstatus';

export function getClsSkillstatus(array: Skillstatus[]) {
	const firstObjeto = array[0]; // objeto de referência
	const newObjeto = array.reduce((acc, cur, index) => {
		if (index === 0) return acc; // ignora o primeiro objeto
		acc.nodes.forEach((node, i) => {
			const curNode = cur.nodes[i];
			node.status.value = (node.status.value * index + curNode.status.value) / (index + 1);
		});
		return acc;
	}, firstObjeto);

	//console.log(newObjeto);
	return newObjeto;
}
