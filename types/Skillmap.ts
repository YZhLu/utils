import type { Node } from './Skillspace';
import type { MapStatus } from './Mapstatus';

export interface MapEdge {
	id: string;
	source: string;
	target: string;
	skillmapId: string;
	createdAt?: string;
	updatedAt?: string;
}

export interface MapNode {
	id: string;
	x: number;
	y: number;
	group: string[];
	deep: number;
	node: Node;
	skillmapId: string;
	mapStatus?: MapStatus[];
	createdAt?: string;
	updatedAt?: string;
	nodeId?: string;
}

export interface Skillmap {
	id: string;
	name: string;
	classroomId: string;
	skilltreeId: string;
	height: number;
	width: number;
	sizeWidth: number;
	sizeHeight: number;

	mapNodes: MapNode[];
	mapEdges: MapEdge[];
	mapStatus: MapStatus[];
	createdAt?: string;
	updatedAt?: string;
}
