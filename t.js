function increment(grade, size, decay, nSamples, distance) {
  const inc =
    size <= nSamples
      ? size * grade * ((1 - decay) ** distance / nSamples)
      : grade * (1 - decay) ** distance;
  return inc;
}

function getChain(skillId, mapStatus) {
  const chain = {};
  chain[skillId] = 0;
  const firstNode = mapStatus.find(
    (mStat) => mStat.mapNode.node.data.id === skillId
  );
  const mapStat = firstNode;

  if (mapStat) {
    let deep = mapStat.mapNode.deep ? mapStat.mapNode.deep : 0;
    while (deep > 0) {
      deep = deep - 1;

      Object.keys(chain).forEach((id) => {
        mapStatus
          .find((mStat) => mStat.mapNode.node.data.id === id)
          ?.mapNode.group.forEach((n) => {
            const _node = mapStatus.find(
              (_mStat) => _mStat.mapNode.node.id === n
            );
            console.log("_node",_node, _node.mapNode.deep === deep);
            if (_node?.mapNode.deep === deep) {
              console.log("_node",_node, _node.mapNode.deep === deep);
              chain[_node.mapNode.node.data.id] = firstNode?.mapNode.deep
                ? firstNode.mapNode.deep - deep
                : deep;
              console.log('aui', _node.mapNode.node.data.id,firstNode?.mapNode.deep)
            }
          });
      });
    }
  }
  return chain;
}

function getMapNodesChain(mapNodeIds, chain) {
  return chain;
}

function updValue(size, samples, value, increment) {
  const _newValue = size >= samples ? increment : value + increment;
  console.log('dal', _newValue, value, increment)
  const newValue = _newValue < 0 ? 0 : _newValue > 1 ? 1 : _newValue;
  return increment ? newValue : value;
}

const getIncrements = (grade, size, decay, samples, mapStatus, skillId) => {
  const increments = {};
  const chain = getChain(skillId, mapStatus);
  console.log("chain", chain)
  Object.keys(chain).forEach((k) => {
    if (!increments[`${k}`]) increments[`${k}`] = 0;

    increments[`${k}`] =
      increments[`${k}`] + increment(grade, size, decay, samples, chain[k]);
  });

  return increments;
};

const updStatus = (grade, size, decay, samples, mapStatus, skillId) => {
  const increments = getIncrements(
    grade,
    size,
    decay,
    samples,
    mapStatus,
    skillId
  );

  console.log("increments -- ", increments)
  const keysIncrements = Object.keys(increments);

  const _mapStatus = mapStatus.filter((_m) =>
    keysIncrements.includes(_m.mapNode.node.data.id)
  );

  const newStatus = _mapStatus.map((_m) => {
    const m = { ..._m };
    if (m.value !== undefined) {
      m.value = updValue(size, samples, m.value, increments[m.mapNode.node.data.id]);
    }
    return m;
  });

  return newStatus;
};

const _ms = [
  {
    "value": 0,
    "mapNode": {
      "id": "bd59be1e-1cc6-4ecd-9125-53bad1c9286f",
      "x": 825,
      "y": 240.0000000000001,
      "group": [
        "e2b6775c-ce7a-4218-93cd-662e0cd52418",
        "446367e4-8c41-49e5-893d-714983db9df8",
        "39888b54-8cf2-483e-b079-208d51dc2fab"
      ],
      "deep": 9,
      "createdAt": "2025-01-31T12:51:39.725Z",
      "updatedAt": "2025-01-31T12:51:39.725Z",
      "nodeId": "bd59be1e-1cc6-4ecd-9125-53bad1c9286f",
      "skillmapId": "52e36e86-a297-4121-88a4-aec5826f6386",
      "node": {
        "id": "bd59be1e-1cc6-4ecd-9125-53bad1c9286f",
        "x": 540.4708022239649,
        "y": 828.655583019292,
        "createdAt": "2025-01-30T17:31:01.681Z",
        "updatedAt": "2025-01-30T17:31:01.681Z",
        "skilltreeId": "5a5abe9b-17c9-40bd-8107-4212a90b858c",
        "skillId": "ae0a31a9-33d4-4772-a1d4-087eb0194867",
        "data": {
          "id": "ae0a31a9-33d4-4772-a1d4-087eb0194867",
          "label": "Resolução de sistema de eq. do 2° grau",
          "description": "Resolver um sistema de equações do 2° grau.",
          "createdAt": "2023-05-23T17:20:53.697Z",
          "updatedAt": "2024-04-06T20:17:52.995Z"
        }
      }
    },
    "skillmapId": "52e36e86-a297-4121-88a4-aec5826f6386",
    "userId": "830171aa-01f6-4fe2-85df-f81b77d8be35",
    "id": "af558e27-a104-4eec-9384-4dce8a57219b"
  },
  {
    "value": 0,
    "mapNode": {
      "id": "39888b54-8cf2-483e-b079-208d51dc2fab",
      "x": 825,
      "y": 603.0000000000002,
      "group": [
        "73c1b7ca-4a3e-44a2-bac5-12542cb78f9e",
        "bd59be1e-1cc6-4ecd-9125-53bad1c9286f"
      ],
      "deep": 8,
      "createdAt": "2025-01-31T12:51:39.725Z",
      "updatedAt": "2025-01-31T12:51:39.725Z",
      "nodeId": "39888b54-8cf2-483e-b079-208d51dc2fab",
      "skillmapId": "52e36e86-a297-4121-88a4-aec5826f6386",
      "node": {
        "id": "39888b54-8cf2-483e-b079-208d51dc2fab",
        "x": 709.0811732516611,
        "y": 721.4399938212459,
        "createdAt": "2025-01-30T17:31:01.681Z",
        "updatedAt": "2025-01-30T17:31:01.681Z",
        "skilltreeId": "5a5abe9b-17c9-40bd-8107-4212a90b858c",
        "skillId": "a7f36032-1eb9-4d4d-986a-34f896278c03",
        "data": {
          "id": "a7f36032-1eb9-4d4d-986a-34f896278c03",
          "label": "S&P (b)",
          "description": "Utilizar a soma e produto de raízes para resolver equações \ndo 2° grau.",
          "createdAt": "2023-05-23T17:20:53.697Z",
          "updatedAt": "2024-04-23T15:09:45.130Z"
        }
      }
    },
    "skillmapId": "52e36e86-a297-4121-88a4-aec5826f6386",
    "userId": "830171aa-01f6-4fe2-85df-f81b77d8be35",
    "id": "4eeb8688-a98d-4667-a46b-6e5262a6c2c6"
  },
  {
    "value": 0,
    "mapNode": {
      "id": "e2b6775c-ce7a-4218-93cd-662e0cd52418",
      "x": 125,
      "y": 1056,
      "group": [
        "fe73a6c8-dad7-42b2-9f6f-5fc3a1f8cf37",
        "bd59be1e-1cc6-4ecd-9125-53bad1c9286f"
      ],
      "deep": 7,
      "createdAt": "2025-01-31T12:51:39.725Z",
      "updatedAt": "2025-01-31T12:51:39.725Z",
      "nodeId": "e2b6775c-ce7a-4218-93cd-662e0cd52418",
      "skillmapId": "52e36e86-a297-4121-88a4-aec5826f6386",
      "node": {
        "id": "e2b6775c-ce7a-4218-93cd-662e0cd52418",
        "x": 369.944779333852,
        "y": 649.524527482996,
        "createdAt": "2025-01-30T17:31:01.681Z",
        "updatedAt": "2025-01-30T17:31:01.681Z",
        "skilltreeId": "5a5abe9b-17c9-40bd-8107-4212a90b858c",
        "skillId": "e53f56ee-9982-4d0a-bfe1-e7c5811dba68",
        "data": {
          "id": "e53f56ee-9982-4d0a-bfe1-e7c5811dba68",
          "label": "Resolução de eq. irracionais",
          "description": "Determinar as soluções de uma equação irracional. ",
          "createdAt": "2023-05-23T17:20:53.697Z",
          "updatedAt": "2024-04-06T20:17:52.995Z"
        }
      }
    },
    "skillmapId": "52e36e86-a297-4121-88a4-aec5826f6386",
    "userId": "830171aa-01f6-4fe2-85df-f81b77d8be35",
    "id": "f4bd5f51-d4a7-4145-a8fd-f3c96f44ee1f"
  },
  {
    "value": 0,
    "mapNode": {
      "id": "446367e4-8c41-49e5-893d-714983db9df8",
      "x": 825,
      "y": 966.0000000000005,
      "group": [
        "fe73a6c8-dad7-42b2-9f6f-5fc3a1f8cf37",
        "8601ef29-0475-4a6b-977a-ce1ae4253e7e",
        "bd59be1e-1cc6-4ecd-9125-53bad1c9286f"
      ],
      "deep": 7,
      "createdAt": "2025-01-31T12:51:39.725Z",
      "updatedAt": "2025-01-31T12:51:39.725Z",
      "nodeId": "446367e4-8c41-49e5-893d-714983db9df8",
      "skillmapId": "52e36e86-a297-4121-88a4-aec5826f6386",
      "node": {
        "id": "446367e4-8c41-49e5-893d-714983db9df8",
        "x": 536.398942939757,
        "y": 652.137732094201,
        "createdAt": "2025-01-30T17:31:01.681Z",
        "updatedAt": "2025-01-30T17:31:01.681Z",
        "skilltreeId": "5a5abe9b-17c9-40bd-8107-4212a90b858c",
        "skillId": "75bf71d5-30d7-4677-9f8f-63412f443f0c",
        "data": {
          "id": "75bf71d5-30d7-4677-9f8f-63412f443f0c",
          "label": "Resolução de eq. biquadradas",
          "description": "Determinar as soluções de uma equação biquadrada. ",
          "createdAt": "2023-05-23T17:20:53.697Z",
          "updatedAt": "2024-04-06T20:17:52.995Z"
        }
      }
    },
    "skillmapId": "52e36e86-a297-4121-88a4-aec5826f6386",
    "userId": "830171aa-01f6-4fe2-85df-f81b77d8be35",
    "id": "e41cc794-5f6d-4cd1-8f40-dd5bdbc43be0"
  },
  {
    "value": 0,
    "mapNode": {
      "id": "73c1b7ca-4a3e-44a2-bac5-12542cb78f9e",
      "x": 1525,
      "y": 1056,
      "group": [
        "8601ef29-0475-4a6b-977a-ce1ae4253e7e",
        "39888b54-8cf2-483e-b079-208d51dc2fab"
      ],
      "deep": 7,
      "createdAt": "2025-01-31T12:51:39.725Z",
      "updatedAt": "2025-01-31T12:51:39.725Z",
      "nodeId": "73c1b7ca-4a3e-44a2-bac5-12542cb78f9e",
      "skillmapId": "52e36e86-a297-4121-88a4-aec5826f6386",
      "node": {
        "id": "73c1b7ca-4a3e-44a2-bac5-12542cb78f9e",
        "x": 708.407689050531,
        "y": 651.664171414319,
        "createdAt": "2025-01-30T17:31:01.681Z",
        "updatedAt": "2025-01-30T17:31:01.681Z",
        "skilltreeId": "5a5abe9b-17c9-40bd-8107-4212a90b858c",
        "skillId": "6b298468-0f3a-4405-a972-6dc770717475",
        "data": {
          "id": "6b298468-0f3a-4405-a972-6dc770717475",
          "label": "S&P (a)",
          "description": "Compreender a relação entre as raízes e os coeficientes de \numa equação do 2º grau.",
          "createdAt": "2023-05-23T17:20:53.697Z",
          "updatedAt": "2024-04-23T15:08:59.153Z"
        }
      }
    },
    "skillmapId": "52e36e86-a297-4121-88a4-aec5826f6386",
    "userId": "830171aa-01f6-4fe2-85df-f81b77d8be35",
    "id": "ab4a7ad4-d73e-4523-a012-5a4ba35d820d"
  },
  {
    "value": 0,
    "mapNode": {
      "id": "fe73a6c8-dad7-42b2-9f6f-5fc3a1f8cf37",
      "x": 187.5,
      "y": 1419,
      "group": [
        "03fcc793-5d45-467a-b32a-9ffb1fe8d832",
        "e2b6775c-ce7a-4218-93cd-662e0cd52418",
        "446367e4-8c41-49e5-893d-714983db9df8"
      ],
      "deep": 6,
      "createdAt": "2025-01-31T12:51:39.725Z",
      "updatedAt": "2025-01-31T12:51:39.725Z",
      "nodeId": "fe73a6c8-dad7-42b2-9f6f-5fc3a1f8cf37",
      "skillmapId": "52e36e86-a297-4121-88a4-aec5826f6386",
      "node": {
        "id": "fe73a6c8-dad7-42b2-9f6f-5fc3a1f8cf37",
        "x": 445.5402301446388,
        "y": 551.3682593113258,
        "createdAt": "2025-01-30T17:31:01.681Z",
        "updatedAt": "2025-01-30T17:31:01.681Z",
        "skilltreeId": "5a5abe9b-17c9-40bd-8107-4212a90b858c",
        "skillId": "695b1b7c-1e84-4301-95dc-7b864da48476",
        "data": {
          "id": "695b1b7c-1e84-4301-95dc-7b864da48476",
          "label": "Resolução de eq. do 2° grau incompletas",
          "description": "Determinar as soluções de uma equação do 2º \ngrau (incompletas).",
          "createdAt": "2023-05-23T17:20:53.697Z",
          "updatedAt": "2023-05-23T17:20:53.697Z"
        }
      }
    },
    "skillmapId": "52e36e86-a297-4121-88a4-aec5826f6386",
    "userId": "830171aa-01f6-4fe2-85df-f81b77d8be35",
    "id": "8adc332d-1a8f-45ab-8953-e48193e946ec"
  },
  {
    "value": 0,
    "mapNode": {
      "id": "8601ef29-0475-4a6b-977a-ce1ae4253e7e",
      "x": 1462.5,
      "y": 1419,
      "group": [
        "03fcc793-5d45-467a-b32a-9ffb1fe8d832",
        "446367e4-8c41-49e5-893d-714983db9df8",
        "73c1b7ca-4a3e-44a2-bac5-12542cb78f9e"
      ],
      "deep": 6,
      "createdAt": "2025-01-31T12:51:39.725Z",
      "updatedAt": "2025-01-31T12:51:39.725Z",
      "nodeId": "8601ef29-0475-4a6b-977a-ce1ae4253e7e",
      "skillmapId": "52e36e86-a297-4121-88a4-aec5826f6386",
      "node": {
        "id": "8601ef29-0475-4a6b-977a-ce1ae4253e7e",
        "x": 618.564031066272,
        "y": 550.5991251829012,
        "createdAt": "2025-01-30T17:31:01.681Z",
        "updatedAt": "2025-01-30T17:31:01.681Z",
        "skilltreeId": "5a5abe9b-17c9-40bd-8107-4212a90b858c",
        "skillId": "5f32b137-95da-4897-93e5-cf4906a9704c",
        "data": {
          "id": "5f32b137-95da-4897-93e5-cf4906a9704c",
          "label": "Resolução de eq. do 2° grau completas",
          "description": "Determinar as soluções de uma equação do 2º \ngrau(completas) por meio da fórmula de Bhaskara.",
          "createdAt": "2023-05-23T17:20:53.697Z",
          "updatedAt": "2023-05-23T17:20:53.697Z"
        }
      }
    },
    "skillmapId": "52e36e86-a297-4121-88a4-aec5826f6386",
    "userId": "830171aa-01f6-4fe2-85df-f81b77d8be35",
    "id": "6c7474ae-7897-4949-8514-26b5ebc53a49"
  },
  {
    "value": 0,
    "mapNode": {
      "id": "03fcc793-5d45-467a-b32a-9ffb1fe8d832",
      "x": 825,
      "y": 1692.000000000001,
      "group": [
        "dd2add1e-a4ce-440d-85c5-f51ce8f4b174",
        "fe73a6c8-dad7-42b2-9f6f-5fc3a1f8cf37",
        "8601ef29-0475-4a6b-977a-ce1ae4253e7e"
      ],
      "deep": 5,
      "createdAt": "2025-01-31T12:51:39.725Z",
      "updatedAt": "2025-01-31T12:51:39.725Z",
      "nodeId": "03fcc793-5d45-467a-b32a-9ffb1fe8d832",
      "skillmapId": "52e36e86-a297-4121-88a4-aec5826f6386",
      "node": {
        "id": "03fcc793-5d45-467a-b32a-9ffb1fe8d832",
        "x": 542.561277841746,
        "y": 476.9784716585489,
        "createdAt": "2025-01-30T17:31:01.681Z",
        "updatedAt": "2025-01-30T17:31:01.681Z",
        "skilltreeId": "5a5abe9b-17c9-40bd-8107-4212a90b858c",
        "skillId": "0d769191-b10e-432c-b8b5-ac6fcab604e1",
        "data": {
          "id": "0d769191-b10e-432c-b8b5-ac6fcab604e1",
          "label": "Introdução às Equações do 2° grau",
          "description": "1. Reconhecer uma equação do 2º grau.\n2. Classificar equações do 2º grau em completas ou \nincompletas.\n3. Escrever equações do 2º grau na forma reduzida. ",
          "createdAt": "2023-05-23T17:20:53.697Z",
          "updatedAt": "2024-04-06T20:17:52.995Z"
        }
      }
    },
    "skillmapId": "52e36e86-a297-4121-88a4-aec5826f6386",
    "userId": "830171aa-01f6-4fe2-85df-f81b77d8be35",
    "id": "a43d71b3-14a1-43a6-8e43-117f7c3d7a3c"
  },
  {
    "value": 0,
    "mapNode": {
      "id": "dd2add1e-a4ce-440d-85c5-f51ce8f4b174",
      "x": 825,
      "y": 2055.000000000001,
      "group": [
        "091a9c3c-9863-49fb-84d1-32e94a8e4d38",
        "03fcc793-5d45-467a-b32a-9ffb1fe8d832"
      ],
      "deep": 4,
      "createdAt": "2025-01-31T12:51:39.725Z",
      "updatedAt": "2025-01-31T12:51:39.725Z",
      "nodeId": "dd2add1e-a4ce-440d-85c5-f51ce8f4b174",
      "skillmapId": "52e36e86-a297-4121-88a4-aec5826f6386",
      "node": {
        "id": "dd2add1e-a4ce-440d-85c5-f51ce8f4b174",
        "x": 542.5529731070981,
        "y": 406.706116027466,
        "createdAt": "2025-01-30T17:31:01.681Z",
        "updatedAt": "2025-01-30T17:31:01.681Z",
        "skilltreeId": "5a5abe9b-17c9-40bd-8107-4212a90b858c",
        "skillId": "e2752c78-3d60-4f1c-8115-1531d1c3f3e3",
        "data": {
          "id": "e2752c78-3d60-4f1c-8115-1531d1c3f3e3",
          "label": "Racionalização de denominadores",
          "description": "Racionalizar denominadores. ",
          "createdAt": "2023-05-23T17:20:53.697Z",
          "updatedAt": "2023-05-23T17:20:53.697Z"
        }
      }
    },
    "skillmapId": "52e36e86-a297-4121-88a4-aec5826f6386",
    "userId": "830171aa-01f6-4fe2-85df-f81b77d8be35",
    "id": "b1b1d9a8-bd97-476c-a442-16cc9d98c2af"
  },
  {
    "value": 0,
    "mapNode": {
      "id": "5c175a0a-b368-4604-91a1-0ea91a20b98d",
      "x": 375,
      "y": 2508.000000000001,
      "group": [
        "b6d249c4-ee2b-4c91-b788-e2c2cb478ae3"
      ],
      "deep": 3,
      "createdAt": "2025-01-31T12:51:39.725Z",
      "updatedAt": "2025-01-31T12:51:39.725Z",
      "nodeId": "5c175a0a-b368-4604-91a1-0ea91a20b98d",
      "skillmapId": "52e36e86-a297-4121-88a4-aec5826f6386",
      "node": {
        "id": "5c175a0a-b368-4604-91a1-0ea91a20b98d",
        "x": 378.2081016646619,
        "y": 328.4540482632718,
        "createdAt": "2025-01-30T17:31:01.681Z",
        "updatedAt": "2025-01-30T17:31:01.681Z",
        "skilltreeId": "5a5abe9b-17c9-40bd-8107-4212a90b858c",
        "skillId": "c0d4c36d-3307-4fcc-9b57-c23493d9b2f3",
        "data": {
          "id": "c0d4c36d-3307-4fcc-9b57-c23493d9b2f3",
          "label": "Radicais (soma e subtração)",
          "description": "Efetuar adição e subtração com radicais. ",
          "createdAt": "2023-05-23T17:20:53.697Z",
          "updatedAt": "2023-05-23T17:20:53.697Z"
        }
      }
    },
    "skillmapId": "52e36e86-a297-4121-88a4-aec5826f6386",
    "userId": "830171aa-01f6-4fe2-85df-f81b77d8be35",
    "id": "caa27f13-263f-4607-9b85-f4f6358283f4"
  },
  {
    "value": 0,
    "mapNode": {
      "id": "091a9c3c-9863-49fb-84d1-32e94a8e4d38",
      "x": 1275,
      "y": 2508.000000000001,
      "group": [
        "b6d249c4-ee2b-4c91-b788-e2c2cb478ae3",
        "dd2add1e-a4ce-440d-85c5-f51ce8f4b174"
      ],
      "deep": 3,
      "createdAt": "2025-01-31T12:51:39.725Z",
      "updatedAt": "2025-01-31T12:51:39.725Z",
      "nodeId": "091a9c3c-9863-49fb-84d1-32e94a8e4d38",
      "skillmapId": "52e36e86-a297-4121-88a4-aec5826f6386",
      "node": {
        "id": "091a9c3c-9863-49fb-84d1-32e94a8e4d38",
        "x": 543.35653720767,
        "y": 329.4355995951802,
        "createdAt": "2025-01-30T17:31:01.681Z",
        "updatedAt": "2025-01-30T17:31:01.681Z",
        "skilltreeId": "5a5abe9b-17c9-40bd-8107-4212a90b858c",
        "skillId": "5fbd9e24-71ad-41f6-9d74-65ec6f523899",
        "data": {
          "id": "5fbd9e24-71ad-41f6-9d74-65ec6f523899",
          "label": "Radicais (multiplicação e divisão)",
          "description": "Efetuar multiplicação e divisão com radicais.",
          "createdAt": "2023-05-23T17:20:53.697Z",
          "updatedAt": "2024-04-06T20:20:21.587Z"
        }
      }
    },
    "skillmapId": "52e36e86-a297-4121-88a4-aec5826f6386",
    "userId": "830171aa-01f6-4fe2-85df-f81b77d8be35",
    "id": "986e4cce-52b1-43fd-8674-bafe919ef36e"
  },
  {
    "value": 0,
    "mapNode": {
      "id": "b6d249c4-ee2b-4c91-b788-e2c2cb478ae3",
      "x": 1212.5,
      "y": 2871.000000000001,
      "group": [
        "4f5f1cb6-ea61-4986-ac47-548be7e68b7d",
        "5c175a0a-b368-4604-91a1-0ea91a20b98d",
        "091a9c3c-9863-49fb-84d1-32e94a8e4d38"
      ],
      "deep": 2,
      "createdAt": "2025-01-31T12:51:39.725Z",
      "updatedAt": "2025-01-31T12:51:39.725Z",
      "nodeId": "b6d249c4-ee2b-4c91-b788-e2c2cb478ae3",
      "skillmapId": "52e36e86-a297-4121-88a4-aec5826f6386",
      "node": {
        "id": "b6d249c4-ee2b-4c91-b788-e2c2cb478ae3",
        "x": 468.4577020648193,
        "y": 240.0793392720138,
        "createdAt": "2025-01-30T17:31:01.681Z",
        "updatedAt": "2025-01-30T17:31:01.681Z",
        "skilltreeId": "5a5abe9b-17c9-40bd-8107-4212a90b858c",
        "skillId": "af84383c-13e0-4a37-a741-27fdfe5286a5",
        "data": {
          "id": "af84383c-13e0-4a37-a741-27fdfe5286a5",
          "label": "Radicais (props)",
          "description": "1. Resolver expressões utilizando as propriedades da \nradiciação.\n2. Simplificar radicais. ",
          "createdAt": "2023-05-23T17:20:53.697Z",
          "updatedAt": "2024-04-06T20:20:21.587Z"
        }
      }
    },
    "skillmapId": "52e36e86-a297-4121-88a4-aec5826f6386",
    "userId": "830171aa-01f6-4fe2-85df-f81b77d8be35",
    "id": "709329b8-67c1-4c16-85b4-fa2710643b17"
  },
  {
    "value": 0.95,
    "mapNode": {
      "id": "d436a268-163c-47ad-b974-3bd448ed4bdb",
      "x": 825,
      "y": 3507.000000000001,
      "group": [
        "4f5f1cb6-ea61-4986-ac47-548be7e68b7d"
      ],
      "deep": 0,
      "createdAt": "2025-01-31T12:51:39.725Z",
      "updatedAt": "2025-01-31T12:51:39.725Z",
      "nodeId": "d436a268-163c-47ad-b974-3bd448ed4bdb",
      "skillmapId": "52e36e86-a297-4121-88a4-aec5826f6386",
      "node": {
        "id": "d436a268-163c-47ad-b974-3bd448ed4bdb",
        "x": 381.5080625641282,
        "y": 80.27711707197682,
        "createdAt": "2025-01-30T17:31:01.681Z",
        "updatedAt": "2025-01-30T17:31:01.681Z",
        "skilltreeId": "5a5abe9b-17c9-40bd-8107-4212a90b858c",
        "skillId": "22e5bac7-630f-403d-98b2-bc638e6461b6",
        "data": {
          "id": "22e5bac7-630f-403d-98b2-bc638e6461b6",
          "label": "Num & Ops",
          "description": "Revisar as operações fundamentais em geral",
          "createdAt": "2023-05-23T17:20:53.697Z",
          "updatedAt": "2023-05-23T17:20:53.697Z"
        }
      }
    },
    "skillmapId": "52e36e86-a297-4121-88a4-aec5826f6386",
    "userId": "830171aa-01f6-4fe2-85df-f81b77d8be35",
    "id": "59d3f21e-c101-4e48-9d7d-6d38cdb2a0aa"
  },
  {
    "value": 0.8,
    "mapNode": {
      "id": "19a12489-5908-4114-b92c-4fdc1d4f6ffb",
      "x": 437.5,
      "y": 2871.000000000001,
      "group": [
        "4f5f1cb6-ea61-4986-ac47-548be7e68b7d"
      ],
      "deep": 2,
      "createdAt": "2025-01-31T12:51:39.725Z",
      "updatedAt": "2025-01-31T12:51:39.725Z",
      "nodeId": "19a12489-5908-4114-b92c-4fdc1d4f6ffb",
      "skillmapId": "52e36e86-a297-4121-88a4-aec5826f6386",
      "node": {
        "id": "19a12489-5908-4114-b92c-4fdc1d4f6ffb",
        "x": 290.3589746524103,
        "y": 242.1564230628644,
        "createdAt": "2025-01-30T17:31:01.681Z",
        "updatedAt": "2025-01-30T17:31:01.681Z",
        "skilltreeId": "5a5abe9b-17c9-40bd-8107-4212a90b858c",
        "skillId": "209a8080-02a9-40c8-9279-496c4b269bd7",
        "data": {
          "id": "209a8080-02a9-40c8-9279-496c4b269bd7",
          "label": "Notação científica",
          "description": "1. Escrever um número em notação científica.\n2. Aplicar as propriedades da potenciação para reduzir \nvárias potências a uma única potência.",
          "createdAt": "2023-05-23T17:20:53.697Z",
          "updatedAt": "2024-04-06T20:20:21.587Z"
        }
      }
    },
    "skillmapId": "52e36e86-a297-4121-88a4-aec5826f6386",
    "userId": "830171aa-01f6-4fe2-85df-f81b77d8be35",
    "id": "a0751144-0429-43d0-a69a-9230e070dd27"
  },
  {
    "value": 0.6,
    "mapNode": {
      "id": "4f5f1cb6-ea61-4986-ac47-548be7e68b7d",
      "x": 825,
      "y": 3144.000000000001,
      "group": [
        "d436a268-163c-47ad-b974-3bd448ed4bdb",
        "19a12489-5908-4114-b92c-4fdc1d4f6ffb",
        "b6d249c4-ee2b-4c91-b788-e2c2cb478ae3"
      ],
      "deep": 1,
      "createdAt": "2025-01-31T12:51:39.725Z",
      "updatedAt": "2025-01-31T12:51:39.725Z",
      "nodeId": "4f5f1cb6-ea61-4986-ac47-548be7e68b7d",
      "skillmapId": "52e36e86-a297-4121-88a4-aec5826f6386",
      "node": {
        "id": "4f5f1cb6-ea61-4986-ac47-548be7e68b7d",
        "x": 382.0564130485675,
        "y": 151.1823254132365,
        "createdAt": "2025-01-30T17:31:01.681Z",
        "updatedAt": "2025-01-30T17:31:01.681Z",
        "skilltreeId": "5a5abe9b-17c9-40bd-8107-4212a90b858c",
        "skillId": "219c1e16-31cc-48a0-a36d-64e1935fbba7",
        "data": {
          "id": "219c1e16-31cc-48a0-a36d-64e1935fbba7",
          "label": "Potenciação",
          "description": "Revisar os conceitos, cálculos e propriedades com \npotenciação em geral.",
          "createdAt": "2023-05-23T17:20:53.697Z",
          "updatedAt": "2023-05-23T17:20:53.697Z"
        }
      }
    },
    "skillmapId": "52e36e86-a297-4121-88a4-aec5826f6386",
    "userId": "830171aa-01f6-4fe2-85df-f81b77d8be35",
    "id": "cc00bc2e-c26d-45c8-8ccf-04e67acb20c4"
  }
]


const skid = /* "5fbd9e24-71ad-41f6-9d74-65ec6f523899"  *//* "209a8080-02a9-40c8-9279-496c4b269bd7" */ "219c1e16-31cc-48a0-a36d-64e1935fbba7"
let i = increment(0.5, 4, 0.5, 2, 0);
let value = updValue(10, 20, 0, i);
console.log(i, "value -- ", value)

const res = updStatus(0.5, 4, 0.5, 2, _ms, skid)
console.log(res)