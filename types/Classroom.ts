import { ArcadeData } from './ArcadeData';
import type { Skillmap } from './Skillmap';
import type { Skilltree } from './Skilltree';

export type Classroom = {
	id: string;
	name: string;
	samples: number;
	decay: number;
	skillmaps: Skillmap[];
	createdAt: Date | string;
	updatedAt: Date | string;
	skilltreeId: string;
	skilltree: Skilltree;
	teachers: {
		id: string;
		userId: string;
	}[];
	arcadeData: ArcadeData
};
