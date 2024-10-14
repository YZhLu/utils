import type { Alternative } from '../../types/Alternative';

type ArcadeAnswer = {
	taskId: string;
	selectedAlternative: string;
	alternative: Alternative;
};

export function scoreArcadeTasks(answer: ArcadeAnswer[]) {
	console.log('answer scoreArcade', answer);
	const len = answer.length;
	const score = answer.reduce((acc, ans) => acc + ans.alternative.score, 0);
	const grade = 2 * (score / len) - 1; //O mesmo que ((score / maxScore) - (1 - (score / maxScore)))
	console.log(len, score, grade);
	return grade;
}
