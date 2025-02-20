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
  strength?: number;  // intensidade
  speed: number; // densidade
  agile?: number; // variedade

  taskCount?: number;
  hitCount?: number;
  totalTime?: number;

  runes: string[];
  badges: string[];
  spells: string[];
  studentId: string;
  classroomId: string;
};
