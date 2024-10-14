// @ts-nocheck
export function updClsStatus(skillstatus) {
	const status = {};

	skillstatus.forEach((sks) => {
		sks.status.forEach((s) => {
			status[s.skillnode.id] = status[s.skillnode.id] ? status[s.skillnode.id] + s.value : s.value;
		});
	});

	return status;
}

export default function updClsSkillstatus(clsSkillstatus) {
	console.log(clsSkillstatus);
	const updtStatus = updClsStatus(clsSkillstatus.status);
	clsSkillstatus.status.forEach((s) => {
		s.value = updtStatus[s.skillnode.id];
	});
}

const sd = {
	node1: {
		usr1: 0,
		usr2: 0,
		usr3: 0,
		media: 0
	},
	node2: {
		usr1: 0,
		usr2: 0,
		usr3: 0,
		media: 0
	},
	node3: {
		usr1: 0,
		usr2: 0,
		usr3: 0,
		media: 0
	},
	node4: {
		usr1: 0,
		usr2: 0,
		usr3: 0,
		media: 0
	}
};
