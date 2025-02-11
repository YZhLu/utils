import { Classroom } from "./Classrooms";
import { Student } from "./Student";
import { Task } from "./Task";

export type TrainingSession = {
    id: string;
    startedAt: Date;
    endedAt: Date;
    duration: number; // Em segundos
    score: number;
    hits: number;
    misses: number;
    volume: number; // Tasks quantity
    speed: number; // Seconds per task
    variation?: number; // 0-1
  
    createdAt: Date;
    updatedAt: Date;
  
    student: Student;
    studentId: string;
    classroom: Classroom;
    classroomId: string;
  
    tasksHit: Task[];
    tasksMiss: Task[];
  };
  