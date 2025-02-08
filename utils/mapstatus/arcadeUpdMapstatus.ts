import type { MapStatus } from "../../types/Mapstatus";

export function increment(
  grade: number,
  size: number,
  decay: number,
  nSamples: number,
  distance: number
) {
  let inc;

  if (size <= nSamples) {
    inc = size * grade * ((1 - decay) ** distance / nSamples);
  } else {
    if (distance == 0) {
      inc = grade;
    } else {
      inc = grade * (1 + decay) ** distance;
    }
  }
  // const inc =
  //   size <= nSamples
  //     ? size * grade * ((1 - decay) ** distance / nSamples)
  //     : grade * (1 - decay) ** distance;
  return inc;
}

export function getChain(
  skillId: string,
  mapStatus: MapStatus[]
): { [id: string]: number } {
  //const mapNodes = skillmap.mapNodes;
  //console.log(skillId)
  const chain: { [id: string]: number } = {};
  chain[skillId] = 0;
  const firstNode = mapStatus.find(
    (mStat) => mStat.mapNode.node.data.id === skillId
  );
  const mapStat = firstNode;
  if (mapStat) {
    //console.log('node -- ', mapStat);
    let deep = mapStat.mapNode.deep ? mapStat.mapNode.deep : 0;
    while (deep > 0) {
      deep = deep - 1;
      Object.keys(chain).forEach((id) => {
        //console.log("id = ", id)
        mapStatus
          .find((mStat) => mStat.mapNode.node.data.id === id)
          ?.mapNode.group.forEach((n: string) => {
            //console.log("node? = ", n)
            const _node = mapStatus.find(
              (_mStat) => _mStat.mapNode.node.id === n
            );
            //console.log("node = ", _node)
            //console.log("cond - ", _node?.deep && _node.deep === deep)
            if (_node?.mapNode.deep === deep) {
              chain[_node.mapNode.node.data.id] = firstNode?.mapNode.deep
                ? firstNode.mapNode.deep - deep
                : deep;
            }
          });
      });
      //console.log("deep = ", deep)
      //console.log("chsin = ", chain)
    }
  }
  //console.log(chain)
  return chain;
}

export function getMapNodesChain(
  mapNodeIds: string[],
  chain: { [id: string]: number }
) {
  // console.log(mapNodeIds, chain);

  return chain;
}

export function updValue(
  size: number,
  samples: number,
  value: number,
  increment: number
) {
  //console.log(value);
  //const _newValue = increment > value ? increment: value + increment;
  const _newValue = size >= samples ? increment : value + increment;
  //console.log('updValue -->', value, increment, _newValue);
  const newValue = _newValue < 0 ? 0 : _newValue > 1 ? 1 : _newValue;
  return increment ? newValue : value;
}

export const getIncrements = (
  grade: number,
  size: number,
  decay: number,
  samples: number,
  mapStatus: MapStatus[],
  skillId: string
) => {
  const increments: { [id: string]: number } = {};
  const chain = getChain(skillId, mapStatus);

  // console.log(mapNodesChain);
  //console.log("chain -- ", chain)
  Object.keys(chain).forEach((k) => {
    if (!increments[`${k}`]) increments[`${k}`] = 0;

    increments[`${k}`] =
      increments[`${k}`]! + increment(grade, size, decay, samples, chain[k]!);
    //console.log("increments[`${k}`] -- ", increments[`${k}`])
  });

  return increments;
};

export const updStatus = (
  // mapStatus: MapStatus[],
  grade: number,
  size: number,
  decay: number,
  samples: number,
  mapStatus: MapStatus[],
  skillId: string
) => {
  // const mapNodeIds = mapStatus.map((m) => (m.mapNode ? m.mapNodeId : ''));

  const increments = getIncrements(
    grade,
    size,
    decay,
    samples,
    mapStatus,
    skillId
  );

  const keysIncrements = Object.keys(increments);

  const _mapStatus = mapStatus.filter((_m: MapStatus) =>
    keysIncrements.includes(_m.mapNode.node.data.id)
  );

  const newStatus = _mapStatus.map((_m: MapStatus) => {
    const m = { ..._m };
    if (m.value != undefined) {
      //console.log("nStatus = ",nStatus)
      m.value = updValue(
        size,
        samples,
        m.value,
        increments[m.mapNode.node.data.id]!
      );
    }
    return m;
  });

  //  console.log(increments);
  // console.log(mapStatus, increments);
  return newStatus;
};
