import type { Skill } from '../../types/Skill';
import type { Skillstatus } from '../../types/Skillstatus';
import type { Alternative } from '../../types/Alternative';
//import type { Classroom } from "../../types/Classrooms";
import type { Task } from '../../types/Task';
import type { Taskanswer } from '../../types/Taskanswer';

export function increment(
	score: number,
	maxScore: number,
	decay: number,
	nSamples: number,
	distance: number
) {
	const inc = (score / maxScore - (1 - score / maxScore)) * ((1 - decay) ** distance / nSamples);
	return inc;
}

export function getChain(skill: Skill, skillstatus: Skillstatus) {
	const chain: { [id: string]: number } = {};
	chain[skill.id] = 0;
	const firstNode = skillstatus.nodes.find((node) => node.node.data.id === skill.id);
	const node = firstNode;
	//console.log("node -- ", node)
	let deep = node?.deep ? node.deep : 0;
	while (deep > 0) {
		deep = deep - 1;
		Object.keys(chain).forEach((id) => {
			//console.log("id = ", id)
			skillstatus.nodes
				.find((node) => node.node.data.id === id)
				?.group.forEach((n) => {
					//console.log("node? = ", n)
					const _node = skillstatus.nodes.find((node) => node.node.id === n);
					//console.log("node = ", _node)
					//console.log("cond - ", _node?.deep && _node.deep === deep)
					if (_node?.deep && _node.deep === deep) {
						chain[_node.node.data.id] = firstNode?.deep ? firstNode.deep - deep : deep;
					}
				});
		});
		//console.log("deep = ", deep)
		//console.log("chsin = ", chain)
	}
	return chain;
}

export const getScore = (score: number, alternative: Alternative) =>
	(score = score + alternative.score);

export function getScoreFromTaskanswer(taskanswer: Taskanswer, task: Task) {
	const alternativesAns = task.alternatives.filter((a: Alternative) =>
		taskanswer.alternativeAnswersIds.includes(a.statement)
	);
	const score: number = alternativesAns.reduce(getScore, 0);
	return score;
}

/* export function getScoresFromAnswerByAssessment(answer: any) {
    const scores: { [id: string]: number } = {};
    //const getScore = (score: number, alternative: Alternative) => score = score + alternative.score;
    answer.taskanswers.forEach((tans: Taskanswer) => {
        //console.log(answer.assessment.tasks.find(t=>t.id === tans.taskId))
        const alternativesAns = answer.assessment.tasks.find((t: Task) => t.id === tans.taskId).alternatives.filter((a: any) => tans.alternativeAnswers.includes(a.statement));
        //console.log("tansal",tans.alternativeAnswers)
        //console.log("altans", answer.assessment.tasks.find(t => t.id === tans.taskId).alternatives)

        scores[`${tans.id}`] = alternativesAns.reduce(getScore, 0);
    });
    return scores;
} */

export const getIncrementsFromTaskanswer = (
	taskanswer: Taskanswer,
	task: Task,
	decay: number,
	samples: number,
	skillstatus: Skillstatus
) => {
	const score = getScoreFromTaskanswer(taskanswer, task);
	const increments: { [id: string]: number } = {};
	task.skills.forEach((skill: Skill) => {
		const maxS = task.maxScore || 1;
		const s = score;
		const chain = getChain(skill, skillstatus);
		//console.log("chain -- ", chain)

		Object.keys(chain).forEach((k) => {
			if (!increments[`${k}`]) increments[`${k}`] = 0;

			increments[`${k}`] = increments[`${k}`]! + increment(s, maxS, decay, samples, chain[k]!);
			//console.log("increments[`${k}`] -- ", increments[`${k}`])
		});
	});
	return increments;
};

/* export const _getIncrements = (answer: any, cls: Classroom, skillstatus: Skillstatus) => {
    const scores = getScoresFromAnswerByAssessment(answer);
    //console.log("scores", scores)
    const increments: { [id: string]: number } = {};
    answer.taskanswers.forEach((tans: any) => {
        answer.assessment.tasks.find((t: Task) => t.id === tans.taskId).skills.forEach((skill: Skill) => {
            const maxS = answer.assessment.tasks.find((t: Task) => t.id === tans.taskId).maxScore;
            const s = scores[`${tans.id}`];
            //console.log("s", s)
            const chain = getChain(skill, skillstatus)
            //console.log("chain", chain)
            Object.keys(chain).forEach(k => {

                if (!increments[`${k}`]) increments[`${k}`] = 0
                //console.log("k1",k,"increments", increments,"skid", skill.id, "increments[`${skill.id}`]", increments[`${skill.id}`])

                increments[`${k}`] = increments[`${k}`] + increment(s, maxS, cls.decay, cls.samples, chain[k]);
                //console.log("k2",k,"increments", increments,"skid", skill.id, "increments[`${skill.id}`]", increments[`${skill.id}`])

            });
            //increments[`${skill.id}`] = increments[`${skill.id}`] + increment(s, maxS, cls.decay, cls.nSamples, 0);
        })

    });
    //console.log("inc", increments)
    return increments;
} */

export function updValue(value: number, increment: number) {
	const _newValue = value + increment;
	console.log(value, increment, _newValue);
	const newValue = _newValue < 0 ? 0 : _newValue > 1 ? 1 : _newValue;
	return increment ? newValue : value;
}

export const updStatusFromTaskanswer = (
	skillstatus: Skillstatus,
	taskanswer: Taskanswer,
	task: Task,
	decay: number,
	samples: number
) => {
	const increments = getIncrementsFromTaskanswer(taskanswer, task, decay, samples, skillstatus);
	const newStatus = skillstatus.nodes.map((n) => {
		const nStatus = n.status;
		//console.log("nStatus = ",nStatus)
		nStatus.value = updValue(n.status.value, increments[n.node.data.id]!);
		return nStatus;
	});

	return newStatus;
};

/* export const _updStatus = (skillstatus: Skillstatus, answer: any, cls: Classroom) => {
    const increments = _getIncrements(answer, cls, skillstatus);
    const newStatus = skillstatus.nodes.map(n => {
        const nStatus = n.status;
        //console.log("s", (s))//, increments[s.skillnode.id]))
        nStatus.value = updValue(n.status.value, increments[n.node.id]);
        return nStatus;
    })

    return newStatus;
}
 */

/* export const updStatus = (skillstatus: Skillstatus, answer: any, cls: Classroom) => {
    const increments = getIncrements(answer, cls, skillstatus);
    skillstatus.nodes.forEach(n => {
        n.status.value = updValue(n.status.value, increments[n.node.id]);
    });
} */
