import type { Task } from './Task';
import { TimeSegment } from './TimeSegment';

export type Taskanswer = {
	essayAnswer: string;
	alternativeAnswers: string[];
	id: string;
	taskId: string;
	studentId: string;
	feedback?: string;
	task?: Task;
	timeSegments?: TimeSegment[];
	classroomId: string;
	totalDuration?: number;
	views?: number;
};
