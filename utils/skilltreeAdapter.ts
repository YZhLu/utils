// @ts-nocheck
/* export function skilltreeAdapter(data) {
    //console.log("chamou adapter")
    function getDeep(arr) {
        if (arr.length === 0) {
            return 0;
        } else {
            let deeps = arr.map(d => getDeep(data.nodes[d + ''].dependency));
            return Math.max(...deeps) + 1;
        }
    }

    function setGroup(node) {
        let group = skilltree.links.filter(l => l.target === node.id || l.source === node.id).map(l => l.target === node.id ? l.source : l.target);
        return group;
    }

    let skilltree = {
        nodes: [],
        height: 0,
        links: [],
        size: { width: 0, height: 0 },

    };

    data.links.forEach((l) => {
        skilltree.links.push({
            source: l.source + "",
            target: l.target + "",
        })
    });

    Object.values(data.nodes).forEach((n, i) => {
        skilltree.nodes.push({
            id: n.id + "",
            alias: n.title,
            description: n.description,
            status: Math.floor(Math.random() * 100) + "%",//"--",
            deep: getDeep(n.dependency)
        })
        if (skilltree.nodes[i].deep > skilltree.height) { skilltree.height = skilltree.nodes[i].deep + 1 }
    });

    let deepCount = Array(skilltree.height)
        .fill(null)
        .map((_, i) =>
            skilltree.nodes.reduce((acc, n) => (n.deep === i ? acc + 1 : acc), 0)
        )
        .reverse();

    let cords = Array(skilltree.height)
        .fill(null)
        .map((_, k) =>
            Array.from(
                { length: deepCount[k] },
                (_, i) => i / (deepCount[k] - 1)
            )
        );


    // PARAMS

    let w = 8;
    let width = w * 240//320//240;
    let h = 480;

    let height = h//400;
    let _height = skilltree.height * height;

    let padding = 120//240//120;
    let x0 = padding; //200;
    let x1 = width / 2; //800;
    let x2 = width - padding; //1600;
    let y0 = (_height * 0.75) / skilltree.height//data.height; //250; //500;
    let y1 = y0 - 1.6 * padding;
    let y2 = y0;
    let factorX = 100;
    let factorY = 1.1;


    let sortedObjs = skilltree.nodes.sort((a, b) => a.deep > b.deep ? -1 : 1); //_.sortBy( skilltree.nodes, 'deep' );
    //console.log(sortedObjs)
    skilltree.nodes = sortedObjs;
    Object.values(skilltree.nodes).forEach(n => n.group = setGroup(n));

    let cordsX = cords.flatMap((arr, j) =>
        arr.map(
            (t) =>
                (x0 - factorX * j - 2 * x1 + x2 + factorX * j) * t ** 2 +
                2 * (x1 - x0 - factorX * j) * t +
                x0 +
                factorX * j
        )
    );
    let cordsY = cords.flatMap((arr, j) =>
        arr.map(
            (t) =>
                (y0 - 2 * y1 + y2) * t ** 2 +
                2 * (y1 - y0) * t +
                y0 +
                y0 * factorY * j
        )
    );

    skilltree.nodes.forEach((n, i) => {
        /* console.log("-106 - cordsX", cordsX)
        console.log("cords", cords)
        console.log("n", n)
        console.log("i", i)
        console.log("cordsX[i] ", cordsX[i]) * /
        n.x = cordsX[i];
        n.y = cordsY[i];
    });

    skilltree.size.width = width;
    skilltree.size.height = _height;

    //console.log("eu - ",skilltree)
    //console.log(setGroup(skilltree.nodes[10]))
    //console.log(skilltree.nodes)

    return skilltree;

}
 */

export function skilltreeAdapter(data, skillspace) {
	//console.log("chamou adapter", skillspace)
	function getDeep(arr) {
		if (arr.length === 0) {
			return 0;
		} else {
			let deeps = arr.map((d) => getDeep(data.nodes[d + ''].dependency));
			return Math.max(...deeps) + 1;
		}
	}

	function setGroup(node) {
		let group = skilltree.links
			.filter((l) => l.dependentId === node.id || l.dependsOnId === node.id)
			.map((l) => (l.dependentId === node.id ? l.dependsOnId : l.dependentId));
		return group;
	}

	let skilltree = {
		nodes: [],
		height: 1,
		links: [],
		sizeWidth: 0,
		sizeHeight: 0,
		skillspace: skillspace
	};
	//console.log("data.links", data.links)
	data.links.forEach((l) => {
		skilltree.links.push({
			dependsOnId: l.dependsOnId + '',
			dependentId: l.dependentId + ''
		});
	});

	Object.values(data.nodes).forEach((n, i) => {
		skilltree.nodes.push({
			id: n.id + '',
			alias: n.title,
			description: n.description,
			status: Math.floor(Math.random() * 100) + '%', //"--",
			deep: getDeep(n.dependency)
		});
		if (skilltree.nodes[i].deep >= skilltree.height) {
			skilltree.height = skilltree.nodes[i].deep + 1;
		}
	});

	let deepCount = Array(skilltree.height)
		.fill(null)
		.map((_, i) => skilltree.nodes.reduce((acc, n) => (n.deep === i ? acc + 1 : acc), 0))
		.reverse();

	let cords = Array(skilltree.height)
		.fill(null)
		.map((_, k) =>
			Array.from({ length: deepCount[k] }, (_, i) =>
				deepCount[k] === 1 ? 0.5 : i / (deepCount[k] - 1)
			)
		);

	// PARAMS

	let w = 8;
	let width = w * 240; //320//240;
	let h = 480;

	let height = h; //400;
	let _height = skilltree.height * height;

	let padding = 120; //240//120;
	let x0 = padding; //200;
	let x1 = width / 2; //800;
	let x2 = width - padding; //1600;
	let y0 = (_height * 0.75) / skilltree.height; //data.height; //250; //500;
	let y1 = y0 - 1.6 * padding;
	let y2 = y0;
	let factorX = 100;
	let factorY = 1.1;

	let sortedObjs = skilltree.nodes.sort((a, b) => (a.deep > b.deep ? -1 : 1)); //_.sortBy( skilltree.nodes, 'deep' );
	//console.log(sortedObjs)
	skilltree.nodes = sortedObjs;
	Object.values(skilltree.nodes).forEach((n) => (n.group = setGroup(n)));

	let cordsX = cords.flatMap((arr, j) =>
		arr.map(
			(t) =>
				(x0 - factorX * j - 2 * x1 + x2 + factorX * j) * t ** 2 +
				2 * (x1 - x0 - factorX * j) * t +
				x0 +
				factorX * j
		)
	);
	let cordsY = cords.flatMap((arr, j) =>
		arr.map((t) => (y0 - 2 * y1 + y2) * t ** 2 + 2 * (y1 - y0) * t + y0 + y0 * factorY * j)
	);

	skilltree.nodes.forEach((n, i) => {
		/* console.log("-106 - cordsX", cordsX)
        console.log("cords", cords)
        console.log("n", n)
        console.log("i", i)
        console.log("cordsX[i] ", cordsX[i]) */
		n.x = cordsX[i];
		n.y = cordsY[i];
	});

	skilltree.sizeWidth = width;
	skilltree.sizeHeight = _height;

	//console.log("eu - ",skilltree)
	//console.log(setGroup(skilltree.nodes[10]))
	//console.log(skilltree.nodes)

	return skilltree;
}

export default skilltreeAdapter;
