export type Profile = {
	id: string;
	bio: string | null;
	picture: string | null;
	//
	level: number;
	stars: number[];
	stage: number;
	//
	streakCount: number;
	streakStartDate: string;
	lastStreakCheckpointDate: string;
	belt: string;
	points: number;
	//
	stamina: number; // volume
	discipline: number; // frequencia
	knowledge: number; // intensidade
	speed: number; // densidade
	runes: string[];
	badges: string[];
	spells: string[];
	studentId: string;
	classroomId: string;
};
