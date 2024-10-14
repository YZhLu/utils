export type Streak = {
	streakStartDate: string;
	lastStreakCheckpointDate: string;
	streakCount: number;
};

export function formattedDate(date: Date): string {
	// NOTE@jsjoeio
	// sometimes this returns 11/11/2021
	// other times it returns 11/11/2021, 12:00:00 AM
	// which is why we call the .split at the end
	return date.toLocaleString('en-US').split(',')[0]!;
}

export function buildStreakCount(date: Date): Streak {
	return {
		streakStartDate: formattedDate(date),
		lastStreakCheckpointDate: formattedDate(date),
		streakCount: 0
	};
}

export function incrementStreakCount(currentStreak: Streak, currentDate: string): Streak {
	return {
		...currentStreak,
		lastStreakCheckpointDate: currentDate,
		streakCount: (currentStreak.streakCount += 1)
	};
}

export function resetStreakCount(currentDate: string): Streak {
	const streak: Streak = {
		streakStartDate: currentDate,
		lastStreakCheckpointDate: currentDate,
		streakCount: 0
	};

	return streak;
}

export function getDifference(currentDate: string, lastStreakCheckpointDate: string): number {
	const difference =
		parseInt(currentDate.split('/')[1]!) - parseInt(lastStreakCheckpointDate.split('/')[1]!);
	return difference;
}

export function getCurrentDate(): string {
	const today = new Date();
	const currentDate = formattedDate(today);
	return currentDate;
}
export function checkStreak(streak: Streak): Streak {
	const currentDate = getCurrentDate();
	const difference = getDifference(currentDate, streak.lastStreakCheckpointDate);

	// logging in on the same day
	if (difference === 0) {
		return streak;
	}
	// This means they logged in the day after the current
	else if (difference === 1) {
		return incrementStreakCount(streak, currentDate);
	}
	// Otherwise they logged in after a day, which would
	// break the streak
	else if (difference > 1) {
		return resetStreakCount(currentDate);
	} else {
		console.log('ERROR - PROBALLY DIFFERENCE IS NaN');
		const today = new Date();
		const _streak = buildStreakCount(today);
		return incrementStreakCount(_streak, _streak.lastStreakCheckpointDate);
	}
}

export function getStreak(streakString: string): Streak {
	try {
		const _streak = JSON.parse(streakString);

		const streak = checkStreak(_streak);
		return streak;
	} catch (error) {
		console.error(
			error,
			'something went wrong getting the streak. JSON.parse error? initializing and getting streak.'
		);

		const today = new Date();
		return buildStreakCount(today);
	}
}
