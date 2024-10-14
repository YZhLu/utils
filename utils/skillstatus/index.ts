// @ts-nocheck
import * as h from './updSkillstatus.js';
import initStatus from './initStatus.js';
import * as updater from './updClsSkillstatus.js';

/* 
const skillstatus = [
    {
        id: "8b403c58-6eda-489e-be05-1a17120d01ef",
        userId: "4e250af4-e750-420e-9c7c-d5b6c6eb2977",
        user: {
            id: "4e250af4-e750-420e-9c7c-d5b6c6eb2977",
            name: "Sif4",
            email: "sif4@asgard.com",
            password: "$2a$12$JeyJI/HQvV9cu509VhdlK./q6KLsPAmLnbsO3L7w.N3/xjKrinZLC",
            isAdmim: false
        },
        skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca",
        skilltree: {
            id: "09eb1027-10f4-448a-92e1-2838f8965aca",
            height: 3,
            sizeWidth: 1920,
            sizeHeight: 1440,
            skillspaceId: "2212c975-c8e2-4c2a-8176-777050465563"
        },
        status: [
            {
                id: "staus1",
                value: 0,
                skillnode: {
                    id: "15",
                    alias: "DCA0108",
                    description: "SISTEMAS OPERACIONAIS - 60h",
                    group: [
                        "8"
                    ],
                    x: 960,
                    y: 264,
                    deep: 2,
                    skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca"
                },
                skillstatus: {
                    id: "skstatus"
                },
            },
            {
                id: "status2",
                value: 0,
                skillnode: {
                    id: "9",
                    alias: "DCA0110",
                    description: "MODELAGEM E ANALISE DE SISTEMAS DINAMICOS - 60h",
                    group: [
                        "1"
                    ],
                    x: 220,
                    y: 756,
                    deep: 1,
                    skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca"
                },
                skillstatus: {
                    id: "skstatus"
                }
            },
            {
                skillstatus: {
                    id: "skstatus"
                },
                id: "staus3",
                value: 0,
                skillnode: {
                    id: "8",
                    alias: "DCA0212",
                    description: "ARQUITETURA DE COMPUTADORES - 60h",
                    group: [
                        "15",
                        "3"
                    ],
                    x: 1700,
                    y: 756,
                    deep: 1,
                    skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca"
                }
            },
            {
                skillstatus: {
                    id: "skstatus"
                },
                id: "staus4",
                value: 0,
                skillnode: {
                    id: "4",
                    alias: "DCA0213",
                    description: "ELETRÔNICA - 90h",
                    group: [],
                    x: 320,
                    y: 1152,
                    deep: 0,
                    skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca"
                }
            },
            {
                skillstatus: {
                    id: "skstatus"
                },
                id: "staus5",
                value: 0,
                skillnode: {
                    id: "3",
                    alias: "DCA0212",
                    description: "CIRCUITOS DIGITAIS - 90h",
                    group: [
                        "8"
                    ],
                    x: 960,
                    y: 1056,
                    deep: 0,
                    skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca"
                }
            },
            {
                skillstatus: {
                    id: "skstatus"
                },
                id: "staus6",
                value: 0,
                skillnode: {
                    id: "1",
                    alias: "DCA0105",
                    description: "TEORIA DE CIRCUITOS - 60h",
                    group: [
                        "9"
                    ],
                    x: 1600,
                    y: 1152,
                    deep: 0,
                    skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca"
                }
            }
        ]
    },
    {
        id: "8b403c58-6eda-489e-be05-1a17120d01ef",
        userId: "4e250af4-e750-420e-9c7c-d5b6c6eb2977",
        user: {
            id: "4e250af4-e750-420e-9c7c-d5b6c6eb2977",
            name: "Sif4",
            email: "sif4@asgard.com",
            password: "$2a$12$JeyJI/HQvV9cu509VhdlK./q6KLsPAmLnbsO3L7w.N3/xjKrinZLC",
            isAdmim: false
        },
        skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca",
        skilltree: {
            id: "09eb1027-10f4-448a-92e1-2838f8965aca",
            height: 3,
            sizeWidth: 1920,
            sizeHeight: 1440,
            skillspaceId: "2212c975-c8e2-4c2a-8176-777050465563"
        },
        status: [
            {
                id: "staus1",
                value: 0,
                skillnode: {
                    id: "15",
                    alias: "DCA0108",
                    description: "SISTEMAS OPERACIONAIS - 60h",
                    group: [
                        "8"
                    ],
                    x: 960,
                    y: 264,
                    deep: 2,
                    skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca"
                },
                skillstatus: {
                    id: "skstatus"
                },
            },
            {
                id: "status2",
                value: 0,
                skillnode: {
                    id: "9",
                    alias: "DCA0110",
                    description: "MODELAGEM E ANALISE DE SISTEMAS DINAMICOS - 60h",
                    group: [
                        "1"
                    ],
                    x: 220,
                    y: 756,
                    deep: 1,
                    skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca"
                },
                skillstatus: {
                    id: "skstatus"
                }
            },
            {
                skillstatus: {
                    id: "skstatus"
                },
                id: "staus3",
                value: 0,
                skillnode: {
                    id: "8",
                    alias: "DCA0212",
                    description: "ARQUITETURA DE COMPUTADORES - 60h",
                    group: [
                        "15",
                        "3"
                    ],
                    x: 1700,
                    y: 756,
                    deep: 1,
                    skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca"
                }
            },
            {
                skillstatus: {
                    id: "skstatus"
                },
                id: "staus4",
                value: 0,
                skillnode: {
                    id: "4",
                    alias: "DCA0213",
                    description: "ELETRÔNICA - 90h",
                    group: [],
                    x: 320,
                    y: 1152,
                    deep: 0,
                    skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca"
                }
            },
            {
                skillstatus: {
                    id: "skstatus"
                },
                id: "staus5",
                value: 0,
                skillnode: {
                    id: "3",
                    alias: "DCA0212",
                    description: "CIRCUITOS DIGITAIS - 90h",
                    group: [
                        "8"
                    ],
                    x: 960,
                    y: 1056,
                    deep: 0,
                    skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca"
                }
            },
            {
                skillstatus: {
                    id: "skstatus"
                },
                id: "staus6",
                value: 0,
                skillnode: {
                    id: "1",
                    alias: "DCA0105",
                    description: "TEORIA DE CIRCUITOS - 60h",
                    group: [
                        "9"
                    ],
                    x: 1600,
                    y: 1152,
                    deep: 0,
                    skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca"
                }
            }
        ]
    }
]; */

//console.log(h.increment(7.5, 10, 0.1, 10, 1));
//console.log(initStatus(skillstatus[0]))

/*
const skillstatus = [
    {
        id: "8b403c58-6eda-489e-be05-1a17120d01ef",
        userId: "4e250af4-e750-420e-9c7c-d5b6c6eb2977",
        user: {
            id: "4e250af4-e750-420e-9c7c-d5b6c6eb2977",
            name: "Sif4",
            email: "sif4@asgard.com",
            password: "$2a$12$JeyJI/HQvV9cu509VhdlK./q6KLsPAmLnbsO3L7w.N3/xjKrinZLC",
            isAdmim: false
        },
        skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca",
        skilltree: {
            id: "09eb1027-10f4-448a-92e1-2838f8965aca",
            height: 3,
            sizeWidth: 1920,
            sizeHeight: 1440,
            skillspaceId: "2212c975-c8e2-4c2a-8176-777050465563"
        },
        status: [
            {
                id: "staus1",
                value: 0,
                skillnode: {
                    id: "15",
                    alias: "DCA0108",
                    description: "SISTEMAS OPERACIONAIS - 60h",
                    group: [
                        "8"
                    ],
                    x: 960,
                    y: 264,
                    deep: 2,
                    skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca"
                },
                skillstatus: {
                    id: "skstatus"
                },
            },
            {
                id: "status2",
                value: 0,
                skillnode: {
                    id: "9",
                    alias: "DCA0110",
                    description: "MODELAGEM E ANALISE DE SISTEMAS DINAMICOS - 60h",
                    group: [
                        "1"
                    ],
                    x: 220,
                    y: 756,
                    deep: 1,
                    skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca"
                },
                skillstatus: {
                    id: "skstatus"
                }
            },
            {
                skillstatus: {
                    id: "skstatus"
                },
                id: "staus3",
                value: 0,
                skillnode: {
                    id: "8",
                    alias: "DCA0212",
                    description: "ARQUITETURA DE COMPUTADORES - 60h",
                    group: [
                        "15",
                        "3"
                    ],
                    x: 1700,
                    y: 756,
                    deep: 1,
                    skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca"
                }
            },
            {
                skillstatus: {
                    id: "skstatus"
                },
                id: "staus4",
                value: 0,
                skillnode: {
                    id: "4",
                    alias: "DCA0213",
                    description: "ELETRÔNICA - 90h",
                    group: [],
                    x: 320,
                    y: 1152,
                    deep: 0,
                    skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca"
                }
            },
            {
                skillstatus: {
                    id: "skstatus"
                },
                id: "staus5",
                value: 0,
                skillnode: {
                    id: "3",
                    alias: "DCA0212",
                    description: "CIRCUITOS DIGITAIS - 90h",
                    group: [
                        "8"
                    ],
                    x: 960,
                    y: 1056,
                    deep: 0,
                    skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca"
                }
            },
            {
                skillstatus: {
                    id: "skstatus"
                },
                id: "staus6",
                value: 0,
                skillnode: {
                    id: "1",
                    alias: "DCA0105",
                    description: "TEORIA DE CIRCUITOS - 60h",
                    group: [
                        "9"
                    ],
                    x: 1600,
                    y: 1152,
                    deep: 0,
                    skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca"
                }
            }
        ]
    },
    {
        id: "8b403c58-6eda-489e-be05-1a17120d01ef",
        userId: "4e250af4-e750-420e-9c7c-d5b6c6eb2977",
        user: {
            id: "4e250af4-e750-420e-9c7c-d5b6c6eb2977",
            name: "Sif4",
            email: "sif4@asgard.com",
            password: "$2a$12$JeyJI/HQvV9cu509VhdlK./q6KLsPAmLnbsO3L7w.N3/xjKrinZLC",
            isAdmim: false
        },
        skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca",
        skilltree: {
            id: "09eb1027-10f4-448a-92e1-2838f8965aca",
            height: 3,
            sizeWidth: 1920,
            sizeHeight: 1440,
            skillspaceId: "2212c975-c8e2-4c2a-8176-777050465563"
        },
        status: [
            {
                id: "staus1",
                value: 0,
                skillnode: {
                    id: "15",
                    alias: "DCA0108",
                    description: "SISTEMAS OPERACIONAIS - 60h",
                    group: [
                        "8"
                    ],
                    x: 960,
                    y: 264,
                    deep: 2,
                    skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca"
                },
                skillstatus: {
                    id: "skstatus"
                },
            },
            {
                id: "status2",
                value: 0,
                skillnode: {
                    id: "9",
                    alias: "DCA0110",
                    description: "MODELAGEM E ANALISE DE SISTEMAS DINAMICOS - 60h",
                    group: [
                        "1"
                    ],
                    x: 220,
                    y: 756,
                    deep: 1,
                    skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca"
                },
                skillstatus: {
                    id: "skstatus"
                }
            },
            {
                skillstatus: {
                    id: "skstatus"
                },
                id: "staus3",
                value: 0,
                skillnode: {
                    id: "8",
                    alias: "DCA0212",
                    description: "ARQUITETURA DE COMPUTADORES - 60h",
                    group: [
                        "15",
                        "3"
                    ],
                    x: 1700,
                    y: 756,
                    deep: 1,
                    skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca"
                }
            },
            {
                skillstatus: {
                    id: "skstatus"
                },
                id: "staus4",
                value: 0,
                skillnode: {
                    id: "4",
                    alias: "DCA0213",
                    description: "ELETRÔNICA - 90h",
                    group: [],
                    x: 320,
                    y: 1152,
                    deep: 0,
                    skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca"
                }
            },
            {
                skillstatus: {
                    id: "skstatus"
                },
                id: "staus5",
                value: 0,
                skillnode: {
                    id: "3",
                    alias: "DCA0212",
                    description: "CIRCUITOS DIGITAIS - 90h",
                    group: [
                        "8"
                    ],
                    x: 960,
                    y: 1056,
                    deep: 0,
                    skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca"
                }
            },
            {
                skillstatus: {
                    id: "skstatus"
                },
                id: "staus6",
                value: 0,
                skillnode: {
                    id: "1",
                    alias: "DCA0105",
                    description: "TEORIA DE CIRCUITOS - 60h",
                    group: [
                        "9"
                    ],
                    x: 1600,
                    y: 1152,
                    deep: 0,
                    skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca"
                }
            }
        ]
    }
]; */

//console.log(initStatus(skillstatus[0]))
//skillstatus[0].status = initStatus(skillstatus[0],10)
//skillstatus[1].status = initStatus(skillstatus[0],5)

/* 
const clsSkillstatus = {
    id: "8b403c58-6eda-489e-be05-1a17120d01ef",
    userId: "4e250af4-e750-420e-9c7c-d5b6c6eb2977",
    user: {
        id: "4e250af4-e750-420e-9c7c-d5b6c6eb2977",
        name: "Sif4",
        email: "sif4@asgard.com",
        password: "$2a$12$JeyJI/HQvV9cu509VhdlK./q6KLsPAmLnbsO3L7w.N3/xjKrinZLC",
        isAdmim: false
    },
    skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca",
    skilltree: {
        id: "09eb1027-10f4-448a-92e1-2838f8965aca",
        height: 3,
        sizeWidth: 1920,
        sizeHeight: 1440,
        skillspaceId: "2212c975-c8e2-4c2a-8176-777050465563"
    },
    status: [
        {
            id: "staus1",
            value: 0,
            skillnode: {
                id: "15",
                alias: "DCA0108",
                description: "SISTEMAS OPERACIONAIS - 60h",
                group: [
                    "8"
                ],
                x: 960,
                y: 264,
                deep: 2,
                skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca"
            },
            skillstatus: {
                id: "skstatus"
            },
        },
        {
            id: "status2",
            value: 0,
            skillnode: {
                id: "9",
                alias: "DCA0110",
                description: "MODELAGEM E ANALISE DE SISTEMAS DINAMICOS - 60h",
                group: [
                    "1"
                ],
                x: 220,
                y: 756,
                deep: 1,
                skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca"
            },
            skillstatus: {
                id: "skstatus"
            }
        },
        {
            skillstatus: {
                id: "skstatus"
            },
            id: "staus3",
            value: 0,
            skillnode: {
                id: "8",
                alias: "DCA0212",
                description: "ARQUITETURA DE COMPUTADORES - 60h",
                group: [
                    "15",
                    "3"
                ],
                x: 1700,
                y: 756,
                deep: 1,
                skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca"
            }
        },
        {
            skillstatus: {
                id: "skstatus"
            },
            id: "staus4",
            value: 0,
            skillnode: {
                id: "4",
                alias: "DCA0213",
                description: "ELETRÔNICA - 90h",
                group: [],
                x: 320,
                y: 1152,
                deep: 0,
                skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca"
            }
        },
        {
            skillstatus: {
                id: "skstatus"
            },
            id: "staus5",
            value: 0,
            skillnode: {
                id: "3",
                alias: "DCA0212",
                description: "CIRCUITOS DIGITAIS - 90h",
                group: [
                    "8"
                ],
                x: 960,
                y: 1056,
                deep: 0,
                skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca"
            }
        },
        {
            skillstatus: {
                id: "skstatus"
            },
            id: "staus6",
            value: 0,
            skillnode: {
                id: "1",
                alias: "DCA0105",
                description: "TEORIA DE CIRCUITOS - 60h",
                group: [
                    "9"
                ],
                x: 1600,
                y: 1152,
                deep: 0,
                skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca"
            }
        }
    ]
} */

//console.log(updClsStatus(skillstatus))

//console.log(clsSkillstatus);

//updClsSkillstatus(clsSkillstatus);

//console.log(clsSkillstatus);

//console.log(increment(7.5, 10, 0.1, 10, 1));

/* 
const skilltree = {
    id: "09eb1027-10f4-448a-92e1-2838f8965aca",
    height: 3,
    sizeWidth: 1920,
    sizeHeight: 1440,
    skillspaceId: "2212c975-c8e2-4c2a-8176-777050465563",
    nodes: [
        {
            id: "15",
            alias: "DCA0108",
            description: "SISTEMAS OPERACIONAIS - 60h",
            group: [
                "8"
            ],
            x: 960,
            y: 264,
            deep: 2,
            skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca"
        },
        {
            id: "9",
            alias: "DCA0110",
            description: "MODELAGEM E ANALISE DE SISTEMAS DINAMICOS - 60h",
            group: [
                "1"
            ],
            x: 220,
            y: 756,
            deep: 1,
            skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca"
        },
        {
            id: "8",
            alias: "DCA0212",
            description: "ARQUITETURA DE COMPUTADORES - 60h",
            group: [
                "15",
                "3"
            ],
            x: 1700,
            y: 756,
            deep: 1,
            skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca"
        },
        {
            id: "4",
            alias: "DCA0213",
            description: "ELETRÔNICA - 90h",
            group: [],
            x: 320,
            y: 1152,
            deep: 0,
            skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca"
        },
        {
            id: "3",
            alias: "DCA0212",
            description: "CIRCUITOS DIGITAIS - 90h",
            group: [
                "8"
            ],
            x: 960,
            y: 1056,
            deep: 0,
            skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca"
        },
        {
            id: "1",
            alias: "DCA0105",
            description: "TEORIA DE CIRCUITOS - 60h",
            group: [
                "9"
            ],
            x: 1600,
            y: 1152,
            deep: 0,
            skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca"
        }
    ],
    links: [
        {
            source: "8",
            target: "15",
            skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca"
        },
        {
            source: "3",
            target: "8",
            skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca"
        },
        {
            source: "1",
            target: "9",
            skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca"
        }
    ],
    skillstatus: []
} */

/* 
const skillstatus = {
    id: "skstatus",
    user: {
        id: "userboi"
    },
    skilltree,
    status: [
        {
            id: "staus1",
            value: 0,
            skillnode: {
                id: "15",
                alias: "DCA0108",
                description: "SISTEMAS OPERACIONAIS - 60h",
                group: [
                    "8"
                ],
                x: 960,
                y: 264,
                deep: 2,
                skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca"
            },
            skillstatus: {
                id: "skstatus"
            },
        },
        {
            id: "status2",
            value: 0,
            skillnode: {
                id: "9",
                alias: "DCA0110",
                description: "MODELAGEM E ANALISE DE SISTEMAS DINAMICOS - 60h",
                group: [
                    "1"
                ],
                x: 220,
                y: 756,
                deep: 1,
                skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca"
            },
            skillstatus: {
                id: "skstatus"
            }
        },
        {
            skillstatus: {
                id: "skstatus"
            },
            id: "staus3",
            value: 0,
            skillnode: {
                id: "8",
                alias: "DCA0212",
                description: "ARQUITETURA DE COMPUTADORES - 60h",
                group: [
                    "15",
                    "3"
                ],
                x: 1700,
                y: 756,
                deep: 1,
                skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca"
            }
        },
        {
            skillstatus: {
                id: "skstatus"
            },
            id: "staus4",
            value: 0,
            skillnode: {
                id: "4",
                alias: "DCA0213",
                description: "ELETRÔNICA - 90h",
                group: [],
                x: 320,
                y: 1152,
                deep: 0,
                skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca"
            }
        },
        {
            skillstatus: {
                id: "skstatus"
            },
            id: "staus5",
            value: 0,
            skillnode: {
                id: "3",
                alias: "DCA0212",
                description: "CIRCUITOS DIGITAIS - 90h",
                group: [
                    "8"
                ],
                x: 960,
                y: 1056,
                deep: 0,
                skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca"
            }
        },
        {
            skillstatus: {
                id: "skstatus"
            },
            id: "staus6",
            value: 0,
            skillnode: {
                id: "1",
                alias: "DCA0105",
                description: "TEORIA DE CIRCUITOS - 60h",
                group: [
                    "9"
                ],
                x: 1600,
                y: 1152,
                deep: 0,
                skilltreeId: "09eb1027-10f4-448a-92e1-2838f8965aca"
            }
        }
    ]
}; */

/* 
const assessment = {

    id: "a63d42b3-ecd3-4b07-a66e-53972f43fcaa",
    name: "test test2",
    maxScore: 10,
    startTime: "2022-04-14T21:57:22.472Z",
    finishTime: "2022-04-14T21:57:22.472Z",
    isFeedbackImmediate: true,
    numTries: 1,
    creatorId: "f9b2a628-5340-4c3a-82c5-385de5882c32",
    classroomId: "a70edd3e-d842-44aa-8270-7a6c0da4406b",
    creator: {
        id: "f9b2a628-5340-4c3a-82c5-385de5882c32",
        userId: "4e250af4-e750-420e-9c7c-d5b6c6eb2977"
    },
    classroom: {
        id: "a70edd3e-d842-44aa-8270-7a6c0da4406b",
        name: "EngComp",
        samples: 2,
        decay: 0.5,
        skillspaceId: "2212c975-c8e2-4c2a-8176-777050465563"
    },
    tasks: [
        {
            id: "2f28f1cf-6a5e-44db-891f-745c8c563d85",
            name: "test quest",
            isEssay: true,
            maxScore: 10,
            answerKey: "",
            isSingleAnswer: true,
            body: "corpo a modificado3",
            command: "comando a",
            creatorId: "c4dde268-a403-494a-904a-701c39164d8b",
            skills: [
                {
                    id: "1",
                    name: "DCA0105",
                    description: "TEORIA DE CIRCUITOS - 60h"
                },
                {
                    id: "3",
                    name: "DCA0212",
                    description: "CIRCUITOS DIGITAIS - 90h"
                },
                {
                    id: "8",
                    name: "DCA0212",
                    description: "ARQUITETURA DE COMPUTADORES - 60h"
                },
                {
                    id: "15",
                    name: "DCA0108",
                    description: "SISTEMAS OPERACIONAIS - 60h"
                }
            ],
            alternatives: [
                {
                    id: "ac22e0dc-e1f3-4f37-a4de-00e1d88721ca",
                    statement: "1234",
                    score: 10,
                    explanation: ""
                },
                {
                    id: "dad24b22-05f7-4fdb-82b5-d78c76a19bfd",
                    statement: "qwe",
                    score: 0,
                    explanation: ""
                },
                {
                    id: "49c63d4f-9921-4804-a087-5cbe4fd1a4c6",
                    statement: "cdcd",
                    score: 0,
                    explanation: ""
                }
            ]
        },
        {
            id: "54e22ffb-2924-4bcb-9cdf-e344f4b3e818",
            name: "test quest2",
            isEssay: true,
            maxScore: 10,
            answerKey: "",
            isSingleAnswer: true,
            body: "corpo a modificado",
            command: "comando a",
            creatorId: "c4dde268-a403-494a-904a-701c39164d8b",
            skills: [
                {
                    id: "1",
                    name: "DCA0105",
                    description: "TEORIA DE CIRCUITOS - 60h"
                },
                {
                    id: "3",
                    name: "DCA0212",
                    description: "CIRCUITOS DIGITAIS - 90h"
                },
                {
                    id: "8",
                    name: "DCA0212",
                    description: "ARQUITETURA DE COMPUTADORES - 60h"
                }
            ],
            alternatives: [
                {
                    id: "ac22e0dc-e1f3-4f37-a4de-00e1d88721ca",
                    statement: "1234",
                    score: 0,
                    explanation: ""
                },
                {
                    id: "dad24b22-05f7-4fdb-82b5-d78c76a19bfd",
                    statement: "qwe",
                    score: 5,
                    explanation: ""
                },
                {
                    id: "49c63d4f-9921-4804-a087-5cbe4fd1a4c6",
                    statement: "cdcd",
                    score: 5,
                    explanation: ""
                }
            ]
        },
        {
            id: "28f3c66d-ec54-4416-ad3c-e4634fa627ef",
            name: "test",
            isEssay: false,
            maxScore: 10,
            answerKey: "",
            isSingleAnswer: true,
            body: "",
            command: "",
            creatorId: "c4dde268-a403-494a-904a-701c39164d8b",
            skills: [
                {
                    id: "1",
                    name: "DCA0105",
                    description: "TEORIA DE CIRCUITOS - 60h"
                }
            ],
            alternatives: [
                {
                    id: "ac22e0dc-e1f3-4f37-a4de-00e1d88721ca",
                    statement: "1234",
                    score: 1,
                    explanation: ""
                },
                {
                    id: "dad24b22-05f7-4fdb-82b5-d78c76a19bfd",
                    statement: "qwe",
                    score: 4,
                    explanation: ""
                },
                {
                    id: "49c63d4f-9921-4804-a087-5cbe4fd1a4c6",
                    statement: "cdcd",
                    score: 5,
                    explanation: ""
                }
            ]
        }
    ],
    students: [],
    answers: [
        {
            id: "e8f570e4-e1fa-41a3-aab5-1cb31f608ee4",
            score: 0,
            isGraded: false,
            essayScores: [],
            studentId: "494f93de-1a1c-4c2b-a5cc-27aa74a8965a",
            assessmentId: "a63d42b3-ecd3-4b07-a66e-53972f43fcaa",
            student: {
                id: "494f93de-1a1c-4c2b-a5cc-27aa74a8965a",
                userId: "4e250af4-e750-420e-9c7c-d5b6c6eb2977",
                user: {
                    id: "4e250af4-e750-420e-9c7c-d5b6c6eb2977",
                    name: "Sif4",
                    email: "sif4@asgard.com",
                    password: "$2a$12$JeyJI/HQvV9cu509VhdlK./q6KLsPAmLnbsO3L7w.N3/xjKrinZLC",
                    isAdmim: false
                }
            }
        },
        {
            id: "dd24d83b-9953-4637-b160-1dcf20989930",
            score: 0,
            isGraded: false,
            essayScores: [],
            studentId: "494f93de-1a1c-4c2b-a5cc-27aa74a8965a",
            assessmentId: "a63d42b3-ecd3-4b07-a66e-53972f43fcaa",
            student: {
                id: "494f93de-1a1c-4c2b-a5cc-27aa74a8965a",
                userId: "4e250af4-e750-420e-9c7c-d5b6c6eb2977",
                user: {
                    id: "4e250af4-e750-420e-9c7c-d5b6c6eb2977",
                    name: "Sif4",
                    email: "sif4@asgard.com",
                    password: "$2a$12$JeyJI/HQvV9cu509VhdlK./q6KLsPAmLnbsO3L7w.N3/xjKrinZLC",
                    isAdmim: false
                }
            }
        }
    ]
}; */

/* 
const answer = {
    id: "ansid",
    student: {
        id: "user.studentId",
        userId: "userboi"
    },
    assessment,
    taskanswers: [
        {
            id: "#f28f1cf-6a5e-44db-891f-745c8c563d84",
            essayAnswer: '',
            alternativeAnswers: ["1234"],//"data.tasks[i].alternatives.filter((a) => a.checked == true).map(a => a.statement)",
            taskId: "2f28f1cf-6a5e-44db-891f-745c8c563d85",
            answerId: "ansid",
        },
        {
            id: "#4e22ffb-2924-4bcb-9cdf-e344f4b3e814",
            essayAnswer: '',
            alternativeAnswers: ["1234", "qwe"],//"data.tasks[i].alternatives.filter((a) => a.checked == true).map(a => a.statement)",
            taskId: "54e22ffb-2924-4bcb-9cdf-e344f4b3e818",
            answerId: "ansid",
        },
        {
            id: "#8f3c66d-ec54-4416-ad3c-e4634fa627ee",
            essayAnswer: '',
            alternativeAnswers: ["1234", "qwe", "cdcd"],//"data.tasks[i].alternatives.filter((a) => a.checked == true).map(a => a.statement)",
            taskId: "28f3c66d-ec54-4416-ad3c-e4634fa627ef",
            answerId: "ansid",
        }
    ],

    /* assessment: assessmentData,
    student: user.student,
     taskanswers: [] * /
}; */

//console.log(skillstatus.status)
//console.log(updStatus(skillstatus, answer, assessment.classroom))
