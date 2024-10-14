export type User = {
	id: string;
	name: string;
	email: string;
	password: string;
	isAdmim: boolean;
	teacherId?: string;
	studentId?: string;
	verified: boolean;
	isDark: boolean;
	keepConected: boolean;
	pushNotification: boolean;
};
