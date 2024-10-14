import type { Task } from './Task';

export type Taskanswer = {
	essayAnswer: string;
	alternativeAnswers: string[];
	id: string;
	taskId: string;
	studentId: string;
	feedback: string;
	task?: Task;
};
