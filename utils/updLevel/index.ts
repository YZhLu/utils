export default function updLevel(stage: number, shifts: number[]): number {
	let level = 0;
	const len = shifts.length;

	for (let i = 0; i < len; i++) {
		if (stage >= shifts[i]!) {
			level = i;
		} else {
			break;
		}
	}
	// console.log("chamou", level, stage)
	return level;
}
