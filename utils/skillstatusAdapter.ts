//@ts-nocheck

// CHECAR https://skillstatus.vercel.app/
import type { SkillNode, Skillstatus } from "../types/Skillstatus";
import type { Skilltree } from "../types/Skilltree";

export function skillstatusAdapter(skilltree: Skilltree) {
  function getDeep(id: string): number {
    const dep: string[] = skilltree.edges
      .filter((e) => e.target === id)
      .map((e) => e.source);

    if (dep.length === 0) {
      return 0;
    } else {
      const deeps = dep.map((d) => getDeep(d));
      return Math.max(...deeps) + 1;
    }
  }

  function setGroup(node: SkillNode) {
    const group: string[] = skillstatus.edges
      .filter((e) => e.source === node.id || e.target === node.id)
      .map((e) => (e.target === node.id ? e.source : e.target));
    return group;
  }

  const skillstatus: Skillstatus = {
    id: "",
    user: {
      id: "",
      name: "",
      email: "",
      password: "",
      isAdmim: false,
      teacherId: "",
      studentId: "",
      verified: false,
      isDark: false,
      keepConected: false,
      pushNotification: false,
    },
    nodes: [],
    edges: skilltree.edges,
    height: 1,
    width: 6,
    sizeWidth: 0,
    sizeHeight: 0,
    //skilltree: skilltree,
  };

 /*  Object.values(skilltree.nodes).forEach((n, i) => {
    //EH AKI
    skillstatus.nodes.push({
      id: n.id + "",
      node: n,
      group: [],
      status: {
        id: "",
        value: Math.floor(Math.random() * 100), //'-/-',
      },
      //status: Math.floor(Math.random() * 100) + "%",//"--",
      deep: getDeep(n.id),
    });
    if (skillstatus.nodes[i].deep >= skillstatus.height) {
      skillstatus.height = skillstatus.nodes[i].deep + 1;
    }
  }); */

  Object.values(skilltree.nodes).forEach((n) => {
	const newNode = {
	  id: n.id + "",
	  node: n,
	  group: [],
	  status: {
		id: "",
		value: Math.floor(Math.random() * 100),
	  },
	  deep: getDeep(n.id),
	};
  
	// Adiciona o novo nó ao array
	skillstatus.nodes.push(newNode);
  
	// Verifica a profundidade do novo nó
	if (newNode.deep >= skillstatus.height) {
	  skillstatus.height = newNode.deep + 1;
	}
  });
  
  const deepCount = Array(skillstatus.height)
    .fill(null)
    .map((_, i) =>
      skillstatus.nodes.reduce((acc, n) => (n.deep === i ? acc + 1 : acc), 0)
    )
    .reverse();

  const cords: number[][] = Array(skillstatus.height)
    .fill(null)
    .map((_, k) =>
      Array.from({ length: deepCount[k] }, (_, i) =>
        deepCount[k] === 1 ? 0.5 : i / (deepCount[k] - 1)
      )
    );

  // PARAMS

  //let w = skillstatus.width//skillstatus.height + 1; //M|UDAR para width de verdade
  //w = skillstatus.height + 1;

  const alpha = 1.6; //angular coeficient of spanning
  const spanX = 100; //old factorX
  const spanY = spanX * 4.4; //400;

  const w = Math.max(...deepCount); //width of graph //w * 240//320//240;
  const h = skillstatus.height; // height of graph

  const width = w * spanX;
  const height = h * spanY;

  const y0 = (height * 0.75) / h; // skillstatus.height//data.height; //250; //500;
  const y1 = y0 - 1.8 * spanX;
  const y2 = y0;

  const factorY = 1.1; // ???

  const sortedObjs = skillstatus.nodes.sort((a, b) =>
    a.deep > b.deep ? -1 : 1
  ); //_.sortBy( skillstatus.nodes, 'deep' );

  skillstatus.nodes = sortedObjs;
  Object.values(skillstatus.nodes).forEach((n) => (n.group = setGroup(n)));

  /**
   * l -> reversed level, 0 means the last level NOT the first
   * t -> % of i-width, 0 means the left edge, 0.5 means middle, 1 means the right edge
   *  */
  const cordsX = cords.flatMap((arr, l) =>
    arr.map((t) => (((2 * (h - l)) / alpha + (w + 1)) * t + l / alpha) * spanX)
  );

  const cordsY = cords.flatMap((arr, j) =>
    arr.map(
      (t) =>
        (y0 - 2 * y1 + y2) * t ** 2 + 2 * (y1 - y0) * t + y0 + y0 * factorY * j
    )
  );

  skillstatus.nodes.forEach((n, i) => {
    n.node.position.x = cordsX[i];
    n.node.position.y = cordsY[i];
  });

  skillstatus.sizeWidth = width;
  skillstatus.sizeHeight = height;

  return skillstatus;
}

export default skillstatusAdapter;
