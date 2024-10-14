import type { Alternative } from './Alternative';
import type { Skill } from './Skill';

export type Task = {
	id: string;
	name: string;
	//isEssay?: boolean;
	//feedback?: string;
	maxScore?: number;
	//answerKey?: string;
	//isFeedbackImmediate: boolean;
	//isSingleAnswer?: boolean;
	isTemplate: boolean;
	scope: string;
	body: string;
	command: string;
	alternatives: Alternative[];
	creator: {
		id: string;
		userId: string;
	};
	skills: Skill[];
	//assessments?:Assessment[];
	//taskanswers?:Taskanswer[];
};
