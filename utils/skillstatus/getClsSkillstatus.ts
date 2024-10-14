// @ts-nocheck
/* const data = [
	{
		"id": "39622307-6927-4586-9e69-eba69908d676",
		"userId": "3adaf117-9eca-4da1-a1b6-f3e3a637f3e1",
		"skilltreeId": "09eb1027-10f4-448a-92e1-2838f8965aca",
		"skilltree": {
			"id": "09eb1027-10f4-448a-92e1-2838f8965aca",
			"height": 3,
			"sizeWidth": 1920,
			"sizeHeight": 1440,
			"skillspaceId": "2212c975-c8e2-4c2a-8176-777050465563",
			"nodes": [
				{
					"id": "15",
					"alias": "DCA0108",
					"description": "SISTEMAS OPERACIONAIS - 60h",
					"group": [
						"8"
					],
					"x": 960,
					"y": 264,
					"deep": 2,
					"skilltreeId": "09eb1027-10f4-448a-92e1-2838f8965aca"
				},
				{
					"id": "9",
					"alias": "DCA0110",
					"description": "MODELAGEM E ANALISE DE SISTEMAS DINAMICOS - 60h",
					"group": [
						"1"
					],
					"x": 220,
					"y": 756,
					"deep": 1,
					"skilltreeId": "09eb1027-10f4-448a-92e1-2838f8965aca"
				},
				{
					"id": "8",
					"alias": "DCA0212",
					"description": "ARQUITETURA DE COMPUTADORES - 60h",
					"group": [
						"15",
						"3"
					],
					"x": 1700,
					"y": 756,
					"deep": 1,
					"skilltreeId": "09eb1027-10f4-448a-92e1-2838f8965aca"
				},
				{
					"id": "4",
					"alias": "DCA0213",
					"description": "ELETRÔNICA - 90h",
					"group": [],
					"x": 320,
					"y": 1152,
					"deep": 0,
					"skilltreeId": "09eb1027-10f4-448a-92e1-2838f8965aca"
				},
				{
					"id": "3",
					"alias": "DCA0212",
					"description": "CIRCUITOS DIGITAIS - 90h",
					"group": [
						"8"
					],
					"x": 960,
					"y": 1056,
					"deep": 0,
					"skilltreeId": "09eb1027-10f4-448a-92e1-2838f8965aca"
				},
				{
					"id": "1",
					"alias": "DCA0105",
					"description": "TEORIA DE CIRCUITOS - 60h",
					"group": [
						"9"
					],
					"x": 1600,
					"y": 1152,
					"deep": 0,
					"skilltreeId": "09eb1027-10f4-448a-92e1-2838f8965aca"
				}
			],
			"links": [
				{
					"source": "8",
					"target": "15",
					"skilltreeId": "09eb1027-10f4-448a-92e1-2838f8965aca"
				},
				{
					"source": "3",
					"target": "8",
					"skilltreeId": "09eb1027-10f4-448a-92e1-2838f8965aca"
				},
				{
					"source": "1",
					"target": "9",
					"skilltreeId": "09eb1027-10f4-448a-92e1-2838f8965aca"
				}
			]
		},
		"status": [
			{
				"id": "c9fee265-23fa-4c20-8859-5e09625f36c2",
				"value": 10,
				"skillnodeId": "15",
				"skillstatusId": "39622307-6927-4586-9e69-eba69908d676",
				"skillnode": {
					"id": "15",
					"alias": "DCA0108",
					"description": "SISTEMAS OPERACIONAIS - 60h",
					"group": [
						"8"
					],
					"x": 960,
					"y": 264,
					"deep": 2,
					"skilltreeId": "09eb1027-10f4-448a-92e1-2838f8965aca"
				}
			},
			{
				"id": "5588e4b1-cb4c-4d81-aad9-2cd8eeb839d3",
				"value": 10,
				"skillnodeId": "9",
				"skillstatusId": "39622307-6927-4586-9e69-eba69908d676",
				"skillnode": {
					"id": "9",
					"alias": "DCA0110",
					"description": "MODELAGEM E ANALISE DE SISTEMAS DINAMICOS - 60h",
					"group": [
						"1"
					],
					"x": 220,
					"y": 756,
					"deep": 1,
					"skilltreeId": "09eb1027-10f4-448a-92e1-2838f8965aca"
				}
			},
			{
				"id": "aa377e12-2508-4e3b-9e0f-17d0fda84443",
				"value": 10,
				"skillnodeId": "8",
				"skillstatusId": "39622307-6927-4586-9e69-eba69908d676",
				"skillnode": {
					"id": "8",
					"alias": "DCA0212",
					"description": "ARQUITETURA DE COMPUTADORES - 60h",
					"group": [
						"15",
						"3"
					],
					"x": 1700,
					"y": 756,
					"deep": 1,
					"skilltreeId": "09eb1027-10f4-448a-92e1-2838f8965aca"
				}
			},
			{
				"id": "6501ad12-8422-4628-b6ce-5e8d2f98e536",
				"value": 10,
				"skillnodeId": "4",
				"skillstatusId": "39622307-6927-4586-9e69-eba69908d676",
				"skillnode": {
					"id": "4",
					"alias": "DCA0213",
					"description": "ELETRÔNICA - 90h",
					"group": [],
					"x": 320,
					"y": 1152,
					"deep": 0,
					"skilltreeId": "09eb1027-10f4-448a-92e1-2838f8965aca"
				}
			},
			{
				"id": "825a11d0-2f11-4f8c-b288-40acb1ee40d4",
				"value": 10,
				"skillnodeId": "3",
				"skillstatusId": "39622307-6927-4586-9e69-eba69908d676",
				"skillnode": {
					"id": "3",
					"alias": "DCA0212",
					"description": "CIRCUITOS DIGITAIS - 90h",
					"group": [
						"8"
					],
					"x": 960,
					"y": 1056,
					"deep": 0,
					"skilltreeId": "09eb1027-10f4-448a-92e1-2838f8965aca"
				}
			},
			{
				"id": "58ac9fe8-797a-4d8f-8cb6-ecc25560a60e",
				"value": 10,
				"skillnodeId": "1",
				"skillstatusId": "39622307-6927-4586-9e69-eba69908d676",
				"skillnode": {
					"id": "1",
					"alias": "DCA0105",
					"description": "TEORIA DE CIRCUITOS - 60h",
					"group": [
						"9"
					],
					"x": 1600,
					"y": 1152,
					"deep": 0,
					"skilltreeId": "09eb1027-10f4-448a-92e1-2838f8965aca"
				}
			}
		],
		"user": {
			"id": "3adaf117-9eca-4da1-a1b6-f3e3a637f3e1",
			"name": "Hélène",
			"email": "hruxton3@biblegateway.com",
			"password": "BIGKTzi3U",
			"isAdmim": false
		}
	},
	{
		"id": "8b403c58-6eda-489e-be05-1a17120d01ef",
		"userId": "4e250af4-e750-420e-9c7c-d5b6c6eb2977",
		"skilltreeId": "09eb1027-10f4-448a-92e1-2838f8965aca",
		"skilltree": {
			"id": "09eb1027-10f4-448a-92e1-2838f8965aca",
			"height": 3,
			"sizeWidth": 1920,
			"sizeHeight": 1440,
			"skillspaceId": "2212c975-c8e2-4c2a-8176-777050465563",
			"nodes": [
				{
					"id": "15",
					"alias": "DCA0108",
					"description": "SISTEMAS OPERACIONAIS - 60h",
					"group": [
						"8"
					],
					"x": 960,
					"y": 264,
					"deep": 2,
					"skilltreeId": "09eb1027-10f4-448a-92e1-2838f8965aca"
				},
				{
					"id": "9",
					"alias": "DCA0110",
					"description": "MODELAGEM E ANALISE DE SISTEMAS DINAMICOS - 60h",
					"group": [
						"1"
					],
					"x": 220,
					"y": 756,
					"deep": 1,
					"skilltreeId": "09eb1027-10f4-448a-92e1-2838f8965aca"
				},
				{
					"id": "8",
					"alias": "DCA0212",
					"description": "ARQUITETURA DE COMPUTADORES - 60h",
					"group": [
						"15",
						"3"
					],
					"x": 1700,
					"y": 756,
					"deep": 1,
					"skilltreeId": "09eb1027-10f4-448a-92e1-2838f8965aca"
				},
				{
					"id": "4",
					"alias": "DCA0213",
					"description": "ELETRÔNICA - 90h",
					"group": [],
					"x": 320,
					"y": 1152,
					"deep": 0,
					"skilltreeId": "09eb1027-10f4-448a-92e1-2838f8965aca"
				},
				{
					"id": "3",
					"alias": "DCA0212",
					"description": "CIRCUITOS DIGITAIS - 90h",
					"group": [
						"8"
					],
					"x": 960,
					"y": 1056,
					"deep": 0,
					"skilltreeId": "09eb1027-10f4-448a-92e1-2838f8965aca"
				},
				{
					"id": "1",
					"alias": "DCA0105",
					"description": "TEORIA DE CIRCUITOS - 60h",
					"group": [
						"9"
					],
					"x": 1600,
					"y": 1152,
					"deep": 0,
					"skilltreeId": "09eb1027-10f4-448a-92e1-2838f8965aca"
				}
			],
			"links": [
				{
					"source": "8",
					"target": "15",
					"skilltreeId": "09eb1027-10f4-448a-92e1-2838f8965aca"
				},
				{
					"source": "3",
					"target": "8",
					"skilltreeId": "09eb1027-10f4-448a-92e1-2838f8965aca"
				},
				{
					"source": "1",
					"target": "9",
					"skilltreeId": "09eb1027-10f4-448a-92e1-2838f8965aca"
				}
			]
		},
		"status": [
			{
				"id": "f3b040c4-3c2c-4432-9fa7-f3be58bad1ef",
				"value": 10,
				"skillnodeId": "9",
				"skillstatusId": "8b403c58-6eda-489e-be05-1a17120d01ef",
				"skillnode": {
					"id": "9",
					"alias": "DCA0110",
					"description": "MODELAGEM E ANALISE DE SISTEMAS DINAMICOS - 60h",
					"group": [
						"1"
					],
					"x": 220,
					"y": 756,
					"deep": 1,
					"skilltreeId": "09eb1027-10f4-448a-92e1-2838f8965aca"
				}
			},
			{
				"id": "5faecc44-c365-4eef-bc7b-455004721b2c",
				"value": 10.2,
				"skillnodeId": "8",
				"skillstatusId": "8b403c58-6eda-489e-be05-1a17120d01ef",
				"skillnode": {
					"id": "8",
					"alias": "DCA0212",
					"description": "ARQUITETURA DE COMPUTADORES - 60h",
					"group": [
						"15",
						"3"
					],
					"x": 1700,
					"y": 756,
					"deep": 1,
					"skilltreeId": "09eb1027-10f4-448a-92e1-2838f8965aca"
				}
			},
			{
				"id": "a9e03657-f434-403b-bf5b-8d286ff83123",
				"value": 10.1,
				"skillnodeId": "4",
				"skillstatusId": "8b403c58-6eda-489e-be05-1a17120d01ef",
				"skillnode": {
					"id": "4",
					"alias": "DCA0213",
					"description": "ELETRÔNICA - 90h",
					"group": [],
					"x": 320,
					"y": 1152,
					"deep": 0,
					"skilltreeId": "09eb1027-10f4-448a-92e1-2838f8965aca"
				}
			},
			{
				"id": "bcbb257a-7e98-459f-9c48-2b4e8bdee613",
				"value": 10.2,
				"skillnodeId": "3",
				"skillstatusId": "8b403c58-6eda-489e-be05-1a17120d01ef",
				"skillnode": {
					"id": "3",
					"alias": "DCA0212",
					"description": "CIRCUITOS DIGITAIS - 90h",
					"group": [
						"8"
					],
					"x": 960,
					"y": 1056,
					"deep": 0,
					"skilltreeId": "09eb1027-10f4-448a-92e1-2838f8965aca"
				}
			},
			{
				"id": "155bf747-41e2-45b0-ab50-ef39137812d5",
				"value": 10,
				"skillnodeId": "1",
				"skillstatusId": "8b403c58-6eda-489e-be05-1a17120d01ef",
				"skillnode": {
					"id": "1",
					"alias": "DCA0105",
					"description": "TEORIA DE CIRCUITOS - 60h",
					"group": [
						"9"
					],
					"x": 1600,
					"y": 1152,
					"deep": 0,
					"skilltreeId": "09eb1027-10f4-448a-92e1-2838f8965aca"
				}
			},
			{
				"id": "031c9f9f-71ec-4f40-b13c-e8a93e5c7d3e",
				"value": 10.2,
				"skillnodeId": "15",
				"skillstatusId": "8b403c58-6eda-489e-be05-1a17120d01ef",
				"skillnode": {
					"id": "15",
					"alias": "DCA0108",
					"description": "SISTEMAS OPERACIONAIS - 60h",
					"group": [
						"8"
					],
					"x": 960,
					"y": 264,
					"deep": 2,
					"skilltreeId": "09eb1027-10f4-448a-92e1-2838f8965aca"
				}
			}
		],
		"user": {
			"id": "4e250af4-e750-420e-9c7c-d5b6c6eb2977",
			"name": "Sif4",
			"email": "sif4@asgard.com",
			"password": "$2a$12$JeyJI/HQvV9cu509VhdlK./q6KLsPAmLnbsO3L7w.N3/xjKrinZLC",
			"isAdmim": false
		}
	}
]; */

export function updClsStatus(skillstatus) {
	const status = {};

	skillstatus.forEach((sks) => {
		sks.status.forEach((s) => {
			status[s.skillnode.id] = status[s.skillnode.id] ? status[s.skillnode.id] + s.value : s.value;
		});
	});

	return status;
}

export default function getClsSkillstatus(clsSkillstatus) {
	//console.log(clsSkillstatus)
	const len = clsSkillstatus.length;
	const updClsSkillStatus = clsSkillstatus[0];
	//console.log(len)
	const updtStatus = updClsStatus(clsSkillstatus);

	updClsSkillStatus.status.forEach((s) => {
		s.value = updtStatus[s.skillnode.id] ? updtStatus[s.skillnode.id] / len : s.value;
	});

	//console.log(updClsSkillStatus.status);
	return updClsSkillStatus;
}

//console.log(getClsSkillstatus(data))
