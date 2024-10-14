import type { MapNode } from './Skillmap';

export interface MapStatus {
	id: string;
	value: number | undefined;
	mapNode: MapNode;
	skillmapId: string;
	userId: string;
}
