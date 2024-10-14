// @ts-nocheck
import { v4 } from 'uuid';

const status = [
	{
		id: 'staus1',
		value: 0,
		skillnode: {
			id: '15',
			alias: 'DCA0108',
			description: 'SISTEMAS OPERACIONAIS - 60h',
			group: ['8'],
			x: 960,
			y: 264,
			deep: 2,
			skilltreeId: '09eb1027-10f4-448a-92e1-2838f8965aca'
		},
		skillstatus: {
			id: 'skstatus'
		}
	},
	{
		id: 'status2',
		value: 0,
		skillnode: {
			id: '9',
			alias: 'DCA0110',
			description: 'MODELAGEM E ANALISE DE SISTEMAS DINAMICOS - 60h',
			group: ['1'],
			x: 220,
			y: 756,
			deep: 1,
			skilltreeId: '09eb1027-10f4-448a-92e1-2838f8965aca'
		},
		skillstatus: {
			id: 'skstatus'
		}
	},
	{
		skillstatus: {
			id: 'skstatus'
		},
		id: 'staus3',
		value: 0,
		skillnode: {
			id: '8',
			alias: 'DCA0212',
			description: 'ARQUITETURA DE COMPUTADORES - 60h',
			group: ['15', '3'],
			x: 1700,
			y: 756,
			deep: 1,
			skilltreeId: '09eb1027-10f4-448a-92e1-2838f8965aca'
		}
	},
	{
		skillstatus: {
			id: 'skstatus'
		},
		id: 'staus4',
		value: 0,
		skillnode: {
			id: '4',
			alias: 'DCA0213',
			description: 'ELETRÔNICA - 90h',
			group: [],
			x: 320,
			y: 1152,
			deep: 0,
			skilltreeId: '09eb1027-10f4-448a-92e1-2838f8965aca'
		}
	},
	{
		skillstatus: {
			id: 'skstatus'
		},
		id: 'staus5',
		value: 0,
		skillnode: {
			id: '3',
			alias: 'DCA0212',
			description: 'CIRCUITOS DIGITAIS - 90h',
			group: ['8'],
			x: 960,
			y: 1056,
			deep: 0,
			skilltreeId: '09eb1027-10f4-448a-92e1-2838f8965aca'
		}
	},
	{
		skillstatus: {
			id: 'skstatus'
		},
		id: 'staus6',
		value: 0,
		skillnode: {
			id: '1',
			alias: 'DCA0105',
			description: 'TEORIA DE CIRCUITOS - 60h',
			group: ['9'],
			x: 1600,
			y: 1152,
			deep: 0,
			skilltreeId: '09eb1027-10f4-448a-92e1-2838f8965aca'
		}
	}
];

function createStatus(status) {
	status.forEach((s) => {
		s.id = v4();
	});
}

createStatus(status);
console.log(status);
