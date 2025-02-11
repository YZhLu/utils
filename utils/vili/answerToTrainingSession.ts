import { ArcadeAnswer } from "./scoreArcadeTask";

export function answerToTrainingSession(answer: ArcadeAnswer[]) {
  console.log("answer scoreArcade", answer);
  const volume = answer.length;
  const score = answer.reduce((acc, ans) => acc + ans.alternative.score, 0);

  let hits: number = 0,
    misses: number = 0,
    tasksHitIds: string[] = [],
    tasksMissIds: string[] = [];

  answer.forEach((ans) => {
    if (ans.alternative.score > 0) {
      hits++;
      tasksHitIds.push(ans.taskId);
    } else {
      misses++;
      tasksMissIds.push(ans.taskId);
    }
  });

  //answer.reduce((acc, ans) => acc + ans.alternative.score, 0);

  const grade = 2 * (score / volume) - 1; //O mesmo que ((score / maxScore) - (1 - (score / maxScore)))
  //console.log(volume, score, grade);
  return { grade, hits, misses, volume, tasksHitIds, tasksMissIds };
}
