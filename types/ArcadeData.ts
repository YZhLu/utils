import { Classroom } from "./Classroom";

export interface ArcadeData {
  id: string;
  skills: string;
  template: number[];
  shifts: number[];
  classroom?: Classroom;
  classroomId: string;
}
